"use client";

import { useEffect, useRef, useState } from "react";
import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

function Quote() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="currentColor"
      aria-hidden
      className="text-brick/40"
    >
      <path d="M0 28V16C0 7.163 7.163 0 16 0v6c-5.523 0-10 4.477-10 10h6v12H0zm20 0V16C20 7.163 27.163 0 36 0v6c-5.523 0-10 4.477-10 10h6v12H20z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-brick" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1l2.7 5.4 6 .9-4.3 4.2 1 6L10 14.8 4.6 17.5l1-6L1.3 7.3l6-.9L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).reviews;
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const computePages = () => {
    const el = trackRef.current;
    if (!el) return;
    const total = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    setPages(total);
  };

  useEffect(() => {
    computePages();
    const onResize = () => computePages();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const p = Math.round(el.scrollLeft / el.clientWidth);
      setPage(p);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const goTo = (p: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: p * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      className="relative py-28 md:py-40 px-6 lg:px-10 bg-gradient-to-b from-cream-soft to-cream"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl mb-14 md:mb-20 text-center mx-auto">
          <p className="eyebrow mb-5">{t.eyebrow}</p>
          <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] leading-[1.05] tracking-tight text-ink mb-6">
            {t.title}
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-ink-soft text-lg leading-relaxed">{t.lead}</p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Stars />
            <span className="text-ink-soft text-sm">
              5.0 · {t.items.length}+ {locale === "pl" ? "opinii" : "reviews"}
            </span>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div
            ref={trackRef}
            className="reviews-track flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6"
            style={{ scrollbarWidth: "none" }}
          >
            {t.items.map((review, i) => (
              <figure
                key={`${review.author}-${i}`}
                className="snap-start flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[31.5%] bg-cream-soft p-8 md:p-10 rounded-sm frame flex flex-col"
              >
                <div className="mb-6 flex items-start justify-between">
                  <Quote />
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-sage-deep px-2 py-1 border border-sage-deep/30 rounded-sm">
                    {review.source}
                  </span>
                </div>
                <blockquote className="font-serif text-[1.05rem] md:text-[1.15rem] leading-relaxed text-ink italic flex-1 mb-6">
                  {review.text}
                </blockquote>
                <figcaption className="pt-5 border-t border-oak/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-ink font-medium text-sm">{review.author}</div>
                    <div className="text-ink-soft text-xs uppercase tracking-[0.15em] mt-1">
                      {review.date}
                    </div>
                  </div>
                  <Stars />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label={t.navPrev}
              className="w-11 h-11 rounded-full border border-oak/20 flex items-center justify-center text-ink-soft hover:bg-ink hover:text-cream-soft hover:border-ink transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M9 11L4 7l5-4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => goTo(p)}
                  aria-label={`Page ${p + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    p === page
                      ? "w-8 bg-brick"
                      : "w-1.5 bg-oak/30 hover:bg-oak/60"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label={t.navNext}
              className="w-11 h-11 rounded-full border border-oak/20 flex items-center justify-center text-ink-soft hover:bg-ink hover:text-cream-soft hover:border-ink transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M5 3l5 4-5 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .reviews-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
