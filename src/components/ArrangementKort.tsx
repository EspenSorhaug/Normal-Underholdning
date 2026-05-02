import type { Arrangement } from '../data/arrangementer'

interface Props {
  arrangement: Arrangement
}

function formatDato(isoString: string): string {
  const dato = new Date(isoString)
  return dato.toLocaleDateString('nb-NO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const typeEtikett: Record<string, string> = {
  impro: 'Impro',
  revy: 'Revy',
  musikal: 'Musikal',
  annet: 'Arrangement',
}

export default function ArrangementKort({ arrangement }: Props) {
  return (
    <div className="bg-[#2D1509] border border-[#C8102E]/30 rounded-lg p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
            {typeEtikett[arrangement.type]}
          </span>
          <h3 className="text-xl font-bold text-[#F5F5F5] mt-1">{arrangement.tittel}</h3>
        </div>
      </div>
      <div className="text-[#A89A90] text-sm space-y-1">
        <p>📅 {formatDato(arrangement.dato)}</p>
        <p>📍 {arrangement.sted}</p>
      </div>
      <p className="text-[#F5F5F5]/80 text-sm">{arrangement.beskrivelse}</p>
      <div className="flex flex-wrap gap-3 mt-auto pt-2">
        {arrangement.billetlenke && (
          <a
            href={arrangement.billetlenke}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8102E] hover:bg-[#9B0C23] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            Kjøp billett
          </a>
        )}
        {arrangement.facebookEvent && (
          <a
            href={arrangement.facebookEvent}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#F0A500] text-[#F0A500] hover:bg-[#F0A500]/10 text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            Facebook-event
          </a>
        )}
      </div>
    </div>
  )
}
