"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

type GalleryItem = { src: string; span: string };

const galleryImages: GalleryItem[] = [
  { src: "/images/1.webp", span: "row-span-2" },
  { src: "/images/18.webp", span: "row-span-2 col-span-2" },
  { src: "/images/15.webp", span: "row-span-2" },
  { src: "/images/3.webp", span: "row-span-2" },
  { src: "/images/19.webp", span: "row-span-2 col-span-2" },
  { src: "/images/22.webp", span: "row-span-2" },
  { src: "/images/8.webp", span: "row-span-2 col-span-2" },
  { src: "/images/17.webp", span: "row-span-2" },
  { src: "/images/27.webp", span: "row-span-2" },
];

const altPl = [
  "Wejście do domku",
  "Bukowe wąwozy jesienią",
  "Weranda zimą",
  "Sypialnia z drewnianymi drzwiami",
  "Pomost na czystym jeziorze",
  "Sypialnia z grafikami",
  "Łazienka z ceglaną ścianą",
  "Nagietki przy ceglanej ścianie",
  "Sypialnia z widokiem na ogród",
];
const altEn = [
  "Cottage entrance",
  "Beech ravines in autumn",
  "Veranda in winter",
  "Bedroom with wooden doors",
  "Pier on the clear lake",
  "Bedroom with artworks",
  "Bathroom with brick wall",
  "Marigolds by the brick wall",
  "Bedroom with garden view",
];

export function Gallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).gallery;
  const alts = locale === "pl" ? altPl : altEn;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? null : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="relative py-28 md:py-40 px-6 lg:px-10 bg-cream-soft">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] leading-[1.05] tracking-tight text-ink">
              {t.title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <div className="section-divider mb-6" />
            <p className="text-ink-soft text-lg leading-relaxed">{t.lead}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[150px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              threshold={0.05}
              className={`relative overflow-hidden rounded-sm frame ${img.span}`}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="relative block w-full h-full group"
                aria-label={alts[i]}
              >
                <Image
                  src={img.src}
                  alt={alts[i]}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-6 animate-[fadeIn_0.4s_ease-out]"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute top-6 right-6 text-cream-soft/80 hover:text-cream-soft text-3xl leading-none w-12 h-12 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + galleryImages.length) % galleryImages.length,
              );
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream-soft/70 hover:text-cream-soft text-4xl w-12 h-12 flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream-soft/70 hover:text-cream-soft text-4xl w-12 h-12 flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={alts[lightbox]}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
