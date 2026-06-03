import { defineField, defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Komentarz",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Imię / podpis",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "content",
      title: "Treść",
      type: "text",
      rows: 4,
      validation: (r) => r.required().max(4000),
    }),
    defineField({
      name: "date",
      title: "Data",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "approved",
      title: "Zatwierdzony?",
      type: "boolean",
      description:
        "Komentarze gości trafiają tu niezatwierdzone. Zaznacz, by pokazać je na stronie.",
      initialValue: false,
    }),
    defineField({
      name: "post",
      title: "Wpis",
      type: "reference",
      to: [{ type: "historyPost" }],
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Najnowsze",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "author", subtitle: "content", approved: "approved" },
    prepare: ({ title, subtitle, approved }) => ({
      title: `${approved ? "✅" : "⏳"} ${title}`,
      subtitle,
    }),
  },
});
