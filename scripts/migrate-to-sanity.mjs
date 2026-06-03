#!/usr/bin/env node
/**
 * One-time migration: pushes the existing 8 archival posts, their 131
 * resident comments, and the archival photo gallery into Sanity.
 *
 * Prerequisites:
 *   npm i -D @sanity/client
 *   export SANITY_PROJECT_ID=xxxx
 *   export SANITY_API_WRITE_TOKEN=sk...     (Editor token)
 *   export SANITY_DATASET=production        (optional, defaults to production)
 *
 * Run:
 *   node scripts/migrate-to-sanity.mjs
 */
import { createClient } from "@sanity/client";
import { readFileSync, createReadStream } from "node:fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const projectId = process.env.SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
const dataset = process.env.SANITY_DATASET || "production";

if (!projectId || !token) {
  console.error("Set SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN env vars.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 90);

// Convert a plain-text body (with \n\n paragraphs) into Portable Text blocks
const toPortableText = (text) =>
  text
    .split(/\n{2,}/)
    .filter((p) => p.trim())
    .map((para, i) => ({
      _type: "block",
      _key: `b${i}`,
      style: "normal",
      markDefs: [],
      children: [{ _type: "span", _key: `s${i}`, text: para.trim(), marks: [] }],
    }));

async function uploadImage(relPath) {
  if (!relPath) return null;
  const abs = resolve(root, relPath);
  const asset = await client.assets.upload("image", createReadStream(abs), {
    filename: basename(abs),
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function run() {
  const posts = JSON.parse(
    readFileSync(resolve(__dirname, "seed/posts.json"), "utf8"),
  );
  const gallery = JSON.parse(
    readFileSync(resolve(__dirname, "seed/gallery.json"), "utf8"),
  );

  console.log(`Importing ${posts.length} posts…`);
  for (const p of posts) {
    const img = await uploadImage(p.imagePath);
    if (img && p.imageCaption) img.caption = p.imageCaption;

    const postId = `post-${slugify(p.title)}`;
    await client.createOrReplace({
      _id: postId,
      _type: "historyPost",
      title: p.title,
      slug: { _type: "slug", current: slugify(p.title) },
      locale: "pl",
      publishedAt: new Date(p.date).toISOString(),
      author: p.author || "",
      isArchive: true,
      mainImage: img || undefined,
      mainImageCaption: p.imageCaption || "",
      body: toPortableText(p.content),
      pullQuote: p.pullQuote || "",
      pullQuoteAuthor: p.pullQuoteAuthor || "",
    });

    // comments → approved, referencing the post
    let n = 0;
    for (const c of p.comments) {
      await client.create({
        _type: "comment",
        author: c.author,
        content: c.content,
        date: new Date(c.date).toISOString(),
        approved: true,
        post: { _type: "reference", _ref: postId },
      });
      n++;
    }
    console.log(`  ✓ ${p.title}  (+${n} komentarzy)`);
  }

  console.log(`Importing ${gallery.length} gallery photos…`);
  let rank = 0;
  for (const g of gallery) {
    const img = await uploadImage(g.imagePath);
    await client.create({
      _type: "galleryPhoto",
      image: img,
      caption: g.caption || "",
      year: g.year || "",
      orderRank: rank++,
    });
    console.log(`  ✓ ${g.caption}`);
  }

  console.log("\n✅ Migration complete. Open the Studio to review.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
