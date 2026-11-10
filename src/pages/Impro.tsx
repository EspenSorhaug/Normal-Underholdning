import KommendeArrangementer from '../components/KommendeArrangementer'

const instagram = 'https://www.instagram.com/aldriberedt/'

const sisteInnlegg = {
  fil: '/impro/Dfkd8L8ihv3.jpg',
  innlegg: 'https://www.instagram.com/aldriberedt/p/Dfkd8L8ihv3/',
  alt: 'Fire medlemmer av Aldri beredt på scenen foran et mørkeblått teppe',
}

const bilder = [
  {
    fil: '/impro/DZp0oxhKVvT.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/DZp0oxhKVvT/',
    alt: 'Aldri beredt samlet på en parkbenk foran en syrinbusk, alle med fingrene formet som briller',
  },
  {
    fil: '/impro/DfKfe1LNX8d.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/DfKfe1LNX8d/',
    alt: 'Aldri beredt i svarte t-skjorter og fargerike skjerf poserer lekent i en park',
  },
  {
    fil: '/impro/DZk9dscKK7Z.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/DZk9dscKK7Z/',
    alt: 'Aldri beredt i en tett, tullete gruppepose foran et rødt sceneteppe',
  },
]

export default function Impro() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
            Improgruppa vår
          </span>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">
            Aldri beredt
          </h1>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed mb-6">
            Aldri beredt er improgruppa som setter opp langformat impro i Oslo. Én
            kveld, ingen manus — bare historier som blir til der og da, sammen med
            publikum.
          </p>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#F0A500] text-[#F0A500] hover:bg-[#F0A500]/10 text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            Følg @aldriberedt på Instagram
          </a>
        </div>

        <a
          href={sisteInnlegg.innlegg}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#C8102E]/30 hover:border-[#C8102E]/70 shadow-2xl shadow-[#C8102E]/20 transition-colors"
        >
          <img
            src={sisteInnlegg.fil}
            alt={sisteInnlegg.alt}
            className="w-full h-full object-cover object-[center_30%] hover:scale-105 transition-transform duration-300"
          />
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Neste show</h2>
        <KommendeArrangementer type="impro" />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Bilder</h2>
        <ul className="grid grid-cols-3 gap-2 sm:gap-4">
          {bilder.map(({ fil, innlegg, alt }) => (
            <li key={fil}>
              <a
                href={innlegg}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/5] overflow-hidden rounded-lg border border-[#C8102E]/30 hover:border-[#C8102E]/70 transition-colors"
              >
                <img
                  src={fil}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[#A89A90] text-sm mt-4">
          Flere bilder og klipp på{' '}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0A500] hover:text-[#F7C948] font-semibold"
          >
            Instagram
          </a>
          .
        </p>
      </section>
    </div>
  )
}
