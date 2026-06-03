import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { notFound } from "next/navigation";
import "../../globals.css";
import { type Locale, locales, getDictionary, CONTACT } from "@/lib/translations";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
  const dict = getDictionary(locale as Locale);
  const siteUrl = "https://ceglany-domek.pl";

  return {
    metadataBase: new URL(siteUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        pl: "/pl",
        en: "/en",
        "x-default": "/pl",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pl" ? "pl_PL" : "en_GB",
      url: `${siteUrl}/${locale}`,
      siteName: "Ceglany Domek",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/images/20.webp",
          width: 1200,
          height: 800,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/images/20.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const siteUrl = "https://ceglany-domek.pl";

  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${siteUrl}/#lodging`,
    name: "Ceglany Domek",
    description: dict.meta.description,
    url: `${siteUrl}/${locale}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gryżyna 21",
      addressLocality: "Gryżyna",
      addressRegion: "Lubuskie",
      postalCode: "66-630",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.1289,
      longitude: 15.4664,
    },
    telephone: CONTACT.phone,
    image: [
      `${siteUrl}/images/20.webp`,
      `${siteUrl}/images/14.webp`,
      `${siteUrl}/images/2.webp`,
    ],
    priceRange: "$$",
    numberOfRooms: 3,
    petsAllowed: true,
    smokingAllowed: false,
    checkinTime: "16:00",
    checkoutTime: "11:00",
    availableLanguage: ["Polish", "English"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "26",
      bestRating: "5",
      worstRating: "1",
    },
    review: dict.reviews.items.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      publisher: { "@type": "Organization", name: r.source },
    })),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pets allowed", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
      { "@type": "LocationFeatureSpecification", name: "Tiled stove", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bicycles", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washing machine", value: true },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/${locale}#faq`,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${siteUrl}/#park`,
    name: "Gryżyński Park Krajobrazowy",
    description:
      locale === "pl"
        ? "Najmniejszy park krajobrazowy w województwie lubuskim - 11 polodowcowych jezior, dwustuletnie dębowe aleje, pstrągowa dolina potoku Gryżynki, bukowe wąwozy i bogata fauna."
        : "The smallest landscape park in Lubuskie Voivodeship - 11 post-glacial lakes, two-hundred-year-old oak alleys, the Gryżynka trout valley, beech ravines and rich fauna.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.1289,
      longitude: 15.4664,
    },
    isAccessibleForFree: true,
    publicAccess: true,
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream-soft text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
