import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./env";

/** Minimal shape of a Sanity image reference (avoids pulling in the
 *  heavy `sanity` package just for a type). */
export type SanityImageSource =
  | { asset?: { _ref?: string; _id?: string } }
  | { _ref: string }
  | Record<string, unknown>;

const builder = createImageUrlBuilder({ projectId, dataset });

/** Build an optimized image URL from a Sanity image reference. */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
