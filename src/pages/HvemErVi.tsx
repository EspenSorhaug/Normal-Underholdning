import { Link } from 'react-router-dom'
import Bilde from '../components/Bilde'

const ig = (id: string) => `https://www.instagram.com/p/${id}/`

const toppbilde = {
  fil: '/hvem-er-vi/blomster.jpg',
  alt: 'To med blomster midt på scenen, omgitt av en jublende gjeng etter Faux Show i juli 2022',
}

const tidslinje = [
  {
    år: '2021',
    tittel: 'Normal Underholdning blir til',
    tekst:
      'Espen Sørhaug og Christian Ziegenhahn Jensen møttes i Abakusrevyen, linjeforeningsrevyen for Datateknologi og Kommunikasjonsteknologi ved NTNU. Revylysten ble med dem til Oslo, og i 2021 startet de sitt eget.',
  },
  {
    år: '2022',
    tittel: 'Standup og første sommershow',
    tekst:
      'Vi testet ut standup både våren og julen 2022, og i juli kom Faux Show på Langhuset på SALT, med billige kulisser og stor entusiasme.',
    lenke: '/revy',
  },
  {
    år: '2023',
    tittel: 'Faux Love og NM i revy',
    tekst:
      'Etter den første revyen var vi så fremoverlente at vi meldte på numre til NM i revy, og fikk opptre i semifinalen på Høylandet foran 700 publikummere.',
    lenke: '/revy',
  },
  {
    år: '2024',
    tittel: 'Trilogien er komplett',
    tekst: 'Fauxfatter avsluttet Faux-trilogien med historiefortelling som tema.',
    lenke: '/revy',
  },
  {
    år: '2025',
    tittel: 'Første improshow og første musikal',
    tekst:
      'I mars hadde vi vårt første improshow, og i juni kom The Peak: egenskrevet og egenkomponert, fra første table read til premiere på SALT.',
    lenke: '/musikal',
  },
  {
    år: '2026',
    tittel: 'Aldri Beredt ser dagens lys',
    tekst:
      'I juni lanserte vi improgruppa Aldri Beredt, og nå spiller vi langformat improshow både på SALT og Chateau Neuf.',
    lenke: '/impro',
  },
]

const historieBilder: { fil: string; alt: string; tekst: string; innlegg?: string }[] = [
  {
    fil: '/hvem-er-vi/standup.jpg',
    alt: 'To står med mikrofoner foran en skjerm med Faux Show-plakaten, én av dem med gitar',
    tekst: 'Standup, våren 2022',
  },
  {
    fil: '/hvem-er-vi/standup-2.jpg',
    alt: 'To på en liten scene, én med ukulele og én sittende på en barkrakk, begge med mikrofon',
    tekst: 'Standup, julen 2022',
  },
  {
    fil: '/hvem-er-vi/CubxzoXt9u1.jpg',
    alt: 'Fire fra gjengen tar en glad selfie foran sirkusteltet på Høylandet under NM i revy',
    innlegg: ig('CubxzoXt9u1'),
    tekst: 'NM i revy, Høylandet 2023',
  },
]

const hvaViGjør = [
  {
    til: '/revy',
    navn: 'Revy',
    tekst: 'Sketsjer, sang og billige kulisser.',
    fil: '/hvem-er-vi/Cf6klboo_jU.jpg',
    alt: 'To skuespillere på scenen i Faux Show, den ene med blå parykk, under skjermteksten «Blått fjes, blå føtter, blå blazer»',
  },
  {
    til: '/impro',
    navn: 'Impro',
    tekst: 'Ingen manus, bare et show som blir til der og da.',
    fil: '/hvem-er-vi/DTJErQADMo7.jpg',
    alt: 'Improgjengen poserer dramatisk på et teppe foran et mørkeblått sceneteppe',
  },
  {
    til: '/musikal',
    navn: 'Musikal',
    tekst: 'Egne historier og egen musikk.',
    fil: '/musikal/DK42yQECrqI-1.jpg',
    alt: 'Ensemblet fra The Peak i kostymer tar en glad selfie bak scenen',
  },
  {
    til: '/kameraleie',
    navn: 'Kameraleie',
    tekst: 'Lei riggen vi selv filmer med.',
    fil: '/kameraleie/rigg-front.jpg',
    alt: 'Sony-kamera i rigg med Sigma-objektiv, XLR-mikrofon og Atomos-monitor',
  },
]

export default function HvemErVi() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
            Hvem er vi
          </span>
          <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">
            Fra studentrevy til egen scene
          </h1>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed">
            Normal Underholdning er en Oslo-gjeng som lager revy, musikal og impro, fordi
            det er det morsomste vi vet. Vi skriver, komponerer og bygger det meste selv.
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
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-8">Veien hit</h2>
        <ol className="relative border-l border-[#C8102E]/40 ml-3 space-y-8">
          {tidslinje.map(({ år, tittel, tekst, lenke }) => (
            <li key={år} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#F0A500] ring-4 ring-[#F0A500]/15" />
              <span className="text-sm font-semibold text-[#F0A500]">{år}</span>
              <h3 className="text-lg font-bold text-[#F5F5F5] mt-1">
                {lenke ? (
                  <Link to={lenke} className="hover:text-[#F7C948] transition-colors">
                    {tittel}
                  </Link>
                ) : (
                  tittel
                )}
              </h3>
              <p className="text-[#F5F5F5]/85 leading-relaxed mt-1">{tekst}</p>
            </li>
          ))}
        </ol>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {historieBilder.map(({ fil, alt, innlegg, tekst }) => {
            const bilde = (
              <Bilde
                src={fil}
                alt={alt}
                sizes="(min-width: 640px) 290px, 100vw"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            )
            const ramme =
              'relative block aspect-[4/3] overflow-hidden rounded-lg border border-[#C8102E]/30'
            return (
              <li key={fil}>
                {innlegg ? (
                  <a
                    href={innlegg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ramme} hover:border-[#C8102E]/70 transition-colors`}
                  >
                    {bilde}
                  </a>
                ) : (
                  <div className={ramme}>{bilde}</div>
                )}
                <p className="text-[#A89A90] text-sm mt-2">{tekst}</p>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-4">Mer enn to</h2>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed">
            Det startet med to, men i dag er Normal Underholdning et fellesskap av flinke
            folk som skriver, spiller, synger, bygger kulisser og har det gøy sammen.
          </p>
          <p className="text-[#F5F5F5]/85 text-lg leading-relaxed mt-4">
            Har du lyst til å være med?{' '}
            <Link
              to="/kontakt"
              className="text-[#F0A500] hover:text-[#F7C948] font-semibold"
            >
              Ta kontakt
            </Link>
            .
          </p>
        </div>
        <a
          href={ig('DGsciIliITC')}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#C8102E]/30 hover:border-[#C8102E]/70 transition-colors"
        >
          <Bilde
            src="/hvem-er-vi/DGsciIliITC.jpg"
            alt="En stor gjeng samlet i en stue til kickoff for årets sommershow"
            sizes="(min-width: 768px) 340px, 100vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Hva vi gjør</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {hvaViGjør.map(({ til, navn, tekst, fil, alt }) => (
            <li key={til}>
              <Link
                to={til}
                className="group block h-full overflow-hidden rounded-lg border border-[#C8102E]/30 hover:border-[#C8102E]/70 bg-[#5E0A1D] transition-colors"
              >
                <div className="aspect-[4/3] sm:aspect-square overflow-hidden">
                  <Bilde
                    src={fil}
                    alt={alt}
                    sizes="(min-width: 768px) 210px, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#F7C948] transition-colors">
                    {navn} →
                  </h3>
                  <p className="text-[#A89A90] text-sm mt-1">{tekst}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
