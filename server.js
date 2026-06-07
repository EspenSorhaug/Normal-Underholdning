// server.js — Trinn 1: en enkel Node.js-server med KUN innebygde moduler.
//
// Mål: forstå hva en server egentlig er — en funksjon som får en request (req)
// og skriver et svar (res). Ingen rammeverk, ingen npm-pakker.
//
// Kjør den med:   node --watch server.js
// (--watch starter serveren på nytt automatisk når du lagrer filen)

import { createServer } from 'node:http'

const PORT = 3001
const CHANNEL_ID = 'UCUpIPEvM1YtKGZlUHMB15gQ'
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

// --- Trinn 2: caching --------------------------------------------------------
// Problemet: uten cache spør vi YouTube på NYTT ved hvert eneste besøk. Det er
// tregt og unødvendig — videolista endrer seg sjelden. Løsningen: vi husker
// (mellomlagrer) svaret i minnet en stund, og gjenbruker det.
const CACHE_TID_MS = 10 * 60 * 1000 // 10 minutter
let cache = { data: null, lagretTidspunkt: 0 }

// --- Hjelpefunksjon: gjør om YouTube sin RSS (XML) til ren JSON ---------------
// RSS-feeden er en lang XML-tekst. Hvert videoinnslag ligger i en <entry>...</entry>.
// I nettleseren brukte vi DOMParser, men den finnes ikke i Node. Siden formatet er
// enkelt og forutsigbart, plukker vi ut feltene med små regulære uttrykk (regex).
function parseRSS(xml) {
  // Del teksten opp i én streng per <entry>.
  const entries = xml.split('<entry>').slice(1) // .slice(1): første bit er header, ikke en video

  return entries.map((entry) => {
    // hentUt('title') leter etter <title>...</title> og returnerer innholdet.
    const hentUt = (tag) => entry.match(new RegExp(`<${tag}>(.*?)</${tag}>`))?.[1] ?? ''
    const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? ''

    return {
      id,
      tittel: hentUt('title'),
      publisert: hentUt('published'),
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    }
  }).filter((v) => v.id) // kast bort eventuelle innslag uten video-id
}

// --- Selve serveren ----------------------------------------------------------
// Funksjonen under kjøres ÉN gang per innkommende forespørsel.
const server = createServer(async (req, res) => {
  // Logg hver request så du ser trafikken i terminalen.
  console.log(`${req.method} ${req.url}`)

  // Enkel "ruting": vi sjekker bare URL-en manuelt.
  if (req.url === '/api/videos') {
    try {
      // Er det vi har i cachen fortsatt ferskt nok?
      const alder = Date.now() - cache.lagretTidspunkt
      const ferskt = cache.data && alder < CACHE_TID_MS

      if (ferskt) {
        // CACHE-TREFF: vi svarer fra minnet uten å spørre YouTube i det hele tatt.
        console.log(`  ↳ cache-treff (${Math.round(alder / 1000)}s gammelt)`)
      } else {
        // CACHE-BOM: ingen (eller utdatert) data — vi henter på nytt og lagrer.
        console.log('  ↳ cache-bom — henter fra YouTube ...')
        const svar = await fetch(RSS_URL)
        const xml = await svar.text()
        cache = { data: parseRSS(xml), lagretTidspunkt: Date.now() }
      }

      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify(cache.data, null, 2))
    } catch (feil) {
      // Hva skjer hvis YouTube er nede? Vi svarer med en feilkode i stedet for å krasje.
      console.error('Klarte ikke hente videoer:', feil)
      res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify({ feil: 'Kunne ikke hente videoer fra YouTube' }))
    }
    return
  }

  // Alle andre URL-er: en liten forside så du ser at serveren lever.
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end('<h1>NU backend</h1><p>Prøv <a href="/api/videos">/api/videos</a></p>')
})

server.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`)
  console.log(`Test API-et: http://localhost:${PORT}/api/videos`)
})
