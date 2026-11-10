import type { Prosjekt } from '../data/prosjekter'

interface Props {
  prosjekt: Prosjekt
}

export default function ProsjektKort({ prosjekt }: Props) {
  const { tittel, undertittel, tidspunkt, sted, beskrivelse, plakat, bilder } = prosjekt
  const bildetittel = prosjekt.bildetittel ?? 'Bilder'

  // Rutenettet skal alltid gå opp: 4 kolonner når antallet passer, ellers 3.
  // De første bildene blir dobbelt så brede ved behov for å fylle hullene.
  const antall = bilder?.length ?? 0
  const fireKolonner = antall % 4 === 0
  // Med 3 kolonner: rest 2 → bilde 1 bredt, rest 1 → bilde 1 og 3 brede (hver i sin rad).
  const bredeSm = fireKolonner ? [] : [[], [0, 2], [0]][antall % 3]
  const bredMobil = (i: number) => i === 0 && antall % 2 === 1
  const bredSm = (i: number) => bredeSm.includes(i)

  const liKlasse = (i: number) =>
    [
      bredMobil(i) && 'col-span-2',
      bredSm(i) ? 'sm:col-span-2' : bredMobil(i) && 'sm:col-span-1',
    ]
      .filter(Boolean)
      .join(' ') || undefined

  const lenkeKlasse = (i: number) =>
    [
      bredMobil(i) ? 'aspect-[8/5]' : 'aspect-[4/5]',
      bredSm(i) ? 'sm:aspect-auto sm:h-full' : 'sm:aspect-[4/5]',
    ].join(' ')

  return (
    <article className="border-t border-[#C8102E]/20 pt-10">
      <div
        className={`grid grid-cols-1 gap-8 md:gap-10 items-start ${plakat ? 'md:grid-cols-[3fr_2fr]' : ''}`}
      >
        <div>
          {undertittel && (
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
              {undertittel}
            </span>
          )}
          <h3 className="text-3xl font-bold text-[#F5F5F5] mt-2">{tittel}</h3>
          <p className="text-[#A89A90] text-sm mt-2 mb-5">
            {tidspunkt} · {sted}
          </p>
          <div className="space-y-4 text-[#F5F5F5]/85 leading-relaxed">
            {beskrivelse.map((avsnitt) => (
              <p key={avsnitt}>{avsnitt}</p>
            ))}
          </div>
        </div>

        {plakat && (
          <a
            href={plakat.innlegg}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-sm mx-auto md:max-w-none overflow-hidden rounded-xl border border-[#C8102E]/30 hover:border-[#C8102E]/70 shadow-2xl shadow-[#C8102E]/20 transition-colors"
          >
            <img
              src={plakat.fil}
              alt={plakat.alt}
              loading="lazy"
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        )}
      </div>

      {bilder && bilder.length > 0 && (
        <div className="mt-10">
          <h4 className="text-lg font-semibold text-[#F5F5F5] mb-4">{bildetittel}</h4>
          <ul
            className={`grid grid-cols-2 gap-3 ${fireKolonner ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}
          >
            {bilder.map(({ fil, alt, innlegg }, i) => {
              return (
                <li key={fil} className={liKlasse(i)}>
                  <a
                    href={innlegg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block ${lenkeKlasse(i)} overflow-hidden rounded-lg border border-[#C8102E]/30 hover:border-[#C8102E]/70 transition-colors`}
                  >
                    <img
                      src={fil}
                      alt={alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </article>
  )
}
