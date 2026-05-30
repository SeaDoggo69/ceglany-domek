"use client";

import { useState } from "react";
import { type Locale, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

export function FAQ({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 lg:px-10 bg-cream-soft border-t border-oak/10">
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

        <Reveal stagger className="max-w-4xl mx-auto">
          <dl className="divide-y divide-oak/15">
            {t.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="py-2">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left group cursor-pointer"
                    >
                      <span className="font-serif text-xl md:text-2xl text-ink leading-tight group-hover:text-brick transition-colors duration-300">
                        {item.q}
                      </span>
                      <span
                        className={`flex-shrink-0 mt-2 w-8 h-8 rounded-full border border-oak/30 flex items-center justify-center text-ink-soft group-hover:border-brick group-hover:text-brick transition-all duration-300 ${
                          isOpen ? "bg-brick text-cream-soft border-brick" : ""
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                          aria-hidden
                        >
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`faq-${i}`}
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-soft leading-relaxed text-base md:text-lg pr-14">
                        {item.a}
                      </p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
