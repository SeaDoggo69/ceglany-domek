import { groq } from "next-sanity";
import type { SanityImageSource } from "./image";
import type { PortableTextBlock } from "@portabletext/types";

/* ---------- Types returned to components ---------- */

export type SanityComment = {
  _id: string;
  author: string;
  date: string; // ISO
  content: string;
};

export type HistoryPostDoc = {
  _id: string;
  title: string;
  slug: string;
  locale: "pl" | "en";
  publishedAt: string;
  author: string;
  excerpt?: string;
  body: PortableTextBlock[];
  mainImage?: SanityImageSource;
  mainImageCaption?: string;
  isArchive: boolean;
  pullQuote?: string;
  pullQuoteAuthor?: string;
  comments: SanityComment[];
};

export type RouteDoc = {
  _id: string;
  title: string;
  slug: string;
  locale: "pl" | "en";
  publishedAt: string;
  difficulty?: string;
  distanceKm?: number;
  durationLabel?: string;
  type?: string; // pieszy / rowerowy / kajakowy
  excerpt?: string;
  body: PortableTextBlock[];
  mainImage?: SanityImageSource;
  mainImageCaption?: string;
};

export type GalleryPhotoDoc = {
  _id: string;
  image: SanityImageSource;
  caption?: string;
  year?: string;
  orderRank?: number;
};

/* ---------- GROQ queries ---------- */

// Approved comments are joined per-post via a reference on the comment.
const commentProjection = groq`
  "comments": *[_type == "comment" && approved == true && post._ref == ^._id]
    | order(date asc){ _id, author, date, content }
`;

export const historyPostsQuery = groq`
  *[_type == "historyPost" && locale == $locale]
  | order(isArchive asc, publishedAt desc){
    _id, title, "slug": slug.current, locale, publishedAt, author,
    excerpt, body, mainImage, mainImageCaption, isArchive,
    pullQuote, pullQuoteAuthor,
    ${commentProjection}
  }
`;

// Lightweight list for the History index (cards) — no full body/comments,
// just a derived excerpt and an approved-comment count.
export type HistoryCard = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  author?: string;
  excerpt?: string;
  mainImage?: SanityImageSource;
  isArchive: boolean;
  commentCount: number;
};

export const historyCardsQuery = groq`
  *[_type == "historyPost" && locale == $locale]
  | order(isArchive asc, publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, author,
    "excerpt": coalesce(excerpt, pt::text(body[0])),
    mainImage, isArchive,
    "commentCount": count(*[_type == "comment" && approved == true && post._ref == ^._id])
  }
`;

// Full single post for the detail page (/historia/[slug]).
export const historyPostBySlugQuery = groq`
  *[_type == "historyPost" && slug.current == $slug && locale == $locale][0]{
    _id, title, "slug": slug.current, locale, publishedAt, author,
    excerpt, body, mainImage, mainImageCaption, isArchive,
    pullQuote, pullQuoteAuthor,
    ${commentProjection}
  }
`;

export const historySlugsQuery = groq`
  *[_type == "historyPost" && defined(slug.current)]{ "slug": slug.current, locale }
`;

export const routesQuery = groq`
  *[_type == "route" && locale == $locale]
  | order(publishedAt desc){
    _id, title, "slug": slug.current, locale, publishedAt,
    difficulty, distanceKm, durationLabel, type,
    excerpt, body, mainImage, mainImageCaption
  }
`;

export const galleryQuery = groq`
  *[_type == "galleryPhoto"] | order(orderRank asc, year asc){
    _id, image, caption, year, orderRank
  }
`;
