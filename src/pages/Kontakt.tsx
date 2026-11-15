const EPOST = 'espen.sorhaug@gmail.com'
const YOUTUBE = 'https://www.youtube.com/channel/UCUpIPEvM1YtKGZlUHMB15gQ'
const INSTAGRAM_DM = 'https://ig.me/m/normalunderholdning'

const epostLenke = (emne?: string) =>
  `mailto:${EPOST}${emne ? `?subject=${encodeURIComponent(emne)}` : ''}`

const grunner = [
  {
    tittel: 'Booke et show',
    tekst: 'Revy, impro eller musikalnumre til firmafesten, jubileet eller lanseringen.',
    emne: 'Booking av show',
  },
  {
    tittel: 'Bli med i gjengen',
    tekst: 'Liker du å skrive, spille, synge eller bygge kulisser? Vi har alltid plass til flere.',
    emne: 'Jeg vil være med!',
  },
  {
    tittel: 'Leie kamerautstyr',
    tekst: 'Trenger du kamera til et prosjekt eller arrangement? Si hva du trenger og når.',
    emne: 'Forespørsel om kameraleie',
  },
]

const sosiale = [
  { navn: 'Instagram', handle: '@normalunderholdning', url: 'https://www.instagram.com/normalunderholdning/' },
  { navn: 'Instagram', handle: '@aldriberedt', url: 'https://www.instagram.com/aldriberedt/' },
  { navn: 'Facebook', handle: 'Normal Underholdning', url: 'https://www.facebook.com/normalunderholdning' },
  { navn: 'YouTube', handle: 'Normal Underholdning', url: YOUTUBE },
]

export default function Kontakt() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#F0A500]">
        Kontakt
      </span>
      <h1 className="text-4xl font-bold text-[#F5F5F5] mt-2 mb-4">Si hei!</h1>
      <p className="text-[#F5F5F5]/85 text-lg leading-relaxed max-w-2xl">
        Vil du booke et show, bli med på neste produksjon eller låne utstyr? Send oss en
        DM på Instagram eller en e-post, så svarer vi så fort vi kan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-10 mt-12 items-start">
        <section>
          <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6">Hva kan vi hjelpe med?</h2>
          <ul className="space-y-4">
            {grunner.map(({ tittel, tekst, emne }) => (
              <li key={tittel}>
                <a
                  href={epostLenke(emne)}
                  className="group block bg-[#5E0A1D] border border-[#C8102E]/30 hover:border-[#C8102E]/70 rounded-lg p-5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#F7C948] transition-colors">
                    {tittel} →
                  </h3>
                  <p className="text-[#A89A90] text-sm mt-1">{tekst}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <aside className="bg-[#5E0A1D] border border-[#F0A500]/40 rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5]">Slå av en prat</h2>
          <p className="text-[#A89A90] text-sm mt-2">
            Send oss en DM på Instagram eller en e-post, det som passer deg best.
          </p>
          <a
            href={INSTAGRAM_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block w-full text-center bg-[#C8102E] hover:bg-[#9B0C23] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Send oss en DM
          </a>
          <a
            href={epostLenke()}
            className="mt-3 block w-full text-center border border-[#F0A500] text-[#F0A500] hover:bg-[#F0A500]/10 font-semibold py-3 rounded-lg transition-colors"
          >
            Send e-post
          </a>

          <h2 className="text-lg font-bold text-[#F5F5F5] mt-8 mb-3">Følg oss</h2>
          <ul className="space-y-2">
            {sosiale.map(({ navn, handle, url }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-3 text-sm group"
                >
                  <span className="text-[#A89A90]">{navn}</span>
                  <span className="text-[#F0A500] group-hover:text-[#F7C948] font-semibold">
                    {handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}
