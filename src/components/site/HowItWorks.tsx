const steps = [
  { mr: "Search किंवा filters वापरून product निवडा.", en: "Use search or filters to choose products." },
  { mr: "Add to Cart किंवा Buy Now करा.", en: "Add to Cart or use Buy Now." },
  { mr: "Checkout केल्यावर WhatsApp message तयार होईल.", en: "Checkout creates a WhatsApp order message." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">How Ordering Works</span>
          <h2 className="mt-3 font-display text-4xl font-700 text-foreground md:text-5xl">
            Amazon-style browsing,
            <br />
            <em className="not-italic text-primary">WhatsApp</em> checkout
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={i}
              className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-card"
            >
              <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-sun font-display text-lg font-700 text-primary-foreground shadow-soft">
                {i + 1}
              </span>
              <p className="mt-3 font-marathi text-lg leading-relaxed text-foreground">{s.mr}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.en}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
