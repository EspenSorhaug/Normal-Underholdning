import MerPaaVei from '../components/MerPaaVei'
import ProsjektKort from '../components/ProsjektKort'
import { prosjekter } from '../data/prosjekter'

const toppbilde = {
  fil: '/revy/Cf6p4sWI4P5.jpg',
  innlegg: 'https://www.instagram.com/p/Cf6p4sWI4P5/',
  alt: 'Fra Faux Show: tre på scenen foran pappkulisser av en by, én holder en banan i været',
}

const revyer = prosjekter.filter((p) => p.type === 'revy')

export default function Revy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
            Revy
          </span>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">
            Sketsjer, sang og billige kulisser
          </h1>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed">
            Det var med revy det hele startet. Vi skriver sketsjer og sangnumre selv,
            spiller med eget band og bygger kulissene av det vi har for hånden. Her er
            showene vi har satt opp så langt.
          </p>
        </div>

        <a
          href={toppbilde.innlegg}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-[4/3] md:aspect-square w-full overflow-hidden rounded-2xl border border-[#C8102E]/30 hover:border-[#C8102E]/70 shadow-2xl shadow-[#C8102E]/20 transition-colors"
        >
          <img
            src={toppbilde.fil}
            alt={toppbilde.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Prosjekter</h2>
        <div className="space-y-16">
          {revyer.map((p) => (
            <ProsjektKort key={p.id} prosjekt={p} />
          ))}
        </div>
      </section>

      <MerPaaVei
        tittel="Fortsettelse følger?"
        tekst="Faux-trilogien er komplett, men det betyr ikke nødvendigvis at vi har skrevet vår siste sketsj. Kanskje dukker det opp en ny revy etter hvert …"
      />
    </div>
  )
}
