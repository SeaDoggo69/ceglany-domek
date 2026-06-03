# Ceglany Domek — Panel treści (Sanity Studio)

Panel, w którym klientka dodaje wpisy, trasy, zdjęcia i moderuje komentarze.
**Nie wymaga dotykania kodu strony.**

## Pierwsze uruchomienie (raz, robi developer)

1. Załóż darmowy projekt na https://sanity.io → skopiuj **Project ID**.
2. W tym folderze:
   ```bash
   cd studio
   npm install
   export SANITY_STUDIO_PROJECT_ID=twoj_project_id
   npm run dev          # podgląd lokalny http://localhost:3333
   npm run deploy       # publikacja → https://ceglany-domek.sanity.studio
   ```
3. Zaproś klientkę: Sanity → Project → Members → Invite (rola *Editor*).

## Codzienna praca klientki

Wchodzi na **https://ceglany-domek.sanity.studio**, loguje się i:

- **📝 Historia — wpisy** → „+” dodaje nowy wpis (tytuł, zdjęcie, treść).
  Nowe wpisy są na górze; stare zaznaczone jako *archiwalne* — pod spodem.
- **🥾 Szlaki i trasy** → nowa trasa (dystans, czas, opis, zdjęcie).
- **🖼️ Galeria — Griesel** → upload starych zdjęć (przeciągnij plik).
- **💬 Komentarze do zatwierdzenia** → goście dodają wspomnienia pod wpisami;
  klientka zaznacza „Zatwierdzony", by pojawiły się na stronie.

Po zapisaniu zmiany są widoczne na stronie w ciągu ~1 min (rewalidacja).

## Import istniejących treści (raz)

8 archiwalnych wpisów + 131 komentarzy + galeria są w `scripts/seed/`.
Z głównego folderu projektu:

```bash
npm i -D @sanity/client
export SANITY_PROJECT_ID=twoj_project_id
export SANITY_API_WRITE_TOKEN=sk...   # token z rolą Editor
node scripts/migrate-to-sanity.mjs
```
