import { Quote } from "lucide-react";
import founderImg from "@/assets/products/ubtan-2.png";

export function FoundersNote() {
  return (
    <section id="founder" className="relative overflow-hidden bg-warm py-20 md:py-28">
      <div className="absolute inset-0 bg-hero-radial opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-sun opacity-25 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-glow">
            <img
              src={founderImg}
              alt="कांतीच्या संस्थापिका — पारंपरिक उटण्याची तयारी"
              width={800}
              height={1000}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div>
          <span className="font-marathi text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            संस्थापिकेचे मनोगत
          </span>
          <h2 className="mt-3 font-marathi-display text-4xl font-700 leading-snug text-foreground md:text-5xl">
            <span className="text-primary">आजीच्या</span> उटण्यापासून <br className="hidden md:block" />
            कांती पर्यंतचा प्रवास
          </h2>
          <Quote className="mt-6 h-8 w-8 text-primary/40" />
          <div className="mt-3 space-y-4 font-marathi text-base leading-relaxed text-foreground/85">
            <p>
              लहानपणी प्रत्येक रविवारी आजी हळद, चंदन आणि बेसनाचे उटणे लावायची. त्या सुगंधात आणि मृदू स्पर्शात
              एक प्रेम होतं — जे आजच्या बाजारातल्या केमिकलयुक्त क्रीममध्ये कुठेच सापडत नाही.
            </p>
            <p>
              <span className="font-marathi-display text-lg font-600 text-primary">कांती</span> हे त्याच आठवणींचं
              आधुनिक रूप आहे. प्रत्येक उत्पादन माझ्या स्वयंपाकघरात, छोट्या बॅचमध्ये, हाताने तयार होतं — कारण
              तुमच्या त्वचेवर जे लागतं, ते प्रामाणिक असायलाच हवं.
            </p>
            <p className="font-marathi-display text-lg italic text-foreground">
              "शुद्धता तिथे तेज — हीच कांतीची ओळख."
            </p>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div className="h-px w-10 bg-primary/40" />
            <p className="font-marathi-display text-base font-600 text-foreground">
              — कांती परिवार
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
