import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import type { HistoryPostDoc } from "@/sanity/queries";
import { CommentSection } from "./CommentSection";

const monthsPl = [
  "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
  "lipca", "sierpnia", "września", "października", "listopada", "grudnia",
];
const monthsEn = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatDate(iso: string, locale: "pl" | "en") {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  const m = (locale === "pl" ? monthsPl : monthsEn)[d.getMonth()];
  return locale === "pl"
    ? `${d.getDate()} ${m} ${d.getFullYear()}`
    : `${m} ${d.getDate()}, ${d.getFullYear()}`;
}

const labels = {
  pl: { author: "Autor wpisu", published: "Opublikowano", memories: "wspomnień gości" },
  en: { author: "Post author", published: "Published", memories: "shared memories" },
};

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-ink-soft leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brick pl-5 my-6 font-serif italic text-ink">
        {children}
      </blockquote>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl text-ink mt-8 mb-3">{children}</h3>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-7 overflow-hidden rounded-sm frame">
        <Image
          src={urlFor(value).width(1200).fit("max").url()}
          alt={value?.alt ?? ""}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </figure>
    ),
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-medium text-ink">{children}</strong>,
  },
};

export function HistoryPost({
  post,
  locale,
}: {
  post: HistoryPostDoc;
  locale: "pl" | "en";
}) {
  const l = labels[locale];
  const year = new Date(post.publishedAt).getFullYear();

  return (
    <article className="bg-cream rounded-sm frame overflow-hidden">
      {/* Main image */}
      {post.mainImage && (
        <figure className="flex flex-col">
          <div className="relative w-full aspect-[3/2] sm:aspect-[5/2]">
            <Image
              src={urlFor(post.mainImage).width(1600).fit("max").url()}
              alt={post.mainImageCaption ?? post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
          {post.mainImageCaption && (
            <figcaption className="px-6 py-3 text-[0.72rem] text-ink-soft italic bg-cream-deep/40">
              {post.mainImageCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="p-7 md:p-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Text column */}
          <div className="lg:col-span-8">
            {!Number.isNaN(year) && <p className="eyebrow mb-3">{year}</p>}
            <h3 className="font-serif text-3xl md:text-[2.4rem] leading-tight text-ink mb-6">
              {post.title}
            </h3>
            <div className="text-[1rem] md:text-[1.05rem]">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          </div>

          {/* Sidebar card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-cream-soft/70 border border-oak/12 rounded-sm p-6 space-y-5">
              {post.author && (
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage-deep mb-1.5">
                    {l.author}
                  </p>
                  <p className="font-serif text-xl text-ink leading-tight">{post.author}</p>
                </div>
              )}
              <div className="flex items-end gap-6 pt-1">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage-deep mb-1">
                    {l.published}
                  </p>
                  <p className="text-sm text-ink-soft">{formatDate(post.publishedAt, locale)}</p>
                </div>
                {post.comments.length > 0 && (
                  <div>
                    <p className="font-serif text-3xl text-brick leading-none">
                      {post.comments.length}
                    </p>
                    <p className="text-[0.66rem] uppercase tracking-[0.12em] text-ink-soft mt-1">
                      {l.memories}
                    </p>
                  </div>
                )}
              </div>
              {post.pullQuote && (
                <figure className="pt-4 border-t border-oak/12">
                  <svg width="26" height="20" viewBox="0 0 36 28" fill="currentColor" aria-hidden className="text-brick/30 mb-2">
                    <path d="M0 28V16C0 7.163 7.163 0 16 0v6c-5.523 0-10 4.477-10 10h6v12H0zm20 0V16C20 7.163 27.163 0 36 0v6c-5.523 0-10 4.477-10 10h6v12H20z" />
                  </svg>
                  <blockquote className="font-serif text-[1.02rem] italic leading-relaxed text-ink">
                    {post.pullQuote}
                  </blockquote>
                  {post.pullQuoteAuthor && (
                    <figcaption className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-sage-deep">
                      — {post.pullQuoteAuthor}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </aside>
        </div>

        {/* Comments — full width below */}
        <div className="max-w-3xl">
          <CommentSection postId={post._id} comments={post.comments} locale={locale} />
        </div>
      </div>
    </article>
  );
}
