import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/hooks/useWishlist";
import { resolveProductImages } from "@/lib/productImages";
import { toast } from "sonner";

function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const count = images.length;
  const go = (next: number) => setIdx((next + count) % count);
  return (
    <div className="relative aspect-square overflow-hidden bg-cream">
      <img
        src={images[idx]}
        alt={alt}
        width={800}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); go(idx - 1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-soft hover:bg-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); go(idx + 1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-soft hover:bg-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-foreground" : "w-1.5 bg-foreground/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Products() {
  const { products, loading } = useProducts();
  const { add } = useCart();
  const { user } = useAuth();
  const { has, toggle } = useWishlist();
  const navigate = useNavigate();

  return (
    <section id="products" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Kanti Store
            </span>
            <h2 className="mt-3 font-display text-4xl font-700 text-foreground md:text-5xl">
              Products for <span className="italic text-primary">you</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              <span className="font-marathi">प्रत्येक उत्पादन आत्ता ₹1 introductory price मध्ये.</span>{" "}
              Each product is currently at an introductory price of ₹1.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] animate-pulse rounded-3xl bg-muted" />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              const wished = has(p.id);
              return (
                <article
                  key={p.id}
                  className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="relative aspect-square overflow-hidden bg-cream">
                    <img
                      src={resolveProductImage(p.image_url)}
                      alt={p.name}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      onClick={async () => {
                        if (!user) {
                          toast.info("Sign in to save favourites");
                          navigate({ to: "/auth", search: { redirect: "/" } });
                          return;
                        }
                        await toggle(p.id);
                        toast.success(wished ? "Removed from wishlist" : "Added to wishlist");
                      }}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground/70 shadow-soft transition hover:text-terracotta"
                      aria-label="Toggle wishlist"
                    >
                      <Heart className={`h-4 w-4 ${wished ? "fill-terracotta text-terracotta" : ""}`} />
                    </button>
                    {p.original_price && (
                      <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
                        {Math.round((1 - Number(p.price) / Number(p.original_price)) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-600 text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.subtitle_mr && <span className="font-marathi">{p.subtitle_mr}</span>}
                      {p.subtitle_mr && p.subtitle_en && " · "}
                      {p.subtitle_en}
                    </p>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-2xl font-700 text-primary">
                        ₹{Number(p.price).toFixed(0)}
                      </span>
                      {p.original_price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{Number(p.original_price).toFixed(0)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        add({
                          id: p.id,
                          name: p.name,
                          price: Number(p.price),
                          image_url: p.image_url,
                        });
                        toast.success("Added to cart");
                      }}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                      <ShoppingBag className="h-4 w-4" /> Add to cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
