import type { ArrangementType } from './arrangementer'

export interface Toppbilde {
  fil: string
  alt: string
  innlegg?: string
}

// Toppbildet på hver kategoriside. Brukes både øverst på siden og i
// arrangementskortene, så et arrangement automatisk får bildet fra sin kategori.
export const toppbilder: Partial<Record<ArrangementType, Toppbilde>> = {
  impro: {
    fil: '/impro/Dfkd8L8ihv3.jpg',
    innlegg: 'https://www.instagram.com/aldriberedt/p/Dfkd8L8ihv3/',
    alt: 'Fire medlemmer av Aldri Beredt på scenen foran et mørkeblått teppe',
  },
  revy: {
    fil: '/revy/Cf6p4sWI4P5.jpg',
    innlegg: 'https://www.instagram.com/p/Cf6p4sWI4P5/',
    alt: 'Fra Faux Show: tre på scenen foran pappkulisser av en by, én holder en banan i været',
  },
  musikal: {
    fil: '/musikal/DKho7e3Cr2Y-1.jpg',
    innlegg: 'https://www.instagram.com/p/DKho7e3Cr2Y/',
    alt: 'Fra premieren på The Peak: skuespillerne på scenen i lilla lys under teksten «Så bli med til hotell the peak»',
  },
}
