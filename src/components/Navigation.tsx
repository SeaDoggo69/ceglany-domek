"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { type Locale, locales, BOOKING_URL, getDictionary } from "@/lib/translations";

export function Navigation({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;
  const pathname = usePathname();
  const otherLocale = locales.find((l) => l !== locale) ?? "en";
  const otherPath = pathname.replace(/^\/[a-z]{2}/, `/${otherLocale}`);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#about", label: t.about },
    { href: "#surroundings", label: t.surroundings },
    { href: "#amenities", label: t.amenities },
    { href: "#gallery", label: t.gallery },
    { href: "#reviews", label: t.reviews },
    { href: `/${locale}/historia`, label: t.history, page: true },
    { href: "#faq", label: t.faq },
    { href: "#contact", label: t.contact },
  ];

  const onTop = !scrolled && !open;
  const textBase = onTop ? "text-cream-soft" : "text-ink";
  const textMuted = onTop
    ? "text-cream-soft/80 hover:text-cream-soft"
    : "text-ink-soft hover:text-ink";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream-soft/90 backdrop-blur-md border-b border-oak/10 py-3"
          : "bg-gradient-to-b from-ink/40 to-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="flex items-baseline gap-2 group flex-shrink-0 whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          <span
            className={`font-serif text-xl md:text-[1.5rem] lg:text-[1.6rem] tracking-tight leading-none whitespace-nowrap transition-colors duration-500 ${textBase}`}
          >
            Ceglany Domek
          </span>
          <span
            className={`hidden xl:inline text-[0.65rem] uppercase tracking-[0.22em] whitespace-nowrap transition-colors duration-500 ${
              onTop ? "text-sage-soft" : "text-sage-deep"
            }`}
          >
            Gryżyna
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-shrink min-w-0">
          {links.map((link) => {
            const className = `text-[0.72rem] xl:text-[0.78rem] uppercase tracking-[0.14em] whitespace-nowrap link-underline transition-colors duration-500 ${textMuted}`;
            if (link.page) {
              return (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            }
            const href = pathname === `/${locale}` ? link.href : `/${locale}${link.href}`;
            return (
              <a key={link.href} href={href} className={className}>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 lg:gap-5 flex-shrink-0">
          <Link
            href={otherPath}
            aria-label={`Switch language to ${otherLocale.toUpperCase()}`}
            className={`link-underline text-[0.72rem] uppercase tracking-[0.22em] font-medium whitespace-nowrap transition-colors duration-500 ${textMuted}`}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <div className="hidden md:block">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary !py-2 !px-4 !text-[0.75rem] whitespace-nowrap ${
                onTop ? "!bg-cream-soft !text-ink hover:!bg-brick hover:!text-cream-soft" : ""
              }`}
            >
              {t.book}
            </a>
          </div>
          <button
            type="button"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 transition-colors duration-500 ${textBase}`}
          >
            <span
              className={`block w-5 h-px bg-current transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        aria-hidden={!open}
        className={`lg:hidden fixed inset-0 z-40 bg-cream-soft transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-8"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 20%, rgba(138,154,123,0.08), transparent 50%), radial-gradient(circle at 20% 80%, rgba(168,85,63,0.06), transparent 50%)",
        }}
      >
        <nav className="flex flex-col px-8 pt-28 pb-12 gap-1 h-full overflow-y-auto">
          {links.map((link, i) => {
            const className = `font-serif text-[2.2rem] sm:text-4xl text-ink py-3.5 border-b border-oak/15 transition-all duration-700 ease-out hover:text-brick ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`;
            const style = { transitionDelay: open ? `${150 + i * 50}ms` : "0ms" };
            if (link.page) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={style}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            }
            const href = pathname === `/${locale}` ? link.href : `/${locale}${link.href}`;
            return (
              <a
                key={link.href}
                href={href}
                onClick={() => setOpen(false)}
                style={style}
                className={className}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${150 + links.length * 50 + 100}ms` : "0ms" }}
            className={`mt-10 btn-primary w-full justify-center transition-all duration-700 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
