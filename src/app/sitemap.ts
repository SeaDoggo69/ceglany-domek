import type { MetadataRoute } from "next";
import { locales } from "@/lib/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://ceglany-domek.pl";
  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    pages.push({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === "pl" ? 1 : 0.8,
      alternates: {
        languages: {
          pl: `${siteUrl}/pl`,
          en: `${siteUrl}/en`,
        },
      },
    });
    pages.push({
      url: `${siteUrl}/${locale}/historia`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: {
        languages: {
          pl: `${siteUrl}/pl/historia`,
          en: `${siteUrl}/en/historia`,
        },
      },
    });
  }

  return pages;
}
