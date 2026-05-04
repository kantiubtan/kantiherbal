import { Leaf, Sparkles, HandHeart, FlaskConical, ShieldCheck, Recycle } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "१००% नैसर्गिक",
    desc: "हळद, चंदन, कडुलिंब, कोरफड — फक्त शुद्ध आयुर्वेदिक घटक. कोणतेही केमिकल नाही.",
  },
  {
    icon: HandHeart,
    title: "लहान बॅच, हस्तनिर्मित",
    desc: "प्रत्येक उत्पादन छोट्या बॅचमध्ये हाताने तयार — ताजेपणा आणि गुणवत्तेची हमी.",
  },
  {
    icon: FlaskConical,
    title: "पॅराबेन व सल्फेटमुक्त",
    desc: "त्वचेला त्रास न देणारी सौम्य फॉर्म्युला — संवेदनशील त्वचेसाठीही सुरक्षित.",
  },
  {
    icon: ShieldCheck,
    title: "क्रूरतामुक्त",
    desc: "कोणत्याही प्राण्यांवर चाचणी नाही. व्हीगन-फ्रेंडली घटकांना प्राधान्य.",
  },
  {
    icon: Recycle,
    title: "पर्यावरणपूरक पॅकेजिंग",
    desc: "पुनर्वापरयोग्य कंटेनर आणि कमीत कमी प्लास्टिक — पृथ्वीच्या सौंदर्यासाठीही.",
  },
  {
    icon: Sparkles,
    title: "पिढ्यानपिढ्यांच्या पाककृती",
    desc: "आजी-पणजीच्या पारंपरिक उटण्यांच्या रेसिपी, आधुनिक रूपात तुमच्यासाठी.",
  },
];

export function WhyKanti() {
  return (
    <section id="why-kanti" className="relative bg-cream/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-marathi text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            कांती का?
          </span>
          <h2 className="mt-3 font-marathi-display text-4xl font-700 leading-snug text-foreground md:text-5xl">
            शुद्धतेची <span className="text-primary">सहा कारणे</span>
          </h2>
          <p className="mt-4 font-marathi text-muted-foreground">
            फक्त एक स्किनकेअर ब्रँड नव्हे — आयुर्वेदाची आधुनिक अभिव्यक्ती.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border/60 bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-marathi-display text-xl font-600 text-foreground">{title}</h3>
              <p className="mt-2 font-marathi text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
