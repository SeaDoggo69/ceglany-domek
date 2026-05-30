import { notFound } from "next/navigation";
import { type Locale, locales } from "@/lib/translations";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Surroundings } from "@/components/Surroundings";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Rules } from "@/components/Rules";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const loc = locale as Locale;

  return (
    <>
      <Navigation locale={loc} />
      <main>
        <Hero locale={loc} />
        <About locale={loc} />
        <Surroundings locale={loc} />
        <Amenities locale={loc} />
        <Gallery locale={loc} />
        <Reviews locale={loc} />
        <Rules locale={loc} />
        <FAQ locale={loc} />
        <Contact locale={loc} />
      </main>
      <Footer locale={loc} />
    </>
  );
}
