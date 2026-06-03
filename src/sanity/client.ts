import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";

// Read-only client used by Server Components. Uses the CDN for speed.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
