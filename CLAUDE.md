# CLAUDE.md

Veiledning for Claude Code (claude.ai/code) og andre som jobber i dette repoet.

## Prosjektet

Nettsiden til Normal Underholdning: revy, musikal, impro og utleie av kamerautstyr.
Opprinnelig spesifikasjon står i `SPEC.md`.

- React 19 + Vite + TypeScript + Tailwind v4 + React Router v7 (`BrowserRouter`)
- Pakkebehandler: pnpm
- Deploy: Vercel fra `main`, med preview per PR
- GitHub: https://github.com/EspenSorhaug/Normal-Underholdning

Koden og innholdet er på norsk: komponenter, variabler, tekster og commit-meldinger.

## Kommandoer

- `pnpm dev`: lager bildevarianter og starter Vite
- `pnpm build`: lager bildevarianter, typesjekker og bygger til `dist/`
- `pnpm lint`: ESLint
- `pnpm bilder`: lager bare bildevariantene (se under)
- `node --watch server.js`: lokal backend for YouTube-videoene på port 3001. Vite sender
  `/api` dit. Uten den viser «Siste videoer» en feilmelding lokalt. I produksjon brukes
  `api/videos.js` som Vercel-funksjon.

## Struktur

- `src/pages/`: én fil per side (Forside, HvemErVi, Impro, Revy, Musikal, Kameraleie, Video, Kontakt)
- `src/components/`: felles komponenter, blant annet `Bilde`, `ProsjektKort`, `ArrangementKort`,
  `KommendeArrangementer`, `MerPaaVei` og `TilToppen` (scroller til toppen ved sidebytte)
- `src/data/arrangementer.ts`: kommende arrangementer, lagt inn manuelt. Vises på forsiden og
  filtrert per type, for eksempel på Impro-siden.
- `src/data/prosjekter.ts`: revyer og musikaler med tekst, plakat og bilder. Nyeste først.
- `public/<side>/`: bildene, lastet ned manuelt (blant annet fra Instagram). Det skal ikke være
  noen automatisk henting fra Instagram.

## Bilder

Bilder legges i `public/` (for eksempel `public/revy/navn.jpg`) og vises alltid med `<Bilde>`:

```tsx
<Bilde src="/revy/navn.jpg" alt="Beskrivelse" sizes="(min-width: 768px) 340px, 100vw" />
```

- `scripts/optimaliser-bilder.mjs` (sharp) lager WebP på 400, 800 og 1200 px i
  `public/optimert/` og skriver mål til `src/data/bilder.json`. Begge er genererte og ligger
  ikke i git. Skriptet kjøres automatisk før `dev` og `build` og hopper over ferdige bilder.
- `sizes` skal beskrive hvor bredt bildet faktisk vises, så nettleseren velger riktig variant.
- Bruk `prioritet` på toppbildet på en side. Andre bilder lastes når man scroller nær dem.
- `<img>` gir lint-feil, unntatt i `Bilde.tsx` og `YouTubeGrid.tsx`.
- Legges et bilde til mens `pnpm dev` kjører, vises originalen til dev-serveren startes på nytt.
- Egne bilder (for eksempel fra mobil) skal renses for GPS-data før de legges inn.

## Stil

- Farger (fra SPEC): scenerød `#C8102E`, mørk bakgrunn `#3A0612`, kort `#5E0A1D`, gull `#F0A500`,
  tekst `#F5F5F5`, dempet `#A89A90`. De brukes som Tailwind-verdier, for eksempel `text-[#F0A500]`.
- Undersider følger samme mønster: liten gull etikett, stor tittel, intro og et bilde i et
  to-kolonners rutenett øverst. Innholdet holdes innenfor `max-w-4xl`.
- Siden skal fungere ned til 375 px bredde uten horisontal scrolling.

## Arbeidsflyt

- Lag en ny gren fra oppdatert `main` før endringer. Lag PR mot `main`.
- Verifiser med `pnpm build`, `pnpm lint` og i nettleser (desktop og 375 px) før PR.
