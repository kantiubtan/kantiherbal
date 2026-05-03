import { Link } from "@tanstack/react-router";
import { ShoppingBag, User, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "मुख्यपृष्ठ" },
  { to: "/#products", label: "उत्पादने" },
  { to: "/#hampers", label: "हॅम्पर" },
  { to: "/#how", label: "ऑर्डर कशी" },
  { to: "/#contact", label: "संपर्क" },
];

export function Header() {
  const { user } = useAuth();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <img src={logo} alt="कांती — शुद्धता तिथे तेज" className="h-10 w-10 rounded-full object-cover shadow-soft" />
          <span className="flex flex-col leading-tight">
            <span className="font-marathi-display text-lg font-700 text-primary">कांती</span>
            <span className="-mt-0.5 hidden font-marathi text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
              शुद्धता तिथे तेज
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-marathi text-sm font-medium text-foreground/80 lg:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.to} className="transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:border-primary/40 hover:text-primary"
            aria-label="कार्ट"
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
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-marathi text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">माझे खाते</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-marathi text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">लॉगिन</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
