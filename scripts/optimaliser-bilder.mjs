// Lager WebP-versjoner i flere bredder av alle bildene i public/, slik at
// nettleseren kan laste ned en størrelse som passer skjermen.
//
//   public/revy/bilde.jpg  ->  public/optimert/revy/bilde-400.webp
//                              public/optimert/revy/bilde-800.webp
//                              public/optimert/revy/bilde-1200.webp
//
// I tillegg skrives src/data/bilder.json med bredde, høyde og tilgjengelige
// bredder for hvert bilde. Komponenten <Bilde> bruker den til srcset.
//
// Skriptet kjøres automatisk før `pnpm dev` og `pnpm build`. Bilder som
// allerede er ferdige hoppes over, så det går raskt etter første gang.
// Legg nye bilder i public/ som før, så tar skriptet seg av resten.

import { mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const rot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicMappe = path.join(rot, 'public')
const utMappe = path.join(publicMappe, 'optimert')
const manifestFil = path.join(rot, 'src', 'data', 'bilder.json')

const BREDDER = [400, 800, 1200]
const KVALITET = 75
const FILTYPER = new Set(['.jpg', '.jpeg', '.png'])

async function finnBilder(mappe) {
  const resultat = []
  for (const oppføring of await readdir(mappe, { withFileTypes: true })) {
    const full = path.join(mappe, oppføring.name)
    if (oppføring.isDirectory()) {
      if (full === utMappe) continue
      resultat.push(...(await finnBilder(full)))
    } else if (FILTYPER.has(path.extname(oppføring.name).toLowerCase())) {
      resultat.push(full)
    }
  }
  return resultat
}

async function erNyere(kilde, mål) {
  try {
    return (await stat(mål)).mtimeMs >= (await stat(kilde)).mtimeMs
  } catch {
    return false
  }
}

const start = Date.now()
const bilder = (await finnBilder(publicMappe)).sort()
const manifest = {}
const forventedeFiler = new Set()
let laget = 0

for (const kilde of bilder) {
  const relativ = path.relative(publicMappe, kilde).split(path.sep).join('/')
  const utenFiltype = relativ.slice(0, -path.extname(relativ).length)

  // .rotate() bruker EXIF-orienteringen, så bredde/høyde stemmer med det man ser.
  const meta = await sharp(kilde).rotate().metadata()
  const snudd = (meta.orientation ?? 1) >= 5
  const bredde = snudd ? meta.height : meta.width
  const høyde = snudd ? meta.width : meta.height

  const varianter = BREDDER.filter((b) => b < bredde)
  if (varianter.length < BREDDER.length) varianter.push(Math.min(bredde, BREDDER.at(-1)))

  for (const b of varianter) {
    const mål = path.join(utMappe, `${utenFiltype}-${b}.webp`)
    forventedeFiler.add(mål)
    if (await erNyere(kilde, mål)) continue
    await mkdir(path.dirname(mål), { recursive: true })
    await sharp(kilde).rotate().resize({ width: b }).webp({ quality: KVALITET }).toFile(mål)
    laget++
  }

  manifest[`/${relativ}`] = { bredde, hoyde: høyde, varianter }
}

// Rydd bort varianter av bilder som er slettet eller endret.
async function rydd(mappe) {
  let entries
  try {
    entries = await readdir(mappe, { withFileTypes: true })
  } catch {
    return
  }
  for (const oppføring of entries) {
    const full = path.join(mappe, oppføring.name)
    if (oppføring.isDirectory()) await rydd(full)
    else if (!forventedeFiler.has(full)) await rm(full)
  }
}
await rydd(utMappe)

await writeFile(manifestFil, JSON.stringify(manifest, null, 2) + '\n')

const sekunder = ((Date.now() - start) / 1000).toFixed(1)
console.log(`Bilder: ${bilder.length} kilder, ${laget} nye varianter (${sekunder} s)`)
