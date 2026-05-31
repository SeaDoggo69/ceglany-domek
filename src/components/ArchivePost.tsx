"use client";

import { useState } from "react";

const monthsPl = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

const monthsEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(iso: string, locale: "pl" | "en") {
  const [y, m, d] = iso.split("-");
  const months = locale === "pl" ? monthsPl : monthsEn;
  const day = parseInt(d, 10);
  const month = months[parseInt(m, 10) - 1];
  return locale === "pl" ? `${day} ${month} ${y}` : `${month} ${day}, ${y}`;
}

type ArchivePostProps = {
  date: string;
  title: string;
  content: string;
  locale: "pl" | "en";
  badge: string;
  readMore: string;
  readLess: string;
};

const PREVIEW_LENGTH = 280;

export function ArchivePost({
  date,
  title,
  content,
  locale,
  badge,
  readMore,
  readLess,
}: ArchivePostProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = content.length > PREVIEW_LENGTH;
  const preview = isLong ? content.slice(0, PREVIEW_LENGTH).trimEnd() + "…" : content;
  const text = expanded ? content : preview;
  const paragraphs = text.split(/\n{2,}/).filter((p) => p.trim());

  return (
    <article className="bg-cream rounded-sm frame p-8 md:p-10 transition-shadow hover:shadow-soft">
      <header className="flex items-center justify-between gap-4 mb-5 flex-wrap">
        <time
          dateTime={date}
          className="text-[0.72rem] uppercase tracking-[0.22em] text-sage-deep"
        >
          {formatDate(date, locale)}
        </time>
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-brick px-2 py-1 border border-brick/30 rounded-sm">
          {badge}
        </span>
      </header>
      <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight mb-6">
        {title}
      </h3>
      <div className="space-y-4 text-ink-soft leading-relaxed text-[0.95rem] md:text-base">
        {paragraphs.map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            {p}
          </p>
        ))}
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-6 link-underline text-[0.78rem] uppercase tracking-[0.2em] text-brick font-medium"
        >
          {expanded ? readLess : readMore} {expanded ? "↑" : "↓"}
        </button>
      )}
    </article>
  );
}
