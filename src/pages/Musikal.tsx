import MerPaaVei from '../components/MerPaaVei'
import ProsjektKort from '../components/ProsjektKort'
import { prosjekter } from '../data/prosjekter'

const toppbilde = {
  fil: '/musikal/DKho7e3Cr2Y-1.jpg',
  innlegg: 'https://www.instagram.com/p/DKho7e3Cr2Y/',
  alt: 'Fra premieren på The Peak: skuespillerne på scenen i lilla lys under teksten «Så bli med til hotell the peak»',
}

const musikaler = prosjekter.filter((p) => p.type === 'musikal')

export default function Musikal() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
            Musikal
          </span>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">
            Egne historier, egen musikk
          </h1>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed">
            Vi lager musikaler fra bunnen av. Manus, sangtekster og musikk er skrevet og
            komponert av oss selv, og alt settes opp med liveband, store følelser og
            mye humor.
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
          {musikaler.map((p) => (
            <ProsjektKort key={p.id} prosjekt={p} />
          ))}
        </div>
      </section>

      <MerPaaVei tittel="Neste musikal?" tekst="Vi har allerede nye idéer på gang." />
    </div>
  )
}
