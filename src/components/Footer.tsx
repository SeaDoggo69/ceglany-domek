import { type Locale, BOOKING_URL, CONTACT, getDictionary } from "@/lib/translations";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;
  const nav = getDictionary(locale).nav;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-soft/85 py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-serif text-2xl text-cream-soft mb-2">Ceglany Domek</div>
            <p className="text-cream-soft/60 text-sm italic">{t.tagline}</p>
          </div>
          <div>
            <h4 className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-soft mb-4">
              {locale === "pl" ? "Nawigacja" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="link-underline">{nav.about}</a>
              </li>
              <li>
                <a href="#amenities" className="link-underline">{nav.amenities}</a>
              </li>
              <li>
                <a href="#gallery" className="link-underline">{nav.gallery}</a>
              </li>
              <li>
                <a href="#contact" className="link-underline">{nav.contact}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-soft mb-4">
              {locale === "pl" ? "Kontakt" : "Contact"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="link-underline">{CONTACT.phone}</a>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Slowhop ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream-soft/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream-soft/50">
          <div>© {year} Ceglany Domek · {t.rights}</div>
          <div className="italic">{t.madeWith}</div>
        </div>
        <div className="mt-3 text-[0.65rem] text-cream-soft/30 text-center md:text-right">
          Wykonał Igor Kutermankiewicz
        </div>
      </div>
    </footer>
  );
}
