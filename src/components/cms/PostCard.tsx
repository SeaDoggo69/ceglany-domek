import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";
import type { HistoryCard } from "@/sanity/queries";

function commentWord(n: number, locale: "pl" | "en") {
  if (locale === "en") return n === 1 ? "comment" : "comments";
  if (n === 1) return "komentarz";
  const lastTwo = n % 100;
  const last = n % 10;
  if (last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) return "komentarze";
  return "komentarzy";
}

export function PostCard({
  post,
  locale,
}: {
  post: HistoryCard;
  locale: "pl" | "en";
}) {
  const year = new Date(post.publishedAt).getFullYear();
  const excerpt = (post.excerpt ?? "").slice(0, 160).trimEnd();

  return (
    <Link
      href={`/${locale}/historia/${post.slug}`}
      className="group flex flex-col bg-cream rounded-sm frame overflow-hidden transition-shadow duration-500 hover:shadow-soft"
    >
      {post.mainImage && (
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(800).fit("max").url()}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        {!Number.isNaN(year) && (
          <p className="eyebrow mb-2.5">{year}</p>
        )}
        <h3 className="font-serif text-xl md:text-2xl leading-tight text-ink mb-3 group-hover:text-brick transition-colors duration-300">
          {post.title}
        </h3>
        {excerpt && (
          <p className="text-ink-soft text-[0.92rem] leading-relaxed mb-5 line-clamp-3">
            {excerpt}…
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-oak/10">
          {post.author && (
            <span className="text-[0.78rem] text-ink-soft truncate">
              {post.author}
            </span>
          )}
          {post.commentCount > 0 && (
            <span className="flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.12em] text-sage-deep shrink-0">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M14 9a2 2 0 0 1-2 2H6l-4 3V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              {post.commentCount} {commentWord(post.commentCount, locale)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
