import YouTubeGrid from '../components/YouTubeGrid'

const CHANNEL_ID = 'UCUpIPEvM1YtKGZlUHMB15gQ'

export default function Video() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#F5F5F5] mb-2">Video</h1>
      <p className="text-[#A89A90] text-lg mb-10">
        Siste videoer fra vår{' '}
        <a
          href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F0A500] hover:underline"
        >
          YouTube-kanal
        </a>.
      </p>
      <YouTubeGrid maks={12} />
    </div>
  )
}
