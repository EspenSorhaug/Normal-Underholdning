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

const kommendeArrangementer = arrangementer
  .filter((a) => new Date(a.dato) >= new Date())
  .sort((a, b) => new Date(a.dato).getTime() - new Date(b.dato).getTime())

export default function Forside() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#2D1509] border-b border-[#C8102E]/30 py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight">
            Normal Underholdning
          </h1>
          <p className="mt-4 text-xl text-[#A89A90]">
            Impro · Revy · Musikal · AV-utleie
          </p>
          <p className="mt-6 text-[#F5F5F5]/70 text-lg max-w-lg mx-auto">
            Vi lager underholdning som overrasker, berører og får deg til å le.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/arrangementer"
              className="bg-[#C8102E] hover:bg-[#9B0C23] text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Se kommende arrangementer
            </Link>
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
      {kommendeArrangementer.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">Kommende arrangementer</h2>
          <p className="text-[#A89A90] mb-8">Kom og se oss live!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kommendeArrangementer.slice(0, 2).map((a) => (
              <ArrangementKort key={a.id} arrangement={a} />
            ))}
          </div>
        </section>
      )}

      {/* Hva vi gjør */}
      <section className="bg-[#2D1509]/50 border-y border-[#C8102E]/20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">Hva vi gjør</h2>
          <p className="text-[#A89A90] mb-10">Fire måter å oppleve Normal Underholdning.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tilbud.map(({ til, tittel, ikon, tekst }) => (
              <Link
                key={til}
                to={til}
                className="bg-[#2D1509] border border-[#C8102E]/30 hover:border-[#C8102E]/70 rounded-lg p-6 transition-colors group"
              >
                <span className="text-4xl">{ikon}</span>
                <h3 className="text-lg font-bold text-[#F0A500] mt-3 mb-2 group-hover:text-[#F7C948] transition-colors">
                  {tittel}
                </h3>
                <p className="text-[#A89A90] text-sm">{tekst}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#F5F5F5] mb-2">Siste videoer</h2>
        <p className="text-[#A89A90] mb-8">Fra vår YouTube-kanal.</p>
        <YouTubeGrid maks={3} />
        <div className="mt-8 text-center">
          <Link
            to="/video"
            className="border border-[#C8102E]/50 hover:border-[#C8102E] text-[#A89A90] hover:text-[#F5F5F5] px-6 py-3 rounded transition-colors text-sm"
          >
            Se alle videoer
          </Link>
        </div>
      </section>
    </div>
  )
}
