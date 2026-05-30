import Image from "next/image";
import { type Locale, BOOKING_URL, CONTACT, getDictionary } from "@/lib/translations";
import { Reveal } from "./Reveal";

export function Contact({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/85 to-ink/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-7 text-cream-soft">
            <p className="eyebrow !text-sage-soft mb-5">{t.eyebrow}</p>
            <h2 className="font-serif text-[2.4rem] md:text-[3.5rem] leading-[1.05] tracking-tight mb-8">
              {t.title}
            </h2>
            <div className="section-divider !bg-sage-soft mb-8" />
            <p className="text-cream-soft/85 text-lg md:text-xl leading-relaxed font-serif italic mb-10 max-w-xl">
              {t.lead}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-cream-soft !text-ink hover:!bg-brick hover:!text-cream-soft"
              >
                <span>{t.bookLabel} · Slowhop</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M3 11l8-8m0 0H4m7 0v7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href={CONTACT.phoneHref} className="btn-secondary text-cream-soft">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M11.7 9.6l-1.4-.3a1 1 0 00-1 .3l-.9 1A8 8 0 014.3 6.6l1-.9a1 1 0 00.3-1l-.3-1.4a1 1 0 00-1-.8H2.7c-.6 0-1.1.5-1 1.1A10 10 0 0011 13.3c.6.1 1.1-.4 1.1-1V10.6a1 1 0 00-.8-1z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{CONTACT.phone}</span>
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="bg-cream-soft/95 backdrop-blur-sm p-8 md:p-10 rounded-sm">
              <dl className="space-y-6">
                <div>
                  <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-deep mb-2">
                    {t.hostLabel}
                  </dt>
                  <dd className="font-serif text-2xl text-ink">{CONTACT.host}</dd>
                </div>
                <div className="pt-6 border-t border-oak/10">
                  <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-deep mb-2">
                    {t.addressLabel}
                  </dt>
                  <dd className="text-ink leading-relaxed">
                    {CONTACT.address}
                    <br />
                    <a
                      href={CONTACT.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm text-brick mt-2 inline-block"
                    >
                      {t.directions} →
                    </a>
                  </dd>
                </div>
                <div className="pt-6 border-t border-oak/10">
                  <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-deep mb-2">
                    {t.phoneLabel}
                  </dt>
                  <dd>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-serif text-2xl text-ink link-underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
                <div className="pt-6 border-t border-oak/10">
                  <dt className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-deep mb-2">
                    {t.languagesLabel}
                  </dt>
                  <dd className="text-ink">{t.languages}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
