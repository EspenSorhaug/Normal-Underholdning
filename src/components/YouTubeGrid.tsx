import { useEffect, useState } from 'react'

interface Video {
  id: string
  tittel: string
  thumbnail: string
  publisert: string
}

const CHANNEL_ID = 'UCUpIPEvM1YtKGZlUHMB15gQ'

interface Props {
  maks?: number
}

export default function YouTubeGrid({ maks = 3 }: Props) {
  const [videoer, setVideoer] = useState<Video[]>([])
  const [laster, setLaster] = useState(true)
  const [feil, setFeil] = useState(false)
  const [aktivVideo, setAktivVideo] = useState<string | null>(null)

  useEffect(() => {
    let avbrutt = false
    // Kaller nå VÅRT eget backend-API i stedet for en ekstern proxy.
    // Svaret er ferdig JSON — ingen XML-parsing i nettleseren lenger.
    fetch('/api/videos')
      .then((r) => r.json())
      .then((liste: Video[]) => {
        if (avbrutt) return
        setVideoer(liste.slice(0, maks))
      })
      .catch(() => !avbrutt && setFeil(true))
      .finally(() => !avbrutt && setLaster(false))
    return () => {
      avbrutt = true
    }
  }, [maks])

  if (laster) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: maks }).map((_, i) => (
          <div
            key={i}
            className="bg-[#5E0A1D] rounded-lg aspect-video animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (feil || videoer.length === 0) {
    return (
      <p className="text-[#A89A90]">
        Kunne ikke laste videoer akkurat nå. Besøk vår{' '}
        <a
          href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F0A500] underline hover:text-[#F7C948]"
        >
          YouTube-kanal
        </a>{' '}
        i mellomtiden.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videoer.map((v) => (
        <div
          key={v.id}
          className="bg-[#5E0A1D] rounded-lg overflow-hidden border border-[#C8102E]/20"
        >
          <div className="relative aspect-video bg-black">
            {aktivVideo === v.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                title={v.tittel}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setAktivVideo(v.id)}
                className="group absolute inset-0 w-full h-full"
                aria-label={`Spill av video: ${v.tittel}`}
              >
                <img
                  src={v.thumbnail}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-[#C8102E] group-hover:bg-[#9B0C23] rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8 ml-1"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
            )}
          </div>
          <p className="p-4 text-sm text-[#F5F5F5] line-clamp-2 min-h-[3.5rem]">
            {v.tittel}
          </p>
        </div>
      ))}
    </div>
  )
}
