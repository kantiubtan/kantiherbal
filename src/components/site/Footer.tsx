import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { useLang } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, lang } = useLang();
  const display = lang === "mr" ? "font-marathi-display" : "font-display";
  const body = lang === "mr" ? "font-marathi" : "font-sans";
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Kanti" className="h-10 w-10 rounded-full object-cover shadow-soft" />
            <span className={`${display} text-xl font-700 text-primary`}>{lang === "mr" ? "कांती" : "Kanti"}</span>
          </div>
          <p className={`mt-4 max-w-xs ${body} text-sm leading-relaxed text-muted-foreground`}>{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className={`${body} text-sm font-semibold uppercase tracking-wider text-foreground/80`}>{t("footer.contact")}</h4>
          <ul className={`mt-4 space-y-3 ${body} text-sm text-muted-foreground`}>
            <li><a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a></li>
            <li><a href="mailto:kantiubtan@gmail.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> kantiubtan@gmail.com</a></li>
            <li><a href="https://www.instagram.com/kantiubtan/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4" /> @kantiubtan</a></li>
          </ul>
        </div>
        <div>
          <h4 className={`${body} text-sm font-semibold uppercase tracking-wider text-foreground/80`}>{t("footer.explore")}</h4>
          <ul className={`mt-4 space-y-3 ${body} text-sm text-muted-foreground`}>
            <li><a href="#products" className="hover:text-primary">{t("footer.products")}</a></li>
            <li><a href="#hampers" className="hover:text-primary">{t("footer.hampers")}</a></li>
            <li><a href="#how" className="hover:text-primary">{t("footer.how")}</a></li>
          </ul>
        </div>
      </div>
      <div className={`border-t border-border/60 py-5 text-center ${body} text-xs text-muted-foreground`}>
        © {new Date().getFullYear()} {lang === "mr" ? "कांती" : "Kanti"} — {t("footer.copy")}
      </div>
    </footer>
  );
}
