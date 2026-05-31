import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, locales, getDictionary } from "@/lib/translations";
import { historyContent } from "@/lib/history";
import { archivePosts } from "@/lib/archive";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArchivePost } from "@/components/ArchivePost";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const h = historyContent[locale as Locale];
  const siteUrl = "https://ceglany-domek.pl";

  return {
    title: h.meta.title,
    description: h.meta.description,
    alternates: {
      canonical: `/${locale}/historia`,
      languages: {
        pl: "/pl/historia",
        en: "/en/historia",
        "x-default": "/pl/historia",
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "pl" ? "pl_PL" : "en_GB",
      url: `${siteUrl}/${locale}/historia`,
      title: h.meta.title,
      description: h.meta.description,
      images: [{ url: "/images/9.webp", width: 1200, height: 800 }],
    },
  };
}

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  const h = historyContent[loc];
  const nav = getDictionary(loc).nav;
  const siteUrl = "https://ceglany-domek.pl";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h.meta.title,
    description: h.meta.description,
    image: `${siteUrl}/images/9.webp`,
    datePublished: "2026-05-30",
    dateModified: "2026-05-30",
    author: {
      "@type": "Organization",
      name: "Ceglany Domek",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Ceglany Domek",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/${loc}/historia`,
    about: [
      { "@type": "Place", name: "Gryżyna" },
      { "@type": "Place", name: "Gryżyński Park Krajobrazowy" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation locale={loc} />

      <main>
        <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/9.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_60%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/70" />
          </div>
          <div className="relative z-10 h-full flex items-end pb-20 md:pb-28 px-6 lg:px-10">
            <div className="mx-auto max-w-7xl w-full">
              <div className="max-w-3xl">
                <p
                  className="eyebrow !text-cream-soft mb-6"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                >
                  {h.hero.eyebrow}
                </p>
                <h1
                  className="font-serif text-cream-soft text-[2.6rem] sm:text-[3.6rem] lg:text-[5rem] leading-[1.02] tracking-tight whitespace-pre-line mb-8"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
                >
                  {h.hero.title}
                </h1>
                <p
                  className="text-cream-soft/95 text-lg md:text-xl max-w-xl leading-relaxed"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
                >
                  {h.hero.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 px-6 lg:px-10 bg-cream-soft">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink mb-12 italic">
                {h.intro.text}
              </p>
              <figure className="border-l-2 border-brick pl-6 py-2 my-12">
                <blockquote className="font-serif text-xl md:text-2xl italic text-ink-soft leading-relaxed">
                  {h.hero.quote}
                </blockquote>
                <figcaption className="mt-4 text-[0.78rem] uppercase tracking-[0.18em] text-sage-deep">
                  — {h.hero.quoteAuthor}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <div className="bg-cream-soft pb-32 px-6 lg:px-10">
          <div className="mx-auto max-w-6xl space-y-28 md:space-y-36">
            {h.sections.map((section, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={section.title}
                  className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {section.image && (
                    <Reveal
                      className={`lg:col-span-6 relative aspect-[4/3] overflow-hidden rounded-sm frame ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover-grow"
                      />
                    </Reveal>
                  )}
                  <Reveal
                    className={
                      section.image
                        ? `lg:col-span-6 ${reverse ? "lg:order-1" : ""}`
                        : "lg:col-span-10 lg:col-start-2"
                    }
                  >
                    <p className="eyebrow mb-4">{section.eyebrow}</p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.1] tracking-tight text-ink mb-6">
                      {section.title}
                    </h2>
                    <div className="section-divider mb-8" />
                    <div className="space-y-5">
                      {section.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="text-ink-soft text-base md:text-lg leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                </article>
              );
            })}

          </div>
        </div>

        <section className="relative py-28 md:py-36 px-6 lg:px-10 bg-cream border-t border-oak/10">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
              <p className="eyebrow mb-5">{h.archive.eyebrow}</p>
              <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] leading-[1.05] tracking-tight text-ink mb-6">
                {h.archive.title}
              </h2>
              <div className="section-divider mx-auto mb-6" />
              <p className="text-ink-soft text-lg leading-relaxed">{h.archive.lead}</p>
            </Reveal>

            <Reveal stagger className="space-y-8 md:space-y-10">
              {[...archivePosts]
                .sort((a, b) => a.date.localeCompare(b.date))
                .map((post) => (
                  <ArchivePost
                    key={post.date + post.title}
                    date={post.date}
                    title={post.title}
                    content={post.content}
                    locale={loc}
                    badge={h.archive.sourceNote}
                    readMore={h.archive.readMore}
                    readLess={h.archive.readLess}
                  />
                ))}
            </Reveal>

            <Reveal className="text-center pt-16 mt-16 border-t border-oak/15">
              <p className="text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft mb-8 italic">
                {h.source}
              </p>
              <Link
                href={`/${loc}`}
                className="btn-secondary text-ink inline-flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M13 7H1m5-5L1 7l5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{h.back}</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer locale={loc} />
    </>
  );
}
