import type { Arrangement } from '../data/arrangementer'

interface Props {
  arrangement: Arrangement
}

const typeEtikett: Record<Arrangement['type'], string> = {
  impro: 'Impro',
  revy: 'Revy',
  musikal: 'Musikal',
  annet: 'Arrangement',
}

function formatDato(isoString: string): string {
  const dato = new Date(isoString)
  return dato.toLocaleDateString('nb-NO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function ArrangementKort({ arrangement }: Props) {
  return (
    <article className="bg-[#2D1509] border border-[#C8102E]/30 rounded-lg p-6 flex flex-col gap-4">
      <div>
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#F0A500] bg-[#F0A500]/10 px-2 py-1 rounded">
          {typeEtikett[arrangement.type]}
        </span>
        <h3 className="text-xl font-bold text-[#F5F5F5] mt-3">
          {arrangement.tittel}
        </h3>
      </div>

      <dl className="text-[#A89A90] text-sm space-y-1">
        <div className="flex gap-2">
          <dt className="sr-only">Når</dt>
          <dd>📅 {formatDato(arrangement.dato)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="sr-only">Sted</dt>
          <dd>📍 {arrangement.sted}</dd>
        </div>
      </dl>

      <p className="text-[#F5F5F5]/85 text-sm leading-relaxed">
        {arrangement.beskrivelse}
      </p>

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
    </article>
  )
}
