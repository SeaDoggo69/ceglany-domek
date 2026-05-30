import type { MetadataRoute } from "next";
import { locales } from "@/lib/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://ceglany-domek.pl";
  return locales.map((locale) => ({
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
  }));
}
