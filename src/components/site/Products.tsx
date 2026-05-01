import ubtan from "@/assets/product-ubtan.jpg";
import bathsalt from "@/assets/product-bathsalt.jpg";
import soap from "@/assets/product-soap.jpg";
import faceoil from "@/assets/product-faceoil.jpg";
import facemask from "@/assets/product-facemask.jpg";
import { ShoppingBag } from "lucide-react";

const products = [
  { img: ubtan, name: "Traditional Ubtan", mr: "हळद, चंदन, गुलाब", en: "Turmeric, sandalwood, rose", was: 120 },
  { img: facemask, name: "Herbal Summer Face Mask", mr: "Cooling आणि tan removal", en: "Cooling & tan removal", was: 65 },
  { img: bathsalt, name: "Rose Bath Salt", mr: "Relaxing soak साठी", en: "For a relaxing soak", was: 95 },
  { img: soap, name: "Handmade Herbal Soap", mr: "Neem आणि turmeric", en: "Neem & turmeric", was: 80 },
  { img: faceoil, name: "Glow Face Oil", mr: "Marigold आणि sandalwood", en: "Marigold & sandalwood", was: 240 },
];

export function Products() {
  return (
    <section id="products" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Sree Kanti Store</span>
            <h2 className="mt-3 font-display text-4xl font-700 text-foreground md:text-5xl">
              Products for <span className="italic text-primary">you</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              <span className="font-marathi">प्रत्येक उत्पादन आत्ता ₹1 introductory price मध्ये.</span>{" "}
              Each product is currently at an introductory price of ₹1.
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            {["Featured", "Top rated", "Name A-Z", "Price low to high"].map((t, i) => (
              <button
                key={t}
                className={`rounded-full border px-3 py-1.5 transition ${
                  i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-primary/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-square overflow-hidden bg-cream">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
                  98% OFF
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-600 text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-marathi">{p.mr}</span> · {p.en}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-700 text-primary">₹1</span>
                  <span className="text-sm text-muted-foreground line-through">₹{p.was}</span>
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href="https://wa.me/918208427976"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    <ShoppingBag className="h-4 w-4" /> Buy now
                  </a>
                  <button className="rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 transition hover:border-primary/40 hover:text-primary">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
