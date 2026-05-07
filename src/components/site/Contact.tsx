import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/contact";
import { useLang, type DictKey } from "@/contexts/LanguageContext";

export function Contact() {
  const { t, lang } = useLang();
  const display = lang === "mr" ? "font-marathi-display" : "font-display";
  const body = lang === "mr" ? "font-marathi" : "font-sans";

  const channels: { icon: typeof Phone; labelKey: DictKey; value: string; href: string }[] = [
    { icon: Phone, labelKey: "contact.phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { icon: MessageCircle, labelKey: "contact.wa", value: t("contact.wa.value"), href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: Mail, labelKey: "contact.email", value: "kantiubtan@gmail.com", href: "mailto:kantiubtan@gmail.com" },
    { icon: Instagram, labelKey: "contact.ig", value: "@kantiubtan", href: "https://www.instagram.com/kantiubtan/" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-warm py-20 md:py-28">
      <div className="absolute inset-0 bg-hero-radial opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className={`${body} text-xs font-semibold uppercase tracking-[0.22em] text-terracotta`}>{t("contact.eyebrow")}</span>
        <h2 className={`mt-3 ${display} text-4xl font-700 leading-[1.1] text-foreground md:text-5xl`}>
          {t("contact.title.1")} <span className="italic text-primary">{t("contact.title.2")}</span>
        </h2>
        <p className={`mt-4 ${body} text-muted-foreground`}>{t("contact.subtitle")}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, labelKey, value, href }) => (
            <a key={labelKey} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex flex-col items-center gap-3 rounded-3xl border border-border/60 bg-background/70 p-7 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <span className={`${body} text-xs font-semibold uppercase tracking-wider text-muted-foreground`}>{t(labelKey)}</span>
              <span className={`${display} text-lg font-600 text-foreground`}>{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
