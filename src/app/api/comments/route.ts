import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/sanity/env";

// Created lazily so an unconfigured build (no projectId yet) doesn't fail.
function getWriteClient() {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
  });
}

// naive in-memory rate limit (per warm instance)
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const win = 60_000;
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < win);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}

export async function POST(req: Request) {
  if (!projectId || !process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json({ error: "CMS not configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: { author?: string; content?: string; postId?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  // honeypot — bots fill hidden "website" field
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const author = (body.author ?? "").trim().slice(0, 80);
  const content = (body.content ?? "").trim().slice(0, 4000);
  const postId = (body.postId ?? "").trim();

  if (!author || !content || !postId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await getWriteClient().create({
      _type: "comment",
      author,
      content,
      date: new Date().toISOString(),
      approved: false, // awaits moderation in the Studio
      post: { _type: "reference", _ref: postId },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
