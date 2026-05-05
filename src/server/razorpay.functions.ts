import { createServerFn } from "@tanstack/react-start";
import { createHmac, timingSafeEqual } from "node:crypto";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

/**
 * Create a Razorpay Order for an existing pending order in our DB.
 * Returns the Razorpay order id + public key id needed to launch checkout.
 */
export const createRazorpayOrder = createServerFn({ method: "POST" })
  .inputValidator((data: { orderId: string }) => {
    if (!data?.orderId || typeof data.orderId !== "string") {
      throw new Error("orderId is required");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) throw new Error("Razorpay keys not configured");

    // Look up the order to get amount + order_number
    const { data: order, error } = await supabaseAdmin
      .from("orders")
      .select("id, order_number, total_amount, razorpay_order_id, payment_status")
      .eq("id", data.orderId)
      .single();
    if (error || !order) throw new Error("Order not found");

    if (order.payment_status === "paid") {
      throw new Error("Order is already paid");
    }

    // If we already created a Razorpay order, reuse it
    if (order.razorpay_order_id) {
      return {
        razorpayOrderId: order.razorpay_order_id,
        keyId,
        amount: Math.round(Number(order.total_amount) * 100),
        currency: "INR",
        orderNumber: order.order_number,
      };
    }

    const amountPaise = Math.round(Number(order.total_amount) * 100);
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountPaise,
        currency: "INR",
        receipt: order.order_number,
        notes: { internal_order_id: order.id, order_number: order.order_number },
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("Razorpay order create failed:", res.status, text);
      throw new Error("Failed to create payment order");
    }
    const rzpOrder = (await res.json()) as { id: string };

    await supabaseAdmin
      .from("orders")
      .update({ razorpay_order_id: rzpOrder.id })
      .eq("id", order.id);

    return {
      razorpayOrderId: rzpOrder.id,
      keyId,
      amount: amountPaise,
      currency: "INR",
      orderNumber: order.order_number,
    };
  });

/**
 * Verify Razorpay payment signature client-returned after checkout.
 * Marks order as paid on success.
 */
export const verifyRazorpayPayment = createServerFn({ method: "POST" })
  .inputValidator((data: {
    orderId: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => {
    if (!data?.orderId || !data.razorpay_order_id || !data.razorpay_payment_id || !data.razorpay_signature) {
      throw new Error("Missing payment verification fields");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) throw new Error("Razorpay secret not configured");

    const expected = createHmac("sha256", keySecret)
      .update(`${data.razorpay_order_id}|${data.razorpay_payment_id}`)
      .digest("hex");

    const a = Buffer.from(expected);
    const b = Buffer.from(data.razorpay_signature);
    const ok = a.length === b.length && timingSafeEqual(a, b);
    if (!ok) {
      await supabaseAdmin
        .from("orders")
        .update({ payment_status: "failed" })
        .eq("id", data.orderId);
      throw new Error("Invalid payment signature");
    }

    const { error } = await supabaseAdmin
      .from("orders")
      .update({
        payment_status: "paid",
        status: "confirmed",
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature,
      })
      .eq("id", data.orderId);
    if (error) throw new Error("Failed to update order");

    return { success: true };
  });
