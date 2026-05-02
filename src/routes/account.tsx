import { createFileRoute, Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { User, ShoppingBag, Heart, MapPin, LogOut } from "lucide-react";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My account — Kanti" }] }),
  component: AccountLayout,
});

const tabs = [
  { to: "/account", label: "Profile", icon: User, exact: true },
  { to: "/account/orders", label: "Orders", icon: ShoppingBag },
  { to: "/account/wishlist", label: "Wishlist", icon: Heart },
  { to: "/account/addresses", label: "Addresses", icon: MapPin },
];

function AccountLayout() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/auth", search: { redirect: location.pathname } });
    }
  }, [user, loading, navigate, location.pathname]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center text-muted-foreground">Loading…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Kanti
          </span>
          <h1 className="mt-2 font-display text-4xl font-700 text-foreground">My account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Welcome back, {user.email}.</p>
        </header>
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <aside className="flex flex-row gap-2 overflow-x-auto md:flex-col">
            {tabs.map((t) => {
              const active = t.exact
                ? location.pathname === t.to
                : location.pathname.startsWith(t.to);
              const Icon = t.icon;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition md:rounded-lg ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" /> {t.label}
                </Link>
              );
            })}
            <button
              onClick={() => signOut().then(() => navigate({ to: "/" }))}
              className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-muted md:rounded-lg"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </aside>
          <section>
            <Outlet />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
