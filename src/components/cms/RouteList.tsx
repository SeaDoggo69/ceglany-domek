import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import type { RouteDoc } from "@/sanity/queries";

const typeLabels: Record<string, { pl: string; en: string; icon: string }> = {
  pieszy: { pl: "Trasa piesza", en: "Walking route", icon: "🥾" },
  rowerowy: { pl: "Trasa rowerowa", en: "Cycling route", icon: "🚲" },
  kajakowy: { pl: "Spływ kajakowy", en: "Kayaking route", icon: "🛶" },
};

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-ink-soft leading-relaxed mb-4">{children}</p>
    ),
  },
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-sage-deep mb-0.5">
        {label}
      </p>
      <p className="text-sm text-ink font-medium">{value}</p>
    </div>
  );
}

export function RouteList({
  routes,
  locale,
}: {
  routes: RouteDoc[];
  locale: "pl" | "en";
}) {
  const L = locale === "pl"
    ? { distance: "Długość", duration: "Czas", difficulty: "Trudność" }
    : { distance: "Distance", duration: "Time", difficulty: "Difficulty" };

  return (
    <div className="space-y-12 md:space-y-16">
      {routes.map((r, i) => {
        const reverse = i % 2 === 1;
        const tl = r.type ? typeLabels[r.type] : null;
        return (
          <article
            key={r._id}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-cream rounded-sm frame overflow-hidden"
          >
            {r.mainImage && (
              <figure className={`relative ${reverse ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[340px]">
                  <Image
                    src={urlFor(r.mainImage).width(1000).fit("max").url()}
                    alt={r.mainImageCaption ?? r.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            )}

            <div className={`p-8 md:p-10 ${reverse ? "lg:order-1" : ""}`}>
              {tl && (
                <p className="eyebrow mb-3">
                  {tl.icon} {locale === "pl" ? tl.pl : tl.en}
                </p>
              )}
              <h3 className="font-serif text-2xl md:text-[2rem] leading-tight text-ink mb-4">
                {r.title}
              </h3>

              {(r.distanceKm || r.durationLabel || r.difficulty) && (
                <div className="flex flex-wrap gap-6 mb-5 pb-5 border-b border-oak/12">
                  {r.distanceKm != null && (
                    <Stat label={L.distance} value={`${r.distanceKm} km`} />
                  )}
                  {r.durationLabel && <Stat label={L.duration} value={r.durationLabel} />}
                  {r.difficulty && <Stat label={L.difficulty} value={r.difficulty} />}
                </div>
              )}

              <div className="text-[0.97rem]">
                <PortableText value={r.body} components={ptComponents} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
