import facemaskOffer from "@/assets/offers/facemask-offer.png";
import hamperOffer from "@/assets/offers/hamper-offer.png";
import { Sparkles } from "lucide-react";

export function Offers() {
  return (
    <section id="offers" className="relative bg-warm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 font-marathi text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> खास ऑफर
          </span>
          <h2 className="mt-4 font-marathi-display text-4xl font-700 leading-snug text-foreground md:text-5xl">
            मर्यादित काळासाठी <span className="text-primary">सवलती</span>
          </h2>
          <p className="mt-3 font-marathi text-muted-foreground">
            कांतीच्या निवडक उत्पादनांवर विशेष लाँच ऑफर — स्टॉक संपण्यापूर्वी ऑर्डर करा.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <a
            href="#products"
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <img
              src={facemaskOffer}
              alt="कांती हर्बल समर फेस मास्क — परिचयात्मक ऑफर ५० ग्रॅम फक्त ₹६५"
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </a>
          <a
            href="#hampers"
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <img
              src={hamperOffer}
              alt="कांती गिफ्ट हॅम्पर — फ्लॅट २५% सूट, फक्त ₹१४९९"
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
