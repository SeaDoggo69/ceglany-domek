import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

export function Surroundings({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).surroundings;

  return (
    <section id="surroundings" className="relative py-32 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: "url(/images/9.webp)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/65 to-ink/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-cream-soft">
        <Reveal className="max-w-3xl mb-16 md:mb-24">
          <p className="eyebrow !text-sage-soft mb-5">{t.eyebrow}</p>
          <h2 className="font-serif text-[2.4rem] md:text-[3.5rem] leading-[1.05] tracking-tight mb-8">
            {t.title}
          </h2>
          <div className="section-divider !bg-sage-soft mb-8" />
          <p className="text-cream-soft/85 text-lg md:text-xl leading-relaxed font-serif italic">
            {t.lead}
          </p>
        </Reveal>

        <Reveal stagger className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {t.features.map((feature, i) => (
            <div key={feature.title} className="flex gap-6">
              <div className="flex-shrink-0 pt-2">
                <span className="font-serif text-sage-soft text-2xl">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-cream-soft/75 leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
