import { Link } from 'react-router-dom'
import { arrangementer } from '../data/arrangementer'
import ArrangementKort from '../components/ArrangementKort'
import YouTubeGrid from '../components/YouTubeGrid'

const tilbud = [
  {
    til: '/impro',
    tittel: 'Impro',
    ikon: '🎭',
    tekst: 'Improvisasjonsteater der ingen vet hva som skjer — ikke engang oss.',
  },
  {
    til: '/revy',
    tittel: 'Revy',
    ikon: '🎤',
    tekst: 'Satirisk underholdning med musikk, sketsjer og mye latter.',
  },
  {
    til: '/musikal',
    tittel: 'Musikal',
    ikon: '🎵',
    tekst: 'Musikal med hjerte, humor og store følelser.',
  },
  {
    til: '/leieutstyr',
    tittel: 'Leieutstyr',
    ikon: '🎬',
    tekst: 'Lyd og lys for ditt arrangement — vi har utstyret du trenger.',
  },
]

export default function Forside() {
  const kommende = arrangementer
    .filter((a) => new Date(a.dato) >= new Date())
    .sort((a, b) => new Date(a.dato).getTime() - new Date(b.dato).getTime())

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#2D1509] to-[#1A0A05] border-b border-[#C8102E]/30 py-20 px-4 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative">
          <img
            src="/logo.jpg"
            alt="Normal Underholdning logo"
            className="mx-auto w-40 h-40 sm:w-56 sm:h-56 rounded-2xl shadow-2xl shadow-[#C8102E]/30 mb-8 object-cover"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight">
            Normal Underholdning
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#F0A500] uppercase tracking-widest">
            Impro · Revy · Musikal · AV-utleie
          </p>
          <p className="mt-6 text-[#F5F5F5]/80 text-base sm:text-lg max-w-xl mx-auto">
            Vi lager underholdning som overrasker, berører og får deg til å le.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#kommende"
              className="bg-[#C8102E] hover:bg-[#9B0C23] text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Kommende arrangementer
            </a>
            <Link
              to="/hvem-er-vi"
              className="border border-[#F0A500] text-[#F0A500] hover:bg-[#F0A500]/10 font-semibold px-6 py-3 rounded transition-colors"
            >
              Hvem er vi?
            </Link>
          </div>
        </div>
      </section>

      {/* Kommende arrangementer */}
      {kommende.length > 0 && (
        <section
          id="kommende"
          className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20"
        >
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold text-[#F5F5F5]">
                Kommende arrangementer
              </h2>
              <p className="text-[#A89A90] mt-2">Kom og se oss live!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kommende.slice(0, 2).map((a) => (
              <ArrangementKort key={a.id} arrangement={a} />
            ))}
          </div>
        </section>
      )}

      {/* Hva vi gjør */}
      <section className="bg-[#2D1509]/40 border-y border-[#C8102E]/20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">Hva vi gjør</h2>
          <p className="text-[#A89A90] mb-10">
            Fire måter å oppleve Normal Underholdning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tilbud.map(({ til, tittel, ikon, tekst }) => (
              <Link
                key={til}
                to={til}
                className="bg-[#2D1509] border border-[#C8102E]/30 hover:border-[#C8102E]/70 rounded-lg p-6 transition-colors group"
              >
                <span className="text-4xl block">{ikon}</span>
                <h3 className="text-lg font-bold text-[#F0A500] mt-3 mb-2 group-hover:text-[#F7C948] transition-colors">
                  {tittel}
                </h3>
                <p className="text-[#A89A90] text-sm leading-relaxed">{tekst}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Siste videoer */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-[#F5F5F5]">Siste videoer</h2>
            <p className="text-[#A89A90] mt-2">Klikk for å spille av direkte her.</p>
          </div>
          <Link
            to="/video"
            className="text-[#F0A500] hover:text-[#F7C948] text-sm font-semibold"
          >
            Se alle →
          </Link>
        </div>
        <YouTubeGrid maks={3} />
      </section>
    </div>
  )
}
