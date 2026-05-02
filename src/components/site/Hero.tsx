import heroImg from "@/assets/hero-ingredients.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm">
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Where Purity Meets Glow
          </span>
          <h1 className="mt-6 font-display text-5xl font-700 leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Natural <em className="not-italic text-primary">skincare</em>,
            <br />
            rooted in <span className="font-marathi italic text-terracotta">परंपरा</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            <span className="font-marathi">उटणे, बाथ सॉल्ट, सोप, फेस मास्क, फेस ऑईल आणि गिफ्ट हॅम्पर.</span>
            <br />
            Ubtan, bath salt, soap, face mask, face oil and gift hampers — every product at an
            introductory price of ₹1.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px] hover:bg-primary/90"
            >
              Shop now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#hampers"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition hover:bg-background"
            >
              View offer
            </a>
          </div>
          <div className="mt-10 flex items-center gap-7 text-xs uppercase tracking-wider text-muted-foreground">
            <span>100% Herbal</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>Handcrafted</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>Cruelty-free</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-sun opacity-20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-glow">
            <img
              src={heroImg}
              alt="Turmeric, sandalwood, neem and rose petals — the herbal ingredients of Kanti skincare"
              width={1536}
              height={1280}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/60 bg-background/95 p-4 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">₹1</div>
              <div className="text-sm leading-tight">
                <div className="font-display text-base font-700 text-foreground">Intro price</div>
                <div className="text-xs text-muted-foreground">All products • limited stock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
