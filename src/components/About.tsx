import Image from "next/image";
import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

export function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).about;

  return (
    <section id="about" className="relative py-28 md:py-40 px-6 lg:px-10 bg-cream-soft">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] lg:text-[3.6rem] leading-[1.05] tracking-tight text-ink">
              {t.title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <div className="section-divider mb-6" />
            <p className="text-ink-soft text-lg leading-relaxed">{t.lead}</p>
          </div>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-sm frame">
              <Image
                src="/images/14.webp"
                alt={locale === "pl" ? "Kuchnia z kwiatami" : "Kitchen with flowers"}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover hover-grow"
              />
            </Reveal>
            <Reveal className="lg:col-span-5">
              <span className="font-serif text-brick text-5xl leading-none block mb-4">
                01
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4 leading-tight">
                {locale === "pl"
                  ? "Kuchnia na werandzie"
                  : "Kitchen on the veranda"}
              </h3>
              <p className="text-ink-soft text-base md:text-lg leading-relaxed">
                {t.paragraphs[1]}
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-sm frame">
              <Image
                src="/images/27.webp"
                alt={
                  locale === "pl"
                    ? "Sypialnia z widokiem na ogród"
                    : "Bedroom with garden view"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover hover-grow"
              />
            </Reveal>
            <Reveal className="lg:col-span-5 lg:order-1">
              <span className="font-serif text-brick text-5xl leading-none block mb-4">
                02
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4 leading-tight">
                {locale === "pl" ? "Sypialnie i poddasze" : "Bedrooms and the attic"}
              </h3>
              <p className="text-ink-soft text-base md:text-lg leading-relaxed">
                {t.paragraphs[0]}
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-sm frame">
              <Image
                src="/images/15.webp"
                alt={
                  locale === "pl"
                    ? "Jadalnia na werandzie"
                    : "Dining on the veranda"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover hover-grow"
              />
            </Reveal>
            <Reveal className="lg:col-span-5">
              <span className="font-serif text-brick text-5xl leading-none block mb-4">
                03
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4 leading-tight">
                {locale === "pl" ? "Wszystko, co potrzeba" : "Everything you need"}
              </h3>
              <p className="text-ink-soft text-base md:text-lg leading-relaxed">
                {t.paragraphs[2]}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal
          stagger
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-28 pt-12 border-t border-oak/10"
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-serif text-4xl md:text-5xl text-brick mb-1">
                {stat.value}
              </div>
              <div className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
