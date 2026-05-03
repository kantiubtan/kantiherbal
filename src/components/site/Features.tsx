import { MessageCircle, ShieldCheck, Gift, BadgePercent } from "lucide-react";

const items = [
  { icon: MessageCircle, title: "व्हॉट्सअ‍ॅप ऑर्डर", desc: "कार्टमधून थेट ऑर्डर मेसेज तयार होतो" },
  { icon: ShieldCheck, title: "सुरक्षित संपर्क", desc: "फोन, ईमेल आणि इंस्टाग्रामवर थेट संपर्क" },
  { icon: Gift, title: "गिफ्टसाठी योग्य", desc: "बल्क आणि कस्टम हॅम्परसाठी आदर्श" },
  { icon: BadgePercent, title: "१००% हर्बल", desc: "पॅराबेन व केमिकलमुक्त, सर्व त्वचेसाठी" },
];

export function Features() {
  return (
    <section className="border-y border-border/60 bg-cream/60">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-cream/60 p-7">
            <Icon className="h-6 w-6 text-terracotta" strokeWidth={1.8} />
            <h3 className="mt-4 font-marathi-display text-lg font-600 text-foreground">{title}</h3>
            <p className="mt-1 font-marathi text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
