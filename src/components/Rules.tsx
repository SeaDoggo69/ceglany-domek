import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

export function Rules({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).rules;

  return (
    <section
      id="rules"
      className="relative py-28 md:py-36 px-6 lg:px-10 bg-cream border-t border-oak/10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] leading-[1.1] tracking-tight text-ink mb-8">
              {t.title}
            </h2>
            <div className="section-divider mb-10" />

            <div className="space-y-6">
              <div className="flex items-baseline justify-between gap-6 pb-4 border-b border-oak/10">
                <span className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                  {t.checkIn.label}
                </span>
                <span className="font-serif text-xl text-ink">{t.checkIn.value}</span>
              </div>
              <div className="flex items-baseline justify-between gap-6 pb-4 border-b border-oak/10">
                <span className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                  {t.checkOut.label}
                </span>
                <span className="font-serif text-xl text-ink">{t.checkOut.value}</span>
              </div>
            </div>
          </Reveal>

          <Reveal stagger className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {t.items.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl md:text-2xl text-ink mb-3">
                  {item.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">{item.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
