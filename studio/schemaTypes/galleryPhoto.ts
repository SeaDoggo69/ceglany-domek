import { defineField, defineType } from "sanity";

export const galleryPhoto = defineType({
  name: "galleryPhoto",
  title: "Zdjęcie archiwalne (Griesel)",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Zdjęcie",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "caption",
      title: "Podpis",
      type: "string",
      description: "Opis zdjęcia, np. „Pałac myśliwski, ok. 1910 r.”",
    }),
    defineField({
      name: "year",
      title: "Rok / okres",
      type: "string",
      description: "Np. „1922” lub „lata 30. XX w.”",
    }),
    defineField({
      name: "orderRank",
      title: "Kolejność",
      type: "number",
      description: "Mniejsza liczba = wcześniej. Zostaw puste, by sortować po roku.",
    }),
  ],
  orderings: [
    {
      title: "Kolejność ręczna",
      name: "orderAsc",
      by: [{ field: "orderRank", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "caption", subtitle: "year", media: "image" },
  },
});
