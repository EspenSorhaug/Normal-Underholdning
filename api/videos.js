// api/videos.js — Trinn 4: backend-en som en Vercel serverless-funksjon.
//
// Vercel kjører automatisk hver fil i /api-mappen som sin egen funksjon.
// Filen api/videos.js blir tilgjengelig på URL-en /api/videos i produksjon.
// Dette er samme logikk som i server.js, men tilpasset serverless-modellen.

const CHANNEL_ID = 'UCUpIPEvM1YtKGZlUHMB15gQ'
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

// Samme RSS → JSON-parsing som i server.js.
function parseRSS(xml) {
  const entries = xml.split('<entry>').slice(1)
  return entries
    .map((entry) => {
      const hentUt = (tag) => entry.match(new RegExp(`<${tag}>(.*?)</${tag}>`))?.[1] ?? ''
      const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] ?? ''
      return {
        id,
        tittel: hentUt('title'),
        publisert: hentUt('published'),
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      }
    })
    .filter((v) => v.id)
}

// Vercel kaller denne funksjonen for hver request til /api/videos.
export default async function handler(req, res) {
  try {
    const svar = await fetch(RSS_URL)
    const xml = await svar.text()
    const videoer = parseRSS(xml)

    // VIKTIG forskjell fra server.js:
    // I serverless kan vi ikke stole på en cache-variabel i minnet — hver request
    // kan treffe en ny, "kald" instans uten minne fra forrige gang. I stedet ber vi
    // Vercel sitt CDN om å mellomlagre svaret med en HTTP-header:
    //   s-maxage=600        → CDN cacher i 10 min
    //   stale-while-revalidate → server gammelt svar mens nytt hentes i bakgrunnen
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=300')
    res.status(200).json(videoer)
  } catch (feil) {
    console.error('Klarte ikke hente videoer:', feil)
    res.status(502).json({ feil: 'Kunne ikke hente videoer fra YouTube' })
  }
}
