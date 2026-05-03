import hamperImg from "@/assets/hamper.jpg";
import { whatsappLink } from "@/lib/contact";

const occasions = ["दिवाळी", "हळदी-कुंकू", "लग्न", "रिटर्न गिफ्ट", "कॉर्पोरेट"];

export function Hampers() {
  return (
    <section id="hampers" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative order-last md:order-first">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-sun opacity-25 blur-3xl" aria-hidden />
          <img
            src={hamperImg}
            alt="कांती गिफ्ट हॅम्पर — नैसर्गिक स्किनकेअर उत्पादनांचा संच"
            width={1280}
            height={1280}
            loading="lazy"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-glow"
          />
        </div>
        <div>
          <span className="font-marathi text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">खास प्रसंगांसाठी</span>
          <h2 className="mt-3 font-marathi-display text-4xl font-700 leading-snug text-foreground md:text-5xl">
            प्रत्येक प्रसंगासाठी <span className="text-primary">कस्टम हॅम्पर</span>
          </h2>
          <p className="mt-5 font-marathi text-lg leading-relaxed text-muted-foreground">
            दिवाळी, हळदी-कुंकू, लग्नाचे रिटर्न गिफ्ट आणि कॉर्पोरेट गिफ्टिंगसाठी आपल्या आवडीनुसार कांतीच्या उत्पादनांचा खास हॅम्पर तयार करून मिळेल.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {occasions.map((o) => (
              <span
                key={o}
                className="rounded-full border border-primary/20 bg-background px-4 py-2 font-marathi text-sm font-medium text-primary"
              >
                {o}
              </span>
            ))}
          </div>
          <a
            href={whatsappLink("नमस्कार कांती, मला कस्टम हॅम्परबद्दल माहिती हवी आहे.")}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-marathi text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90"
          >
            व्हॉट्सअ‍ॅपवर चौकशी करा
          </a>
        </div>
      </div>
    </section>
  );
}
