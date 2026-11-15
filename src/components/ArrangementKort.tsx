import { Link } from 'react-router-dom'
import type { Arrangement } from '../data/arrangementer'
import { toppbilder } from '../data/toppbilder'
import Bilde from './Bilde'

interface Props {
  arrangement: Arrangement
  /** Gjør hele kortet klikkbart og sender til siden for arrangementets kategori. */
  lenkTilKategori?: boolean
}

const kategoriside: Partial<Record<Arrangement['type'], string>> = {
  impro: '/impro',
  revy: '/revy',
  musikal: '/musikal',
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

export default function ArrangementKort({ arrangement, lenkTilKategori = false }: Props) {
  // Eget bilde på arrangementet hvis det finnes, ellers toppbildet fra kategorisiden.
  const bilde = arrangement.bilde ?? toppbilder[arrangement.type]
  const lenke = lenkTilKategori ? kategoriside[arrangement.type] : undefined

  return (
    <article
      className={`relative bg-[#5E0A1D] border border-[#C8102E]/30 rounded-lg overflow-hidden flex flex-col sm:flex-row ${
        lenke ? 'group hover:border-[#C8102E]/70 transition-colors' : ''
      }`}
    >
      {lenke && (
        // Lenken dekker hele kortet. Knappene for billett og Facebook ligger over
        // den (z-20), så de fortsatt kan klikkes hver for seg.
        <Link
          to={lenke}
          className="absolute inset-0 z-10"
          aria-label={`${arrangement.tittel}: les mer om ${typeEtikett[arrangement.type].toLowerCase()}`}
        />
      )}
      {bilde && (
        <div className="relative aspect-[16/9] sm:aspect-auto sm:w-2/5 shrink-0 sm:order-last">
          <Bilde
            src={bilde.fil}
            alt={bilde.alt}
            sizes="(min-width: 640px) 40vw, 100vw"
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#F0A500] bg-[#F0A500]/10 px-2 py-1 rounded">
            {typeEtikett[arrangement.type]}
          </span>
          <h3 className="text-xl font-bold text-[#F5F5F5] mt-3 group-hover:text-[#F7C948] transition-colors">
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

        <div className="relative z-20 flex flex-wrap gap-3 mt-auto pt-2">
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
    </article>
  )
}
