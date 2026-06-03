import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "./env";

// Read-only client used by Server Components.
// useCdn:false so that ISR regeneration always pulls fresh content
// (e.g. a just-approved comment appears within the revalidate window
// instead of being held back by the CDN's own cache).
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});
