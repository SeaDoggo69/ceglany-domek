import { defineField, defineType } from "sanity";

export const route = defineType({
  name: "route",
  title: "Szlak / Trasa",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nazwa trasy",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Adres URL (slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "locale",
      title: "Język",
      type: "string",
      options: {
        list: [
          { title: "Polski", value: "pl" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "pl",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Data dodania",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      title: "Rodzaj trasy",
      type: "string",
      options: {
        list: [
          { title: "Piesza", value: "pieszy" },
          { title: "Rowerowa", value: "rowerowy" },
          { title: "Kajakowa", value: "kajakowy" },
        ],
      },
    }),
    defineField({
      name: "difficulty",
      title: "Trudność",
      type: "string",
      options: {
        list: [
          { title: "Łatwa", value: "łatwa" },
          { title: "Średnia", value: "średnia" },
          { title: "Trudna", value: "trudna" },
        ],
      },
    }),
    defineField({ name: "distanceKm", title: "Długość (km)", type: "number" }),
    defineField({
      name: "durationLabel",
      title: "Czas przejścia",
      type: "string",
      description: "Np. „ok. 2 godziny”",
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "caption", title: "Podpis", type: "string" }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Krótki opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Pełny opis trasy",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "type", media: "mainImage" },
  },
});
