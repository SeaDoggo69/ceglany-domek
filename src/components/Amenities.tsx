import Image from "next/image";
import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

const icons: Record<string, React.ReactNode> = {
  home: (
    <path d="M3 12L12 4l9 8M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
  ),
  family: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 20c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5" strokeLinecap="round" />
    </>
  ),
  outdoor: (
    <>
      <path d="M12 3v4M5 8l3 2M19 8l-3 2M4 14h16M7 14v6M17 14v6" strokeLinecap="round" />
      <path d="M8 8a4 4 0 018 0v6" />
    </>
  ),
  pets: (
    <>
      <circle cx="6" cy="9" r="1.8" />
      <circle cx="18" cy="9" r="1.8" />
      <circle cx="9" cy="5" r="1.6" />
      <circle cx="15" cy="5" r="1.6" />
      <path d="M8 17c0-3 1.8-5 4-5s4 2 4 5c0 2-1.8 3-4 3s-4-1-4-3z" />
    </>
  ),
};

const groupKeys = ["home", "family", "outdoor", "pets"];

export function Amenities({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).amenities;

  return (
    <section id="amenities" className="relative py-28 md:py-40 px-6 lg:px-10 bg-cream">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow mb-5">{t.eyebrow}</p>
          <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] leading-[1.05] tracking-tight text-ink mb-8">
            {t.title}
          </h2>
          <div className="section-divider" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal stagger className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {t.groups.map((group, i) => (
              <div key={group.title} className="group">
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full border border-oak/20 text-sage-deep group-hover:bg-sage-deep group-hover:text-cream-soft transition-colors duration-500">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      {icons[groupKeys[i]]}
                    </svg>
                  </span>
                  <h3 className="font-serif text-2xl text-ink">{group.title}</h3>
                </div>
                <ul className="space-y-2.5 pl-[60px]">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-ink-soft text-[0.95rem] leading-relaxed flex gap-3"
                    >
                      <span className="text-sage flex-shrink-0 mt-2.5">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm frame">
              <Image
                src="/images/12.webp"
                alt={
                  locale === "pl"
                    ? "Weranda z widokiem na dęby"
                    : "Veranda with oak tree view"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover-grow"
              />
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="relative aspect-square overflow-hidden rounded-sm frame">
                <Image
                  src="/images/24.webp"
                  alt={locale === "pl" ? "Poddasze z futonami" : "Attic with futons"}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover hover-grow"
                />
              </Reveal>
              <Reveal className="relative aspect-square overflow-hidden rounded-sm frame">
                <Image
                  src="/images/26.webp"
                  alt={locale === "pl" ? "Sypialnia" : "Bedroom"}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover hover-grow"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
