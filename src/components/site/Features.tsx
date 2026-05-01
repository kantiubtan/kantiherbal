import { MessageCircle, ShieldCheck, Gift, BadgePercent } from "lucide-react";

const items = [
  { icon: MessageCircle, title: "WhatsApp Checkout", mr: "Cart order message मध्ये तयार होतो", en: "Cart converts into an order message" },
  { icon: ShieldCheck, title: "Secure Enquiry", mr: "Direct phone, email आणि Instagram", en: "Direct phone, email and Instagram" },
  { icon: Gift, title: "Gift Ready", mr: "Bulk आणि custom hampers साठी योग्य", en: "Ideal for bulk and custom hampers" },
  { icon: BadgePercent, title: "Intro Price", mr: "सर्व products ₹1 दाखवले आहेत", en: "All products shown at ₹1" },
];

export function Features() {
  return (
    <section className="border-y border-border/60 bg-cream/60">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, mr, en }) => (
          <div key={title} className="bg-cream/60 p-7">
            <Icon className="h-6 w-6 text-terracotta" strokeWidth={1.8} />
            <h3 className="mt-4 font-display text-lg font-600 text-foreground">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              <span className="font-marathi">{mr}</span>
              <br />
              {en}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
