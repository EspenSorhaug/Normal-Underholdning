export type ArrangementType = 'impro' | 'revy' | 'musikal' | 'annet'

export interface Arrangement {
  id: string
  tittel: string
  type: ArrangementType
  dato: string
  sted: string
  beskrivelse: string
  billetlenke?: string
  facebookEvent?: string
}

export const arrangementer: Arrangement[] = [
  {
    id: 'improshow-2026',
    tittel: 'Improshow med Normal Underholdning',
    type: 'impro',
    dato: '2026-05-31T19:00:00',
    sted: 'Oslo',
    beskrivelse:
      'Bli med på et improvisasjonsteatershow der ingen vet hva som skjer — ikke engang oss!',
    facebookEvent: 'https://fb.me/e/1XA6d794Tc',
  },
]
