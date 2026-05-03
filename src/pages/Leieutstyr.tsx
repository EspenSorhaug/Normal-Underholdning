import { Link } from 'react-router-dom'

export default function Leieutstyr() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
        AV-utstyr
      </span>
      <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">Leieutstyr</h1>
      <p className="text-[#A89A90] text-lg mb-12">
        Profesjonelt lyd- og lysutstyr til ditt arrangement.
      </p>

      <section className="space-y-6 text-[#F5F5F5]/85 text-lg leading-relaxed">
        <p>
          Vi leier ut AV-utstyr til arrangementer av alle størrelser — fra
          bursdager og firmafester til konserter og forestillinger.
        </p>
        <p>
          Ta kontakt for å sjekke tilgjengelighet og få et tilbud tilpasset ditt
          arrangement.
        </p>
      </section>

      <section className="mt-16 border-t border-[#C8102E]/20 pt-12">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">Utstyr vi tilbyr</h2>
        <p className="text-[#A89A90] italic">
          ✏️ Liste over utstyr, priser og bilder legges til her.
        </p>
      </section>

      <div className="mt-12 bg-[#2D1509] border border-[#C8102E]/30 rounded-lg p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#F5F5F5] mb-2">Interessert?</h2>
        <p className="text-[#A89A90] mb-6">
          Ta kontakt så finner vi noe som passer for ditt arrangement.
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
