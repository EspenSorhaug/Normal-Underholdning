import { Link } from 'react-router-dom'
import Bilde from '../components/Bilde'

// Tom streng = kortet skjules.
const FINN_URL = 'https://www.finn.no/recommerce/forsale/item/362741385'
const HYGGLO_URL = 'https://www.hygglo.no/i/920-sony-a7siii'

const toppbilde = {
  fil: '/kameraleie/rigg-front.jpg',
  alt: 'Sony-kamera i Tilta-cage med Sigma-objektiv, XLR-mikrofon, Atomos-monitor og SmallRig-håndtak',
}

const utleiesteder = [
  {
    navn: 'FINN',
    tekst: 'Se annonsen, priser og send oss en melding på FINN.',
    url: FINN_URL,
  },
  {
    navn: 'Hygglo',
    tekst: 'Se priser, book og betal trygt via Hygglo.',
    url: HYGGLO_URL,
  },
]

const utstyr: { kategori: string; ting: { navn: string; detalj: string }[] }[] = [
  {
    kategori: 'Kamera',
    ting: [{ navn: 'Sony α7S III', detalj: 'Fullformat, 4K opptil 120p, S-Log3' }],
  },
  {
    kategori: 'Objektiv',
    ting: [
      { navn: 'Sigma 24–70mm f/2.8 DG DN Art', detalj: 'Allsidig standardzoom' },
      { navn: 'Tamron 17–28mm f/2.8 Di III RXD', detalj: 'Lyssterk vidvinkelzoom' },
    ],
  },
  {
    kategori: 'Lyd',
    ting: [
      { navn: 'Sony XLR-K3M', detalj: 'XLR-adapter med shotgun-mikrofon og vindfell' },
    ],
  },
  {
    kategori: 'Monitor',
    ting: [{ navn: 'Atomos Shinobi', detalj: '5" lyssterk HDR-monitor' }],
  },
  {
    kategori: 'Stabilisering',
    ting: [{ navn: 'DJI Ronin-S', detalj: 'Gimbal med stativben og monitorarm' }],
  },
  {
    kategori: 'Rigg og strøm',
    ting: [
      { navn: 'Tilta kamera-cage', detalj: 'Med 15 mm rods og baseplate' },
      { navn: 'SmallRig sidehåndtak', detalj: 'Med monitorfeste' },
      { navn: 'SmallRig VB99 V-mount', detalj: 'Strøm til kamera og monitor hele dagen' },
      { navn: 'NP-F-batterier', detalj: 'Til monitoren' },
    ],
  },
]

const galleri = [
  {
    fil: '/kameraleie/monitor.jpg',
    alt: 'Atomos-monitoren viser kamerabildet i S-Log3, festet på et SmallRig-håndtak',
  },
  {
    fil: '/kameraleie/gimbal.jpg',
    alt: 'Kameraet balansert på en DJI Ronin-S-gimbal med monitor og V-mount-batteri',
  },
  {
    fil: '/kameraleie/rigg-batteri.jpg',
    alt: 'Riggen sett fra siden med SmallRig V-mount-batteri og XLR-mikrofon',
  },
  {
    fil: '/kameraleie/kamera-bak.jpg',
    alt: 'Baksiden av kameraet med utfellbar skjerm og håndtak på cagen',
  },
  {
    fil: '/kameraleie/rigg-vidvinkel.jpg',
    alt: 'Riggen med vidvinkelobjektiv og solblender',
  },
  {
    fil: '/kameraleie/gimbal-monitor.jpg',
    alt: 'Nærbilde av kameraet på gimbalen med lilla HDMI-kabel til monitoren',
  },
]

const steg = [
  { tittel: 'Finn utstyret', tekst: 'Se hva vi har her, og sjekk priser på FINN eller Hygglo.' },
  { tittel: 'Book', tekst: 'All booking skjer via FINN eller Hygglo.' },
  { tittel: 'Hent og film', tekst: 'Vi viser deg hvordan alt fungerer når du henter i Oslo.' },
]

export default function Kameraleie() {
  const aktiveSteder = utleiesteder.filter((s) => s.url)

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
            Utleie
          </span>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">Kameraleie</h1>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed">
            Vi leier ut kameraet og riggen vi selv bruker på våre egne produksjoner. Perfekt
            til kortfilm, musikkvideo, innspillinger og arrangementer.
          </p>
        </div>

        <Bilde
          src={toppbilde.fil}
          alt={toppbilde.alt}
          sizes="(min-width: 768px) 500px, 100vw"
          prioritet
          className="block aspect-[6/5] w-full object-cover rounded-2xl border border-[#C8102E]/30 shadow-2xl shadow-[#C8102E]/20"
        />
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Lei hos oss</h2>
        {aktiveSteder.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aktiveSteder.map(({ navn, tekst, url }) => (
              <li key={navn}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full bg-[#5E0A1D] border border-[#C8102E]/30 hover:border-[#C8102E]/70 rounded-lg p-5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#F7C948] transition-colors">
                    Se mer på {navn} →
                  </h3>
                  <p className="text-[#A89A90] text-sm mt-1">{tekst}</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#A89A90] italic">
            ✏️ Lenker til FINN-annonsen og Hygglo legges til her.
          </p>
        )}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2">Utstyr vi tilbyr</h2>
        <p className="text-[#A89A90] mb-8">
          Lei hele riggen samlet, eller bare det du trenger. Priser finner du på FINN og
          Hygglo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {utstyr.map(({ kategori, ting }) => (
            <div
              key={kategori}
              className="bg-[#5E0A1D] border border-[#C8102E]/30 rounded-lg p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#F0A500] mb-3">
                {kategori}
              </h3>
              <ul className="space-y-3">
                {ting.map(({ navn, detalj }) => (
                  <li key={navn}>
                    <p className="font-bold text-[#F5F5F5]">{navn}</p>
                    <p className="text-[#A89A90] text-sm">{detalj}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Riggen</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleri.map(({ fil, alt }) => (
            <li
              key={fil}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#C8102E]/30"
            >
              <Bilde
                src={fil}
                alt={alt}
                sizes="(min-width: 640px) 290px, 50vw"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-8">Slik fungerer det</h2>
        <ol className="relative border-l border-[#C8102E]/40 ml-3 space-y-8">
          {steg.map(({ tittel, tekst }, i) => (
            <li key={tittel} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#F0A500] ring-4 ring-[#F0A500]/15" />
              <span className="text-sm font-semibold text-[#F0A500]">Steg {i + 1}</span>
              <h3 className="text-lg font-bold text-[#F5F5F5] mt-1">{tittel}</h3>
              <p className="text-[#F5F5F5]/85 leading-relaxed mt-1">{tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16 bg-[#5E0A1D] border border-[#C8102E]/30 rounded-lg p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#F5F5F5] mb-2">Spørsmål om utstyret?</h2>
        <p className="text-[#A89A90] mb-6">
          Lurer du på om riggen passer til prosjektet ditt? Send oss en melding, så svarer vi
          så fort vi kan. Selve bookingen gjør du på FINN eller Hygglo.
        </p>
        <Link
          to="/kontakt"
          className="inline-block bg-[#C8102E] hover:bg-[#9B0C23] text-white font-semibold px-6 py-3 rounded transition-colors"
        >
          Send oss en melding
        </Link>
      </div>
    </div>
  )
}
