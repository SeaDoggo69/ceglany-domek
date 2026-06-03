"use client";

import { useState } from "react";
import type { SanityComment } from "@/sanity/queries";

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
  const months = locale === "pl" ? monthsPl : monthsEn;
  const day = d.getDate();
  const month = months[d.getMonth()];
  const y = d.getFullYear();
  return locale === "pl" ? `${day} ${month} ${y}` : `${month} ${day}, ${y}`;
}

function pluralComments(n: number, locale: "pl" | "en") {
  if (locale === "en") return n === 1 ? "comment" : "comments";
  if (n === 1) return "komentarz";
  const lastTwo = n % 100;
  const last = n % 10;
  if (last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) return "komentarze";
  return "komentarzy";
}

const t = {
  pl: {
    add: "Dodaj wspomnienie",
    name: "Imię lub podpis",
    message: "Twoje wspomnienie…",
    submit: "Wyślij",
    sending: "Wysyłanie…",
    thanks: "Dziękujemy! Komentarz pojawi się po zatwierdzeniu przez gospodarzy.",
    error: "Nie udało się wysłać. Spróbuj ponownie.",
    empty: "Bądź pierwszą osobą, która podzieli się wspomnieniem.",
  },
  en: {
    add: "Add a memory",
    name: "Name or signature",
    message: "Your memory…",
    submit: "Send",
    sending: "Sending…",
    thanks: "Thank you! Your comment will appear once the hosts approve it.",
    error: "Could not send. Please try again.",
    empty: "Be the first to share a memory.",
  },
};

export function CommentSection({
  postId,
  comments,
  locale,
}: {
  postId: string;
  comments: SanityComment[];
  locale: "pl" | "en";
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ author: "", content: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const tr = t[locale];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.author.trim() || !form.content.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, postId }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setForm({ author: "", content: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mt-7 pt-5 border-t border-oak/15">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center gap-2.5 text-ink hover:text-brick transition-colors group"
      >
        <span className="flex items-center justify-center w-7 h-7 rounded-full border border-oak/25 group-hover:border-brick transition-colors">
          <svg
            width="13" height="13" viewBox="0 0 14 14" fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            aria-hidden
          >
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        <span className="text-[0.8rem] uppercase tracking-[0.14em] font-medium">
          {comments.length} {pluralComments(comments.length, locale)}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {comments.length === 0 && (
            <p className="text-ink-soft text-sm italic mb-6">{tr.empty}</p>
          )}
          <ul className="space-y-5">
            {comments.map((c) => (
              <li key={c._id} className="pl-4 border-l-2 border-sage-soft/60">
                <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                  <span className="font-serif text-base text-ink">{c.author}</span>
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

          {/* Submission form */}
          <div className="mt-8 pt-6 border-t border-oak/10">
            {status === "done" ? (
              <p className="text-sage-deep text-sm py-3">{tr.thanks}</p>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <p className="text-[0.78rem] uppercase tracking-[0.16em] text-sage-deep">
                  {tr.add}
                </p>
                <input
                  type="text"
                  required
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder={tr.name}
                  className="w-full bg-cream-soft border border-oak/20 rounded-sm px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-sage-deep transition-colors"
                />
                <textarea
                  required
                  rows={3}
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  placeholder={tr.message}
                  className="w-full bg-cream-soft border border-oak/20 rounded-sm px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-sage-deep transition-colors resize-y"
                />
                {status === "error" && (
                  <p className="text-brick text-sm">{tr.error}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary !py-2.5 !px-6 !text-[0.8rem] disabled:opacity-60"
                >
                  {status === "sending" ? tr.sending : tr.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
