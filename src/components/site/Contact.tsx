import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";

const channels = [
  { icon: Phone, label: "Phone", value: "8208427976", href: "tel:+918208427976" },
  { icon: MessageCircle, label: "WhatsApp", value: "Order in one tap", href: "https://wa.me/918208427976" },
  { icon: Mail, label: "Email", value: "kantiubtan@gmail.com", href: "mailto:kantiubtan@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@kantiubtan", href: "https://www.instagram.com/kantiubtan/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-warm py-20 md:py-28">
      <div className="absolute inset-0 bg-hero-radial opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Talk to us</span>
        <h2 className="mt-3 font-display text-4xl font-700 text-foreground md:text-5xl">
          Let&apos;s get your <em className="not-italic text-primary">glow</em> started
        </h2>
        <p className="mt-4 text-muted-foreground">
          <span className="font-marathi">कोणतीही शंका? आम्हाला direct संपर्क करा.</span> Any questions? Reach us
          directly.
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
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
              <span className="font-display text-lg font-600 text-foreground">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
