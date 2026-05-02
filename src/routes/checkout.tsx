import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { whatsappLink } from "@/lib/contact";
import { toast } from "sonner";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Kanti" }] }),
  component: CheckoutPage,
});

type Address = {
  id: string;
  full_name: string;
  phone: string;
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  pincode: string;
  is_default: boolean;
};

function CheckoutPage() {
  const { user, loading: authLoading } = useAuth();
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [placing, setPlacing] = useState(false);
  const [success, setSuccess] = useState<{ orderNumber: string; waUrl: string } | null>(null);

  // Inline new-address form
  const [newAddr, setNewAddr] = useState({ full_name: "", phone: "", line1: "", line2: "", city: "", state: "", pincode: "" });
  const [showNew, setShowNew] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/auth", search: { redirect: "/checkout" } });
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("addresses")
      .select("*")
      .eq("user_id", user.id)
      .order("is_default", { ascending: false })
      .then(({ data }) => {
        const list = (data ?? []) as Address[];
        setAddresses(list);
        if (list.length === 0) setShowNew(true);
        else setSelected(list[0].id);
      });
  }, [user]);

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    if (items.length === 0) return toast.error("Your cart is empty");

    let shipping: Address | null = addresses.find((a) => a.id === selected) ?? null;

    setPlacing(true);
    try {
      if (showNew) {
        const { data, error } = await supabase
          .from("addresses")
          .insert({ ...newAddr, user_id: user.id, is_default: addresses.length === 0 })
          .select()
          .single();
        if (error) throw error;
        shipping = data as Address;
      }
      if (!shipping) throw new Error("Please select a shipping address");

      const { data: order, error: oerr } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total_amount: total,
          status: "pending",
          payment_method: "cod",
          notes,
          shipping_full_name: shipping.full_name,
          shipping_phone: shipping.phone,
          shipping_line1: shipping.line1,
          shipping_line2: shipping.line2,
          shipping_city: shipping.city,
          shipping_state: shipping.state,
          shipping_pincode: shipping.pincode,
        })
        .select()
        .single();
      if (oerr) throw oerr;

      const { error: ierr } = await supabase.from("order_items").insert(
        items.map((it) => ({
          order_id: order.id,
          product_id: it.id,
          product_name: it.name,
          product_image: it.image_url,
          unit_price: it.price,
          quantity: it.quantity,
        })),
      );
      if (ierr) throw ierr;

      // Build WhatsApp enquiry message for the shop
      const lines = items
        .map((it) => `• ${it.name} × ${it.quantity} — ₹${(it.price * it.quantity).toFixed(0)}`)
        .join("\n");
      const msg = `*New Kanti order ${order.order_number}*\n\n${lines}\n\n*Total:* ₹${total.toFixed(0)}\n*Payment:* COD\n\n*Ship to:*\n${shipping.full_name}\n${shipping.line1}${shipping.line2 ? ", " + shipping.line2 : ""}\n${shipping.city}, ${shipping.state} — ${shipping.pincode}\n📞 ${shipping.phone}${notes ? `\n\n*Notes:* ${notes}` : ""}`;
      const waUrl = whatsappLink(msg);

      // Open WhatsApp in a new tab so the customer can send the enquiry
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }

      clear();
      setSuccess({ orderNumber: order.order_number, waUrl });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Order failed");
    } finally {
      setPlacing(false);
    }
  }

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">Loading…</div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-2xl px-4 py-20 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-herb" />
          <h1 className="mt-6 font-display text-4xl font-700 text-foreground">Order placed!</h1>
          <p className="mt-3 text-muted-foreground">
            Your order <span className="font-semibold text-foreground">{success.orderNumber}</span> has been received.
            We've opened WhatsApp so you can send the enquiry to confirm it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={success.waUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Send WhatsApp enquiry
            </a>
            <button onClick={() => navigate({ to: "/account/orders" })} className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              View my orders
            </button>
            <button onClick={() => navigate({ to: "/" })} className="rounded-full border border-border px-6 py-2.5 text-sm font-medium">
              Continue shopping
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-700 text-foreground">Checkout</h1>

        <form onSubmit={placeOrder} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-700 text-foreground">Shipping address</h2>

              {addresses.length > 0 && !showNew && (
                <ul className="mt-4 space-y-3">
                  {addresses.map((a) => (
                    <li key={a.id}>
                      <label className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition ${selected === a.id ? "border-primary bg-primary/5" : "border-border"}`}>
                        <input type="radio" name="addr" checked={selected === a.id} onChange={() => setSelected(a.id)} className="mt-1" />
                        <div className="text-sm">
                          <div className="font-display text-base font-700 text-foreground">{a.full_name}</div>
                          <div className="text-muted-foreground">
                            {a.line1}{a.line2 ? `, ${a.line2}` : ""}, {a.city}, {a.state} — {a.pincode} · {a.phone}
                          </div>
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>
              )}

              {!showNew && (
                <button type="button" onClick={() => setShowNew(true)} className="mt-4 text-sm font-semibold text-primary hover:underline">
                  + Use a new address
                </button>
              )}

              {showNew && (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Input placeholder="Full name" required value={newAddr.full_name} onChange={(v) => setNewAddr({ ...newAddr, full_name: v })} />
                  <Input placeholder="Phone" required value={newAddr.phone} onChange={(v) => setNewAddr({ ...newAddr, phone: v })} />
                  <Input className="sm:col-span-2" placeholder="Address line 1" required value={newAddr.line1} onChange={(v) => setNewAddr({ ...newAddr, line1: v })} />
                  <Input className="sm:col-span-2" placeholder="Address line 2 (optional)" value={newAddr.line2} onChange={(v) => setNewAddr({ ...newAddr, line2: v })} />
                  <Input placeholder="City" required value={newAddr.city} onChange={(v) => setNewAddr({ ...newAddr, city: v })} />
                  <Input placeholder="State" required value={newAddr.state} onChange={(v) => setNewAddr({ ...newAddr, state: v })} />
                  <Input placeholder="Pincode" required value={newAddr.pincode} onChange={(v) => setNewAddr({ ...newAddr, pincode: v })} />
                  {addresses.length > 0 && (
                    <button type="button" onClick={() => setShowNew(false)} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground sm:col-span-2">
                      ← Use a saved address
                    </button>
                  )}
                </div>
              )}
            </section>

            <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-700 text-foreground">Order notes</h2>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Any special instructions?"
                className="mt-3 w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </section>

            <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-700 text-foreground">Payment</h2>
              <p className="mt-2 text-sm text-muted-foreground">Cash on Delivery (COD)</p>
            </section>
          </div>

          <aside className="h-fit rounded-3xl border border-border/60 bg-card p-6 shadow-card">
            <h2 className="font-display text-xl font-700 text-foreground">Summary</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {items.map((it) => (
                <li key={it.id} className="flex justify-between gap-3 text-muted-foreground">
                  <span>{it.name} × {it.quantity}</span>
                  <span className="text-foreground">₹{(it.price * it.quantity).toFixed(0)}</span>
                </li>
              ))}
            </ul>
            <div className="my-4 h-px bg-border" />
            <div className="flex items-center justify-between font-display text-lg font-700">
              <span>Total</span>
              <span className="text-primary">₹{total.toFixed(0)}</span>
            </div>
            <button
              type="submit"
              disabled={placing || items.length === 0}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {placing ? "Placing order…" : "Place order"}
            </button>
          </aside>
        </form>
      </main>
      <Footer />
    </div>
  );
}

function Input({ className = "", value, onChange, ...rest }: { value: string; onChange: (v: string) => void; className?: string } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">) {
  return (
    <input
      {...rest}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`block w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-primary ${className}`}
    />
  );
}
