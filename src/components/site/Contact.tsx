import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/contact";

const channels = [
  { icon: Phone, label: "फोन", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: MessageCircle, label: "व्हॉट्सअ‍ॅप", value: "एका क्लिकमध्ये ऑर्डर", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: Mail, label: "ईमेल", value: "kantiubtan@gmail.com", href: "mailto:kantiubtan@gmail.com" },
  { icon: Instagram, label: "इंस्टाग्राम", value: "@kantiubtan", href: "https://www.instagram.com/kantiubtan/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-warm py-20 md:py-28">
      <div className="absolute inset-0 bg-hero-radial opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-marathi text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">आमच्याशी बोला</span>
        <h2 className="mt-3 font-marathi-display text-4xl font-700 leading-snug text-foreground md:text-5xl">
          तुमचा <span className="text-primary">नैसर्गिक तेज</span> आजच सुरू करा
        </h2>
        <p className="mt-4 font-marathi text-muted-foreground">
          काही शंका आहे का? आमच्याशी थेट संपर्क करा.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-3xl border border-border/60 bg-background/70 p-7 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-marathi text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
              <span className="font-marathi-display text-lg font-600 text-foreground">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
