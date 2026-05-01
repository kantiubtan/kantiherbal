import { Instagram, Mail, Phone, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-primary-foreground shadow-soft">
              <Leaf className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-xl font-700 text-primary">Sree Kanti</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            <span className="font-marathi">नैसर्गिक skincare — turmeric, sandalwood आणि herbs पासून.</span>
            <br />
            Natural skincare crafted from turmeric, sandalwood and herbs.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="tel:+918208427976" className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> 8208427976</a></li>
            <li><a href="mailto:kantiubtan@gmail.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> kantiubtan@gmail.com</a></li>
            <li><a href="https://www.instagram.com/kantiubtan/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4" /> @kantiubtan</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="#products" className="hover:text-primary">Shop products</a></li>
            <li><a href="#hampers" className="hover:text-primary">Custom hampers</a></li>
            <li><a href="#how" className="hover:text-primary">How ordering works</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sree Kanti — Handcrafted with care in India.
      </div>
    </footer>
  );
}
