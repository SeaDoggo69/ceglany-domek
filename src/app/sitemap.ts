import type { MetadataRoute } from "next";
import { locales } from "@/lib/translations";
import { sanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/client";
import { historySlugsQuery } from "@/sanity/queries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://ceglany-domek.pl";
  const pages: MetadataRoute.Sitemap = [];

  const staticPaths = ["", "/historia", "/szlaki"];
  for (const locale of locales) {
    for (const path of staticPaths) {
      pages.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "monthly" : "weekly",
        priority: path === "" ? (locale === "pl" ? 1 : 0.8) : 0.7,
        alternates: {
          languages: {
            pl: `${siteUrl}/pl${path}`,
            en: `${siteUrl}/en${path}`,
          },
        },
      });
    }
  }

  // Individual history posts from Sanity.
  if (sanityConfigured) {
    try {
      const rows = await client.fetch<{ slug: string; locale: string }[]>(
        historySlugsQuery,
      );
      for (const r of rows) {
        if (!r.slug || !locales.includes(r.locale as (typeof locales)[number]))
          continue;
        pages.push({
          url: `${siteUrl}/${r.locale}/historia/${r.slug}`,
          lastModified: new Date(),
          changeFrequency: "yearly",
          priority: 0.6,
        });
      }
    } catch {
      // ignore — sitemap still has the static pages
    }
  }

  return pages;
}
