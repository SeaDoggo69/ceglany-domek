import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, locales } from "@/lib/translations";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { RouteList } from "@/components/cms/RouteList";
import { sanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/client";
import { routesQuery, type RouteDoc } from "@/sanity/queries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const revalidate = 60;

const t = {
  pl: {
    metaTitle: "Szlaki i trasy — Ceglany Domek w Gryżynie",
    metaDesc:
      "Piesze, rowerowe i kajakowe trasy wokół Gryżyny i Gryżyńskiego Parku Krajobrazowego.",
    eyebrow: "Okolica",
    title: "Szlaki i trasy",
    lead: "Sprawdzone trasy piesze, rowerowe i kajakowe wokół domku - dodajemy je sukcesywnie, w miarę jak odkrywamy kolejne.",
    empty: "Pierwsze trasy pojawią się wkrótce. Zaglądaj!",
    back: "Wróć na stronę główną",
  },
  en: {
    metaTitle: "Trails & routes — Brick Cottage in Gryżyna",
    metaDesc:
      "Walking, cycling and kayaking routes around Gryżyna and the Gryżyna Landscape Park.",
    eyebrow: "The area",
    title: "Trails & routes",
    lead: "Tried-and-tested walking, cycling and kayaking routes around the cottage - added gradually as we discover more.",
    empty: "The first routes are coming soon. Check back!",
    back: "Back to homepage",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const tr = t[locale as Locale];
  return {
    title: tr.metaTitle,
    description: tr.metaDesc,
    alternates: {
      canonical: `/${locale}/szlaki`,
      languages: { pl: "/pl/szlaki", en: "/en/szlaki", "x-default": "/pl/szlaki" },
    },
  };
}

export default async function RoutesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  const tr = t[loc];

  let routes: RouteDoc[] = [];
  if (sanityConfigured) {
    try {
      routes = await client.fetch<RouteDoc[]>(routesQuery, { locale: loc });
    } catch {
      routes = [];
    }
  }

  return (
    <>
      <Navigation locale={loc} />
      <main className="pt-28 md:pt-36">
        <section className="px-6 lg:px-10 pb-8">
          <Reveal className="mx-auto max-w-6xl text-center">
            <p className="eyebrow mb-5">{tr.eyebrow}</p>
            <h1 className="font-serif text-[2.6rem] md:text-[3.6rem] leading-[1.05] tracking-tight text-ink mb-6">
              {tr.title}
            </h1>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-ink-soft text-lg leading-relaxed max-w-2xl mx-auto">
              {tr.lead}
            </p>
          </Reveal>
        </section>

        <section className="px-6 lg:px-10 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {routes.length > 0 ? (
              <RouteList routes={routes} locale={loc} />
            ) : (
              <p className="text-center text-ink-soft italic py-16">{tr.empty}</p>
            )}

            <div className="text-center pt-16 mt-16 border-t border-oak/15">
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
                <span>{tr.back}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={loc} />
    </>
  );
}
