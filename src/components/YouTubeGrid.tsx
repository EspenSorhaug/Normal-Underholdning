import { useEffect, useState } from 'react'

interface Video {
  id: string
  tittel: string
  thumbnail: string
  publisert: string
}

const CHANNEL_ID = 'UCUpIPEvM1YtKGZlUHMB15gQ'
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
const CORS_PROXY = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`

function parseRSS(xml: string): Video[] {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'application/xml')
  const entries = Array.from(doc.querySelectorAll('entry'))
  return entries.map((entry) => {
    const videoId = entry.querySelector('videoId')?.textContent ?? ''
    return {
      id: videoId,
      tittel: entry.querySelector('title')?.textContent ?? '',
      thumbnail: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      publisert: entry.querySelector('published')?.textContent ?? '',
    }
  })
}

interface Props {
  maks?: number
}

export default function YouTubeGrid({ maks = 3 }: Props) {
  const [videoer, setVideoer] = useState<Video[]>([])
  const [laster, setLaster] = useState(true)
  const [feil, setFeil] = useState(false)

  useEffect(() => {
    fetch(CORS_PROXY)
      .then((r) => r.json())
      .then((data) => {
        const videoer = parseRSS(data.contents)
        setVideoer(videoer.slice(0, maks))
      })
      .catch(() => setFeil(true))
      .finally(() => setLaster(false))
  }, [maks])

  if (laster) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: maks }).map((_, i) => (
          <div key={i} className="bg-[#2D1509] rounded-lg aspect-video animate-pulse" />
        ))}
      </div>
    )
  }

  if (feil || videoer.length === 0) {
    return (
      <p className="text-[#A89A90] text-sm">Kunne ikke laste videoer. Besøk vår{' '}
        <a
          href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F0A500] underline"
        >
          YouTube-kanal
        </a>.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoer.map((v) => (
        <a
          key={v.id}
          href={`https://www.youtube.com/watch?v=${v.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#2D1509] rounded-lg overflow-hidden border border-[#C8102E]/20 hover:border-[#C8102E]/60 transition-colors"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={v.thumbnail}
              alt={v.tittel}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#C8102E]/90 rounded-full w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="p-3 text-sm text-[#F5F5F5] line-clamp-2">{v.tittel}</p>
        </a>
      ))}
    </div>
  )
}
