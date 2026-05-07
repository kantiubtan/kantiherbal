import { useLang, type DictKey } from "@/contexts/LanguageContext";

const steps: { t: DictKey; d: DictKey }[] = [
  { t: "how.s1.t", d: "how.s1.d" },
  { t: "how.s2.t", d: "how.s2.d" },
  { t: "how.s3.t", d: "how.s3.d" },
];

export function HowItWorks() {
  const { t, lang } = useLang();
  const display = lang === "mr" ? "font-marathi-display" : "font-display";
  const body = lang === "mr" ? "font-marathi" : "font-sans";
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className={`${body} text-xs font-semibold uppercase tracking-[0.22em] text-terracotta`}>{t("how.eyebrow")}</span>
          <h2 className={`mt-3 ${display} text-4xl font-700 leading-[1.1] text-foreground md:text-5xl`}>
            {t("how.title.1")} <span className="italic text-primary">{t("how.title.2")}</span>
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-card">
              <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-sun font-display text-lg font-700 text-primary-foreground shadow-soft">{i + 1}</span>
              <p className={`mt-3 ${display} text-lg leading-relaxed text-foreground`}>{t(s.t)}</p>
              <p className={`mt-2 ${body} text-sm leading-relaxed text-muted-foreground`}>{t(s.d)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
