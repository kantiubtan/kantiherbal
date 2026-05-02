import hamperImg from "@/assets/hamper.jpg";
import { whatsappLink } from "@/lib/contact";

const occasions = ["Diwali", "Haldi-Kumkum", "Wedding", "Return gifts", "Corporate"];

export function Hampers() {
  return (
    <section id="hampers" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative order-last md:order-first">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-sun opacity-25 blur-3xl" aria-hidden />
          <img
            src={hamperImg}
            alt="Kanti gift hamper with assortment of natural skincare products"
            width={1280}
            height={1024}
            loading="lazy"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-glow"
          />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">For Celebrations</span>
          <h2 className="mt-3 font-display text-4xl font-700 leading-tight text-foreground md:text-5xl">
            Custom hampers for every <em className="not-italic text-primary">occasion</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            <span className="font-marathi">
              दिवाळी, हळदी-कुंकू, wedding return gifts आणि corporate gifting साठी custom product mix तयार करता येतो.
            </span>
            <br />
            Create a custom mix for festivals, weddings, return gifts and corporate gifting.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {occasions.map((o) => (
              <span
                key={o}
                className="rounded-full border border-primary/20 bg-background px-4 py-2 text-sm font-medium text-primary"
              >
                {o}
              </span>
            ))}
          </div>
          <a
            href={whatsappLink("Hi Kanti, I'd like a custom hamper")}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
