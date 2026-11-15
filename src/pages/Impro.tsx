import KommendeArrangementer from '../components/KommendeArrangementer'
import Bilde from '../components/Bilde'
import { toppbilder } from '../data/toppbilder'

const instagram = 'https://www.instagram.com/aldriberedt/'

const sisteInnlegg = toppbilder.impro!

const retning = [
  {
    fil: '/impro/DFAaxCfC5pz-1.jpg',
    innlegg: 'https://www.instagram.com/p/DFAaxCfC5pz/',
    alt: 'Juleglad gjeng i nisseluer og julegensere, én holder opp How to Be the Greatest Improviser on Earth',
    tekst: 'Høsten 2024: Kickstartet improkarrieren med Will Hines som guide',
  },
  {
    fil: '/impro/DHnIorRCvmF.jpg',
    innlegg: 'https://www.instagram.com/p/DHnIorRCvmF/',
    alt: 'Gjengen samlet rundt én som leser i Comedy Improv Manual fra Upright Citizens Brigade',
    tekst: 'Våren 2025: UCB-manualen ble en slags bibel på veien mot første show',
  },
]

const bilder = [
  {
    fil: '/impro/Dfkd8L8ihv3-2.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/Dfkd8L8ihv3/?img_index=2',
    alt: 'Scene fra en forestilling: én ligger på gulvet og ler mens en annen bøyer seg over, to sitter på stoler og ser på',
  },
  {
    fil: '/impro/Dfkd8L8ihv3-3.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/Dfkd8L8ihv3/?img_index=3',
    alt: 'Pianisten ved keyboardet på scenen, med en spiller lent fremover i bakgrunnen',
  },
  {
    fil: '/impro/DZp0oxhKVvT.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/DZp0oxhKVvT/',
    alt: 'Aldri Beredt samlet på en parkbenk foran en syrinbusk, alle med fingrene formet som briller',
  },
  {
    fil: '/impro/DZk9dscKK7Z.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/DZk9dscKK7Z/',
    alt: 'Aldri Beredt i en tett, tullete gruppepose foran et rødt sceneteppe',
  },
  {
    fil: '/impro/DfKfe1LNX8d.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/DfKfe1LNX8d/',
    alt: 'Aldri Beredt i svarte t-skjorter og fargerike skjerf poserer lekent i en park',
  },
  {
    fil: '/impro/DHjT-RnCp6S-1.jpg',
    innlegg: 'https://www.instagram.com/p/DHjT-RnCp6S/',
    alt: 'Tre hoder stikker ut gjennom et grønt sceneteppe',
  },
  {
    fil: '/impro/DHjT-RnCp6S-4.jpg',
    innlegg: 'https://www.instagram.com/p/DHjT-RnCp6S/?img_index=4',
    alt: 'Improscene i rødt lys med fire spillere på gulvet',
  },
  {
    fil: '/impro/DHjT-RnCp6S-5.jpg',
    innlegg: 'https://www.instagram.com/p/DHjT-RnCp6S/?img_index=5',
    alt: 'Pianisten spiller på et keyboard ved siden av scenen',
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
            Aldri Beredt
          </h1>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed mb-6">
            Aldri Beredt er improgruppa som setter opp langformat impro i Oslo. Én
            kveld, ingen manus — bare et forrykende show som blir til der og da, sammen med
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
          <Bilde
            src={sisteInnlegg.fil}
            alt={sisteInnlegg.alt}
            sizes="(min-width: 768px) 340px, 100vw"
            prioritet
            className="w-full h-full object-cover object-[center_30%] hover:scale-105 transition-transform duration-300"
          />
        </a>
      </section>

      <section className="mt-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
          Vår retning
        </span>
        <h2 className="text-2xl font-bold text-[#F5F5F5] mt-2 mb-4">
          Langformat, etter amerikansk skole
        </h2>
        <div className="space-y-4 text-[#F5F5F5]/85 text-lg leading-relaxed">
          <p>
            Etter tre revyer i Faux-trilogien ville vi prøve noe nytt. Improkarrieren vår
            startet høsten 2024 med Will Hines sin <em>How to Be the Greatest Improviser on
            Earth</em>. Utover våren jobbet vi oss videre gjennom Upright Citizens Brigade sin{' '}
            <em>Comedy Improv Manual</em>, og i mars 2025 satte vi opp vårt første langformat
            improshow på SALT.
          </p>
          <p>
            I langformat er ikke showet en rekke korte leker, men lengre scener som bygger
            på hverandre og vokser til en hel forestilling. Vi vet ikke hva det handler om
            før vi står der. Hvorfor skrive, diskutere, revidere og øve inn sketsjer, når man
            bare kan gå på scenen og være morsom uten å ha forberedt noe?
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {retning.map(({ fil, innlegg, alt, tekst }) => (
            <li key={fil}>
              <a
                href={innlegg}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-[#C8102E]/30 hover:border-[#C8102E]/70 transition-colors"
              >
                <Bilde
                  src={fil}
                  alt={alt}
                  sizes="(min-width: 640px) 430px, 100vw"
                  className="absolute inset-0 w-full h-full object-cover object-[center_35%] hover:scale-105 transition-transform duration-300"
                />
              </a>
              <p className="text-[#A89A90] text-sm mt-2">{tekst}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Neste show</h2>
        <KommendeArrangementer type="impro" />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Bilder</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {bilder.map(({ fil, innlegg, alt }, i) => {
            // Første bilde er bredt. Med et partall bilder blir også det siste bredt
            // på mobil (2 kolonner), så rutenettet går opp der også.
            const først = i === 0
            const sistBredMobil = i === bilder.length - 1 && bilder.length % 2 === 0
            return (
              <li
                key={fil}
                className={først ? 'col-span-2' : sistBredMobil ? 'col-span-2 sm:col-span-1' : undefined}
              >
                <a
                  href={innlegg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block ${
                    først
                      ? 'aspect-[8/5] sm:aspect-auto sm:h-full'
                      : sistBredMobil
                        ? 'aspect-[8/5] sm:aspect-[4/5]'
                        : 'aspect-[4/5]'
                  } overflow-hidden rounded-lg border border-[#C8102E]/30 hover:border-[#C8102E]/70 transition-colors`}
                >
                  <Bilde
                    src={fil}
                    alt={alt}
                    sizes={
                      først
                        ? '(min-width: 640px) 580px, 100vw'
                        : `(min-width: 640px) 290px, ${sistBredMobil ? '100vw' : '50vw'}`
                    }
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </li>
            )
          })}
        </ul>
        <p className="text-[#A89A90] text-sm mt-4">
          Flere bilder og klipp på{' '}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0A500] hover:text-[#F7C948] font-semibold"
          >
            @aldriberedt
          </a>
        </p>
      </section>
    </div>
  )
}
