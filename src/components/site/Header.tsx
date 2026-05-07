import { Link } from "@tanstack/react-router";
import { ShoppingBag, User, LogIn, Languages } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

export function Header() {
  const { user } = useAuth();
  const { count } = useCart();
  const { lang, setLang, t } = useLang();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/#products", label: t("nav.products") },
    { to: "/#hampers", label: t("nav.hampers") },
    { to: "/#how", label: t("nav.how") },
    { to: "/#contact", label: t("nav.contact") },
  ];

  const fontClass = lang === "mr" ? "font-marathi" : "font-sans";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <img src={logo} alt="Kanti" className="h-10 w-10 rounded-full object-cover shadow-soft" />
          <span className="flex flex-col leading-tight">
            <span className={`${lang === "mr" ? "font-marathi-display" : "font-display"} text-xl font-700 tracking-tight text-primary`}>
              {lang === "mr" ? "कांती" : "Kanti"}
            </span>
            <span className={`-mt-0.5 hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:inline ${fontClass}`}>
              {t("brand.tagline")}
            </span>
          </span>
        </Link>
        <nav className={`hidden items-center gap-7 text-sm font-medium text-foreground/80 lg:flex ${fontClass}`}>
          {nav.map((n) => (
            <a key={n.label} href={n.to} className="transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="relative inline-flex items-center rounded-full border border-border bg-background/80 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-label="English"
              className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("mr")}
              aria-label="Marathi"
              className={`rounded-full px-3 py-1.5 transition font-marathi ${lang === "mr" ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"}`}
            >
              मर
            </button>
            <Languages className="ml-1 mr-2 hidden h-3.5 w-3.5 text-muted-foreground sm:block" aria-hidden />
          </div>

          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:border-primary/40 hover:text-primary"
            aria-label={t("nav.cart")}
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          {user ? (
            <Link
              to="/account"
              className={`inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 ${fontClass}`}
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.account")}</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              className={`inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 ${fontClass}`}
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">{t("nav.login")}</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
