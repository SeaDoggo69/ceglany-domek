import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Locale, locales } from "@/lib/translations";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HistoryPost } from "@/components/cms/HistoryPost";
import { sanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import {
  historyPostBySlugQuery,
  historySlugsQuery,
  type HistoryPostDoc,
} from "@/sanity/queries";

export const revalidate = 30;

export async function generateStaticParams() {
  if (!sanityConfigured) return [];
  try {
    const rows = await client.fetch<{ slug: string; locale: string }[]>(
      historySlugsQuery,
    );
    return rows
      .filter((r) => r.slug && locales.includes(r.locale as Locale))
      .map((r) => ({ locale: r.locale, slug: r.slug }));
  } catch {
    return [];
  }
}

async function getPost(slug: string, locale: Locale) {
  if (!sanityConfigured) return null;
  try {
    return await client.fetch<HistoryPostDoc | null>(historyPostBySlugQuery, {
      slug,
      locale,
    });
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const post = await getPost(slug, locale as Locale);
  if (!post) return {};
  const siteUrl = "https://ceglany-domek.pl";
  const img = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : `${siteUrl}/images/9.webp`;
  const desc = (post.excerpt ?? "").slice(0, 200);

  return {
    title: `${post.title} — Historia Gryżyny`,
    description: desc,
    alternates: {
      canonical: `/${locale}/historia/${slug}`,
      languages: {
        pl: `/pl/historia/${slug}`,
        en: `/en/historia/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "pl" ? "pl_PL" : "en_GB",
      url: `${siteUrl}/${locale}/historia/${slug}`,
      title: post.title,
      description: desc,
      images: [{ url: img, width: 1200, height: 630 }],
    },
  };
}

export default async function HistoryPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  const post = await getPost(slug, loc);
  if (!post) notFound();

  const siteUrl = "https://ceglany-domek.pl";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt ?? "",
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author || "Ceglany Domek" },
    publisher: { "@type": "Organization", name: "Ceglany Domek", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/${loc}/historia/${slug}`,
    ...(post.mainImage
      ? { image: urlFor(post.mainImage).width(1200).url() }
      : {}),
  };

  const back = loc === "pl" ? "Wszystkie wpisy" : "All posts";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation locale={loc} />
      <main className="pt-28 md:pt-32 pb-24 px-6 lg:px-10 bg-cream-soft min-h-screen">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/${loc}/historia`}
            className="inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.16em] text-ink-soft hover:text-brick transition-colors mb-8"
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
            {back}
          </Link>

          <HistoryPost post={post} locale={loc} />
        </div>
      </main>
      <Footer locale={loc} />
    </>
  );
}
