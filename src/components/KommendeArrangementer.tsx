import { arrangementer, type ArrangementType } from '../data/arrangementer'
import ArrangementKort from './ArrangementKort'

interface Props {
  type?: ArrangementType
  maks?: number
  tomTekst?: string
}

export default function KommendeArrangementer({
  type,
  maks,
  tomTekst = 'Ingen kommende arrangementer akkurat nå — følg med!',
}: Props) {
  const kommende = arrangementer
    .filter((a) => (type ? a.type === type : true))
    .filter((a) => new Date(a.dato) >= new Date())
    .sort((a, b) => new Date(a.dato).getTime() - new Date(b.dato).getTime())
    .slice(0, maks)

  if (kommende.length === 0) {
    return <p className="text-[#A89A90] italic">{tomTekst}</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {kommende.map((a) => (
        <ArrangementKort key={a.id} arrangement={a} />
      ))}
    </div>
  )
}
