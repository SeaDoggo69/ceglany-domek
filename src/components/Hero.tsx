"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { type Locale, BOOKING_URL, getDictionary } from "@/lib/translations";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.35, 200);
  const fade = Math.max(1 - scrollY / 600, 0);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 -top-10 will-change-transform"
        style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
      >
        <Image
          src="/images/20.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_85%] sm:object-[50%_70%] lg:object-[50%_60%] scale-110 lg:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />
      </div>

      <div
        className="relative z-10 h-full flex items-end pb-24 md:pb-32 px-6 lg:px-10"
        style={{ opacity: fade }}
      >
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-3xl">
            <p
              className="eyebrow !text-cream-soft mb-6 hero-fade"
              style={{ animationDelay: "0.4s", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              {t.eyebrow}
            </p>
            <h1
              className="font-serif text-cream-soft text-[3rem] sm:text-[4.2rem] lg:text-[5.5rem] leading-[1.02] tracking-tight whitespace-pre-line mb-8 hero-fade"
              style={{ animationDelay: "0.7s", textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
            >
              {t.title}
            </h1>
            <p
              className="text-cream-soft/95 text-lg md:text-xl max-w-xl leading-relaxed mb-10 hero-fade"
              style={{ animationDelay: "1s", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
            >
              {t.subtitle}
            </p>
            <div
              className="flex flex-wrap gap-4 hero-fade"
              style={{ animationDelay: "1.3s" }}
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>{t.cta}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M1 7h12m-5-5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#about" className="btn-secondary text-cream-soft">
                <span>{t.ctaSecondary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-cream-soft/85">
        <span
          className="text-[0.65rem] uppercase tracking-[0.3em]"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
        >
          {t.scroll}
        </span>
        <span
          className="block w-px h-10 bg-current"
          style={{ animation: "scrollHint 2.4s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
