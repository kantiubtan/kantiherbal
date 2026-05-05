import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "node:crypto";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const Route = createFileRoute("/api/public/razorpay-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
        if (!secret) return new Response("Webhook not configured", { status: 500 });

        const signature = request.headers.get("x-razorpay-signature");
        const body = await request.text();
        if (!signature) return new Response("Missing signature", { status: 401 });

        const expected = createHmac("sha256", secret).update(body).digest("hex");
        const a = Buffer.from(expected);
        const b = Buffer.from(signature);
        const ok = a.length === b.length && timingSafeEqual(a, b);
        if (!ok) return new Response("Invalid signature", { status: 401 });

        let payload: any;
        try {
          payload = JSON.parse(body);
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const event: string = payload?.event ?? "";
        const paymentEntity = payload?.payload?.payment?.entity;
        const orderEntity = payload?.payload?.order?.entity;
        const razorpayOrderId: string | undefined = paymentEntity?.order_id ?? orderEntity?.id;
        const razorpayPaymentId: string | undefined = paymentEntity?.id;

        if (!razorpayOrderId) return new Response("ok");

        if (event === "payment.captured" || event === "order.paid") {
          await supabaseAdmin
            .from("orders")
            .update({
              payment_status: "paid",
              status: "confirmed",
              ...(razorpayPaymentId ? { razorpay_payment_id: razorpayPaymentId } : {}),
            })
            .eq("razorpay_order_id", razorpayOrderId);
        } else if (event === "payment.failed") {
          await supabaseAdmin
            .from("orders")
            .update({ payment_status: "failed" })
            .eq("razorpay_order_id", razorpayOrderId);
        }

        return new Response("ok");
      },
    },
  },
});
