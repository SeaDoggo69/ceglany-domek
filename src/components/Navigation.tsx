"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { type Locale, locales, BOOKING_URL, getDictionary } from "@/lib/translations";

export function Navigation({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;
  const pathname = usePathname();
  const otherLocale = locales.find((l) => l !== locale) ?? "en";
  const otherPath = pathname.replace(/^\/[a-z]{2}/, `/${otherLocale}`);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPhase, setMenuPhase] = useState<"closed" | "entering" | "open" | "exiting">("closed");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      setMenuPhase("entering");
      const id = window.setTimeout(() => setMenuPhase("open"), 20);
      return () => window.clearTimeout(id);
    }
    setMenuPhase((prev) => (prev === "closed" ? "closed" : "exiting"));
    const t = window.setTimeout(() => setMenuPhase("closed"), 320);
    return () => window.clearTimeout(t);
  }, [open]);

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

      {mounted &&
        menuPhase !== "closed" &&
        createPortal(
          <div
            className="mobile-menu-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 60,
              background: "#faf6ee",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              opacity: menuPhase === "open" ? 1 : 0,
              transform: menuPhase === "open" ? "translateX(0)" : "translateX(8%)",
              transition:
                "opacity 380ms cubic-bezier(0.16, 1, 0.3, 1), transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "opacity, transform",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.25rem",
                zIndex: 1,
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.menuClose}
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#2a2620",
                  fontSize: "1.75rem",
                  lineHeight: 1,
                  opacity: menuPhase === "open" ? 1 : 0,
                  transform: menuPhase === "open" ? "rotate(0)" : "rotate(-90deg)",
                  transition: "opacity 320ms ease-out, transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: menuPhase === "open" ? "200ms" : "0ms",
                }}
              >
                ×
              </button>
            </div>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "5rem 2rem 2.5rem",
                gap: "0.25rem",
                minHeight: "100%",
                background: "#faf6ee",
              }}
            >
            {links.map((link, i) => {
              const itemStyle: React.CSSProperties = {
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.875rem",
                color: "#2a2620",
                padding: "0.875rem 0",
                borderBottom: "1px solid rgba(107, 74, 43, 0.15)",
                textDecoration: "none",
                opacity: menuPhase === "open" ? 1 : 0,
                transform: menuPhase === "open" ? "translateY(0)" : "translateY(18px)",
                transition:
                  "opacity 480ms cubic-bezier(0.16, 1, 0.3, 1), transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: menuPhase === "open" ? `${120 + i * 45}ms` : "0ms",
                willChange: "opacity, transform",
              };
              if (link.page) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={itemStyle}
                  >
                    {link.label}
                  </Link>
                );
              }
              const href =
                pathname === `/${locale}` ? link.href : `/${locale}${link.href}`;
              return (
                <a
                  key={link.href}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={itemStyle}
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
              style={{
                marginTop: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem 1.5rem",
                background: "#2a2620",
                color: "#faf6ee",
                borderRadius: "999px",
                fontSize: "0.95rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                opacity: menuPhase === "open" ? 1 : 0,
                transform: menuPhase === "open" ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
                transition:
                  "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: menuPhase === "open" ? `${120 + links.length * 45 + 80}ms` : "0ms",
                willChange: "opacity, transform",
              }}
            >
              {t.book}
            </a>
          </nav>
        </div>,
          document.body,
        )}
    </header>
  );
}
