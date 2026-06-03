import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { GalleryPhotoDoc } from "@/sanity/queries";

/** Archival photo gallery driven by Sanity. The client uploads new
 *  (old) photos in the Studio; they appear here automatically. */
export function GalleryGrid({ photos }: { photos: GalleryPhotoDoc[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {photos.map((p, i) => (
        <figure
          key={p._id}
          className={`group ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
        >
          <div
            className={`relative overflow-hidden rounded-sm frame ${
              i === 0 ? "aspect-[3/2]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={urlFor(p.image).width(i === 0 ? 1400 : 800).fit("max").url()}
              alt={p.caption ?? "Archiwalne zdjęcie Griesel"}
              fill
              sizes={
                i === 0
                  ? "(max-width: 1024px) 100vw, 66vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {(p.caption || p.year) && (
            <figcaption className="mt-3 text-[0.78rem] text-ink-soft italic leading-relaxed pr-2">
              {p.caption}
              {p.year && (
                <span className="text-sage-deep not-italic"> · {p.year}</span>
              )}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
