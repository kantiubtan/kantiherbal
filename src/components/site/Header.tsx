import { Link } from "@tanstack/react-router";
import { Leaf, ShoppingBag } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/#products", label: "Products" },
  { to: "/#hampers", label: "Hampers" },
  { to: "/#how", label: "How it works" },
  { to: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-primary-foreground shadow-soft">
            <Leaf className="h-4.5 w-4.5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-700 text-primary">Sree Kanti</span>
            <span className="-mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Where Purity Meets Glow
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 md:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.to} className="transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/918208427976"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Order on WhatsApp</span>
          <span className="sm:hidden">Order</span>
        </a>
      </div>
    </header>
  );
}
