// Sanity connection details.
// Set these in .env.local (and in Vercel project settings):
//   NEXT_PUBLIC_SANITY_PROJECT_ID=...
//   NEXT_PUBLIC_SANITY_DATASET=production
//   SANITY_API_WRITE_TOKEN=...   (server-only, for comment submissions)

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-01-01";

/** True once the client has filled in the Sanity project id. */
export const sanityConfigured = projectId.length > 0;
