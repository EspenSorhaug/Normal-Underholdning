# Normal Underholdning — Nettside Spec

## Oversikt

Nettside for Normal Underholdning, et underholdningsselskap som tilbyr impro, revy, musikal og utleie av AV-utstyr. Siden skal presentere selskapet, vise kommende arrangementer og dele videoinnhold fra YouTube.

## Målgruppe

Alle som vil vite hva Normal Underholdning driver med — publikum, potensielle leietakere av AV-utstyr, og samarbeidspartnere.

## Navigasjon (header)

Fast header øverst på alle sider med lenker til:

| Side | URL |
|------|-----|
| Forside | `/` |
| Hvem er vi | `/hvem-er-vi` |
| Impro | `/impro` |
| Revy | `/revy` |
| Musikal | `/musikal` |
| Leieutstyr | `/leieutstyr` |
| Video | `/video` |
| Kontakt | `/kontakt` |

## Sider og seksjoner

### 1. Forside (`/`)
- **Hero** — Logo, navn og kort slagord
- **Kommende arrangementer** — Fremtredende seksjon øverst, viser neste arrangement(er) med dato, sted og lenke til billettkjøp
- **Hva vi gjør** — Kort presentasjon av Impro, Revy, Musikal og Leieutstyr med lenker til undersidene
- **Siste videoer fra YouTube** — 3 siste videoer fra kanalen

### 2. Hvem er vi (`/hvem-er-vi`)
- Hvem er Normal Underholdning
- Historikk og bakgrunn
- Logo vises
- Hvem er med (bilder og korte beskrivelser — legges til etterhvert)

### 3. Impro (`/impro`)
- Introduksjon til improvisasjonsteater
- Prosjekter og forestillinger (utbrodert info om hva vi har gjort)
- Bilder (legges til etterhvert)
- Videoklipp (legges til etterhvert)

### 4. Revy (`/revy`)
- Introduksjon til revyarbeidet
- Prosjekter og forestillinger
- Bilder og video (legges til etterhvert)

### 5. Musikal (`/musikal`)
- Introduksjon til musikalarbeidet
- Prosjekter og forestillinger
- Bilder og video (legges til etterhvert)

### 6. Leieutstyr (`/leieutstyr`)
- Hva slags AV-utstyr som leies ut
- Priser / kontakt for forespørsel
- Bilder av utstyr (legges til etterhvert)

### 7. Video (`/video`)
- Alle videoer fra YouTube-kanalen
- YouTube-kanal ID: `UCUpIPEvM1YtKGZlUHMB15gQ`
- Hentes via YouTube RSS-feed (ingen API-nøkkel nødvendig)

### 8. Kontakt (`/kontakt`)
- Kontaktskjema (navn, e-post, melding) via Formspree (gratis)
- E-postadresse
- Sosiale medier

## Arrangementer (datamodell v1)

Arrangementer legges inn manuelt i koden til å begynne med. Hvert arrangement har:

```ts
{
  id: string
  tittel: string
  type: "impro" | "revy" | "musikal" | "annet"
  dato: string        // ISO 8601
  sted: string
  beskrivelse: string
  billetlenke?: string  // eks. Ticketmaster / Facebook Event
  facebookEvent?: string
}
```

**Neste arrangement:** Improshow
- Facebook: https://fb.me/e/1XA6d794Tc
- Ticketmaster: (hentes fra Facebook-eventet)

## Design

### Fargepalett (inspirert av logoen)

Logoen viser et scenemiljø med røde gardiner, varm mørkebrun bakgrunn og hvit tekst.

| Rolle | Farge | Hex |
|-------|-------|-----|
| Primær (rød) | Scenerød | `#C8102E` |
| Bakgrunn mørk | Scenebrun | `#1A0A05` |
| Bakgrunn mellom | Varm brun | `#2D1509` |
| Aksent (gull) | Spotlys | `#F0A500` |
| Tekst lys | Hvit | `#F5F5F5` |
| Tekst dempet | Grå | `#A89A90` |

Alle fargekombinasjoner skal tilfredsstille WCAG AA (minimum 4.5:1 kontrastforhold for brødtekst).

### Tone og stil
- Design er basert på farge og stemning i logo i Normal Underholdning.png
- Varm, leken og inviterende — passer underholdningsbransjen
- Scenetema uten å bli klisjeaktig
- Logo vises fremtredende i header og på forsiden

### Logo
- Plasseres i header (venstre side) og som hero på forsiden, og som faneikon
- Format: PNG med transparent bakgrunn (leveres av kunde)

## Teknisk stack

| Valg | Teknologi |
|------|-----------|
| Framework | React 19 (Vite) |
| Pakkebehandler | pnpm 11 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| Språk | TypeScript |
| YouTube-data | YouTube RSS-feed via `feed.xml` |
| Kontaktskjema | Formspree (gratis tier) |
| Deployment | Vercel (gratis, auto-deploy fra GitHub) |

## Akseptansekriterier

- [ ] Logo vises i header og på forsiden
- [ ] Neste arrangement er synlig på forsiden
- [ ] Header med navigasjon er tilgjengelig på alle sider
- [ ] Egne sider for Impro, Revy, Musikal og Leieutstyr
- [ ] YouTube-videoer vises i iFrame på forsiden og `/video` og kan spilles av på nettsiden
- [ ] Kontaktskjema fungerer
- [ ] Alle fargekontraster møter WCAG AA
- [ ] Responsivt ned til 375px bredde
- [ ] Bygger uten feil med `pnpm build`

## Ikke i scope (v1)

- CMS / redaktørverktøy (arrangementer legges inn manuelt)

- Billettsalg direkte på siden
- Flerspråklig støtte
- Bilder og video på undersidesider (legges til i v2)
