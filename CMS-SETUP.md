# Panel treści (Sanity) — instrukcja

Strona ma wbudowany panel pod adresem **/studio** (np.
`https://domek-gryzyna.vercel.app/studio`). Wdraża się automatycznie
razem ze stroną — klientka nigdy nie dotyka kodu.

Projekt Sanity: **nv493njf**, dataset **production**.

## Co zostało zrobione (kod)
- Wbudowane Studio `/studio` (route group `(studio)`).
- Schematy: wpisy Historia, Szlaki/trasy, Galeria, Komentarze (z moderacją).
- Komponenty: `HistoryPost`, `CommentSection`, `RouteList`, `GalleryGrid`.
- API `/api/comments` — zapisuje komentarze gości do zatwierdzenia.
- Skrypt migracji istniejących treści: `scripts/migrate-to-sanity.mjs`.

## Pozostałe kroki (jednorazowo)

### 1. CORS — pozwól stronie czytać/zapisywać
W https://sanity.io/manage → projekt → **API → CORS origins → Add**:
- `http://localhost:3000` (zaznacz *Allow credentials*)
- `https://domek-gryzyna.vercel.app` (i docelowa domena)

### 2. Token zapisu (do komentarzy + migracji)
Sanity → **API → Tokens → Add token**, rola **Editor**. Skopiuj `sk...`.

### 3. Zmienne środowiskowe
Lokalnie (`.env.local`) i w Vercel → Settings → Environment Variables:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=nv493njf
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=sk...        # tylko serwer
```

### 4. Import istniejących treści (8 wpisów + 131 komentarzy + galeria)
```bash
npm i -D @sanity/client
export SANITY_PROJECT_ID=nv493njf
export SANITY_API_WRITE_TOKEN=sk...
node scripts/migrate-to-sanity.mjs
```

### 5. Zaproszenie klientki
Sanity → Project → **Members → Invite** (rola *Editor*).
Klientka wchodzi na `/studio`, loguje się i zarządza treścią.

## Codzienna praca klientki (na /studio)
- **📝 Historia — wpisy**: „+", tytuł, zdjęcie, treść. Stare = *archiwalne*.
- **🥾 Szlaki i trasy**: nowa trasa (dystans, czas, opis, zdjęcie).
- **🖼️ Galeria — Griesel**: upload starych zdjęć (przeciągnij plik).
- **💬 Komentarze do zatwierdzenia**: zaznacz „Zatwierdzony".
