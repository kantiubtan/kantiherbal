const steps = [
  { title: "उत्पादन निवडा", desc: "आवडीचे कांती उत्पादन निवडा आणि माहिती वाचा." },
  { title: "कार्टमध्ये टाका", desc: "Add to Cart करा किंवा थेट Buy Now वर क्लिक करा." },
  { title: "व्हॉट्सअ‍ॅपवर ऑर्डर", desc: "चेकआउट केल्यावर तयार ऑर्डर मेसेज व्हॉट्सअ‍ॅपवर पाठवा." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-marathi text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">ऑर्डर कशी करायची</span>
          <h2 className="mt-3 font-marathi-display text-4xl font-700 leading-snug text-foreground md:text-5xl">
            सोपी खरेदी, <span className="text-primary">व्हॉट्सअ‍ॅप</span> चेकआउट
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
              <p className="mt-3 font-marathi-display text-lg leading-relaxed text-foreground">{s.title}</p>
              <p className="mt-2 font-marathi text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
