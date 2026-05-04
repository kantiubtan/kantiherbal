import heroImg from "@/assets/products/ubtan-1.png";
import heroVideo from "@/assets/kanti-hero.mp4";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm">
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur font-marathi">
            <Sparkles className="h-3.5 w-3.5" /> शुद्धता तिथे तेज
          </span>
          <h1 className="mt-6 font-marathi-display text-5xl font-700 leading-[1.15] text-foreground sm:text-6xl md:text-7xl">
            नैसर्गिक <span className="text-primary">सौंदर्य</span>,
            <br />
            <span className="text-terracotta">परंपरेतून</span>.
          </h1>
          <p className="mt-6 max-w-lg font-marathi text-lg leading-relaxed text-muted-foreground">
            उटणे, बाथ सॉल्ट, साबण, फेस मास्क, फेस ऑईल आणि गिफ्ट हॅम्पर — हळद, चंदन आणि औषधी वनस्पतींपासून हाताने बनवलेली शुद्ध स्किनकेअर.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px] hover:bg-primary/90 font-marathi"
            >
              आता खरेदी करा
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#hampers"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition hover:bg-background font-marathi"
            >
              हॅम्पर ऑफर पहा
            </a>
          </div>
          <div className="mt-10 flex items-center gap-7 text-xs uppercase tracking-wider text-muted-foreground font-marathi">
            <span>१००% हर्बल</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>हस्तनिर्मित</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>क्रूरतामुक्त</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-sun opacity-20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-glow">
            <video
              src={heroVideo}
              poster={heroImg}
              autoPlay
              muted
              loop
              playsInline
              aria-label="कांती हर्बल स्किनकेअर"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/60 bg-background/95 p-4 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-display">★</span>
              <div className="text-sm leading-tight font-marathi">
                <div className="font-marathi-display text-base font-700 text-foreground">खरा उटणे, खरी चमक</div>
                <div className="text-xs text-muted-foreground">मर्यादित स्टॉक</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
