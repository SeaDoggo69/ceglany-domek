"use client";

import Image from "next/image";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

const monthsPl = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
];
const monthsEn = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(iso: string, locale: "pl" | "en") {
  const [y, m, d] = iso.split("-");
  const months = locale === "pl" ? monthsPl : monthsEn;
  const day = parseInt(d, 10);
  const month = months[parseInt(m, 10) - 1];
  if (!month) return iso;
  return locale === "pl" ? `${day} ${month} ${y}` : `${month} ${day}, ${y}`;
}

function pluralComments(
  n: number,
  t: { commentsSingular: string; commentsFew: string; commentsMany: string },
  locale: "pl" | "en",
) {
  if (locale === "en") return n === 1 ? t.commentsSingular : t.commentsMany;
  if (n === 1) return t.commentsSingular;
  const lastTwo = n % 100;
  const last = n % 10;
  if (last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) return t.commentsFew;
  return t.commentsMany;
}

type ArchiveT = {
  readMore: string;
  readLess: string;
  commentsShow: string;
  commentsHide: string;
  commentsSingular: string;
  commentsFew: string;
  commentsMany: string;
  authorLabel: string;
  publishedLabel: string;
  memoriesLabel: string;
};

const POST_PREVIEW = 420;

export function BlogEntry({
  post,
  locale,
  t,
  reverse,
}: {
  post: BlogPost;
  locale: "pl" | "en";
  t: ArchiveT;
  reverse: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const isLong = post.content.length > POST_PREVIEW;
  const text =
    expanded || !isLong
      ? post.content
      : post.content.slice(0, POST_PREVIEW).trimEnd() + "…";
  const paragraphs = text.split(/\n{2,}/).filter((p) => p.trim());

  return (
    <article className="bg-cream rounded-sm frame overflow-hidden">
      <div className="grid lg:grid-cols-12 lg:items-start">
        {/* Image + meta card */}
        {post.image && (
          <div
            className={`lg:col-span-5 lg:sticky lg:top-24 ${reverse ? "lg:order-2" : ""}`}
          >
            <figure className="flex flex-col overflow-hidden">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.imageCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-3 text-[0.72rem] text-ink-soft italic leading-snug bg-cream-deep/40">
                {post.imageCaption}
              </figcaption>
            </figure>

            {/* Meta card — fills the space beside expanded comments */}
            <div
              className={`hidden lg:block px-8 pt-7 pb-8 transition-opacity duration-500 ${
                showComments ? "opacity-100" : "opacity-100"
              }`}
            >
              <div className="border-t border-oak/15 pt-7 space-y-5">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage-deep mb-1.5">
                    {t.authorLabel}
                  </p>
                  <p className="font-serif text-xl text-ink leading-tight">
                    {post.author}
                  </p>
                </div>

                <div className="flex items-center gap-6 text-ink-soft">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage-deep mb-1">
                      {t.publishedLabel}
                    </p>
                    <p className="text-sm">{formatDate(post.date, locale)}</p>
                  </div>
                  {post.comments.length > 0 && (
                    <div>
                      <p className="font-serif text-3xl text-brick leading-none">
                        {post.comments.length}
                      </p>
                      <p className="text-[0.68rem] uppercase tracking-[0.12em] text-ink-soft mt-1">
                        {t.memoriesLabel}
                      </p>
                    </div>
                  )}
                </div>

                {post.pullQuote && (
                  <figure className="pt-2">
                    <svg
                      width="28"
                      height="22"
                      viewBox="0 0 36 28"
                      fill="currentColor"
                      aria-hidden
                      className="text-brick/30 mb-2"
                    >
                      <path d="M0 28V16C0 7.163 7.163 0 16 0v6c-5.523 0-10 4.477-10 10h6v12H0zm20 0V16C20 7.163 27.163 0 36 0v6c-5.523 0-10 4.477-10 10h6v12H20z" />
                    </svg>
                    <blockquote className="font-serif text-[1.05rem] italic leading-relaxed text-ink">
                      {post.pullQuote}
                    </blockquote>
                    <figcaption className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-sage-deep">
                      — {post.pullQuoteAuthor}
                    </figcaption>
                  </figure>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Text */}
        <div
          className={`lg:col-span-7 p-8 md:p-10 ${reverse ? "lg:order-1" : ""}`}
        >
          <p className="eyebrow mb-3">{post.year}</p>
          <h3 className="font-serif text-2xl md:text-[1.9rem] leading-tight text-ink mb-5">
            {post.title}
          </h3>
          <div className="space-y-4 text-ink-soft leading-relaxed text-[0.95rem]">
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
              className="mt-5 link-underline text-[0.78rem] uppercase tracking-[0.18em] text-brick font-medium"
            >
              {expanded ? t.readLess : t.readMore} {expanded ? "↑" : "↓"}
            </button>
          )}

          {/* Comments toggle */}
          {post.comments.length > 0 && (
            <div className="mt-7 pt-5 border-t border-oak/15">
              <button
                type="button"
                onClick={() => setShowComments(!showComments)}
                aria-expanded={showComments}
                className="flex items-center gap-2.5 text-ink hover:text-brick transition-colors group"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-oak/25 group-hover:border-brick transition-colors">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-transform duration-300 ${showComments ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-[0.8rem] uppercase tracking-[0.14em] font-medium">
                  {post.comments.length}{" "}
                  {pluralComments(post.comments.length, t, locale)}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  showComments
                    ? "grid-rows-[1fr] opacity-100 mt-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-5">
                    {post.comments.map((c, i) => (
                      <li
                        key={i}
                        className="pl-4 border-l-2 border-sage-soft/60"
                      >
                        <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                          <span className="font-serif text-base text-ink">
                            {c.author}
                          </span>
                          <time className="text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft">
                            {formatDate(c.date, locale)}
                          </time>
                        </div>
                        <p className="text-ink-soft text-[0.9rem] leading-relaxed whitespace-pre-line">
                          {c.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
