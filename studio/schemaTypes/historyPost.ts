import { defineField, defineType } from "sanity";

export const historyPost = defineType({
  name: "historyPost",
  title: "Wpis — Historia",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł wpisu",
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
      title: "Data publikacji",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Autor wpisu",
      type: "string",
      description: "Np. „Anna Flaczyńska” lub „Stowarzyszenie Przyjaciół Gryżyny”",
    }),
    defineField({
      name: "isArchive",
      title: "Wpis archiwalny?",
      type: "boolean",
      description:
        "Zaznacz dla starych postów z bloga. Nowe wpisy (odznaczone) pojawiają się na górze, archiwalne pod spodem.",
      initialValue: false,
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "caption",
          title: "Podpis pod zdjęciem",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Zajawka (krótki wstęp)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Treść wpisu",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "pullQuote",
      title: "Wyróżniony cytat (panel boczny)",
      type: "text",
      rows: 2,
      description: "Cytat z komentarza lub wpisu pokazywany w karcie obok.",
    }),
    defineField({
      name: "pullQuoteAuthor",
      title: "Autor cytatu",
      type: "string",
    }),
  ],
  orderings: [
    {
      title: "Najnowsze",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "author", media: "mainImage", archive: "isArchive" },
    prepare: ({ title, subtitle, media, archive }) => ({
      title: `${archive ? "📜 " : "🆕 "}${title}`,
      subtitle,
      media,
    }),
  },
});
