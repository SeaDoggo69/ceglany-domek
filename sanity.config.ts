"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { projectId, dataset } from "./src/sanity/env";

// Embedded Studio — served at /studio, deploys automatically with the site.
// The client just opens /studio and logs in with their Sanity account.
export default defineConfig({
  name: "ceglany-domek",
  title: "Ceglany Domek — Panel treści",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Treści")
          .items([
            S.listItem()
              .title("📝 Historia — wpisy")
              .child(S.documentTypeList("historyPost").title("Wpisy (Historia)")),
            S.listItem()
              .title("🥾 Szlaki i trasy")
              .child(S.documentTypeList("route").title("Szlaki i trasy")),
            S.listItem()
              .title("🖼️ Galeria — Griesel")
              .child(S.documentTypeList("galleryPhoto").title("Zdjęcia archiwalne")),
            S.divider(),
            S.listItem()
              .title("💬 Komentarze — do zatwierdzenia")
              .child(
                S.documentList()
                  .title("Czekają na zatwierdzenie")
                  .filter('_type == "comment" && approved == false')
                  .defaultOrdering([{ field: "date", direction: "desc" }]),
              ),
            S.listItem()
              .title("💬 Komentarze — wszystkie")
              .child(S.documentTypeList("comment").title("Wszystkie komentarze")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
