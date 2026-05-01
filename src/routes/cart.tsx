import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/contexts/CartContext";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { resolveProductImage } from "@/lib/productImages";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Sree Kanti" }] }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, total, count } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-700 text-foreground">Your cart</h1>
        <p className="mt-2 text-sm text-muted-foreground">{count} item{count === 1 ? "" : "s"}</p>

        {items.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-border/80 bg-card p-16 text-center">
            <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground" />
            <h2 className="mt-4 font-display text-xl font-700">Your cart is empty</h2>
            <Link to="/" className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-card">
                  <img src={resolveProductImage(it.image_url)} alt={it.name} className="h-24 w-24 rounded-xl object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-600 text-foreground">{it.name}</h3>
                        <div className="mt-1 font-display text-lg font-700 text-primary">₹{Number(it.price).toFixed(0)}</div>
                      </div>
                      <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center gap-2">
                      <button onClick={() => setQty(it.id, it.quantity - 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-muted">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{it.quantity}</span>
                      <button onClick={() => setQty(it.id, it.quantity + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-muted">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="h-fit rounded-3xl border border-border/60 bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-700 text-foreground">Order summary</h2>
              <div className="mt-4 space-y-2 text-sm">
                <Row label="Subtotal" value={`₹${total.toFixed(0)}`} />
                <Row label="Shipping" value="Free" />
                <div className="my-3 h-px bg-border" />
                <Row label="Total" value={`₹${total.toFixed(0)}`} bold />
              </div>
              <Link to="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Proceed to checkout
              </Link>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "font-display text-base font-700 text-foreground" : "text-muted-foreground"}`}>
      <span>{label}</span>
      <span className={bold ? "text-primary" : "text-foreground"}>{value}</span>
    </div>
  );
}
