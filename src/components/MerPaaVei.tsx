const instagram = 'https://www.instagram.com/normalunderholdning/'

interface Props {
  tittel: string
  tekst: string
}

export default function MerPaaVei({ tittel, tekst }: Props) {
  return (
    <section className="mt-16 rounded-lg border border-dashed border-[#F0A500]/40 p-6 text-center">
      <h2 className="text-xl font-bold text-[#F5F5F5]">{tittel}</h2>
      <p className="text-[#A89A90] mt-2">
        {tekst} Følg med på{' '}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F0A500] hover:text-[#F7C948] font-semibold"
        >
          @normalunderholdning
        </a>{' '}
        for å få det med deg først.
      </p>
    </section>
  )
}
