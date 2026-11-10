export type ProsjektType = 'revy' | 'musikal'

export interface Bilde {
  fil: string
  alt: string
  innlegg?: string
}

export interface Prosjekt {
  id: string
  tittel: string
  type: ProsjektType
  undertittel?: string
  tidspunkt: string
  sted: string
  beskrivelse: string[]
  plakat?: Bilde
  bildetittel?: string
  bilder?: Bilde[]
}

const ig = (id: string, bilde?: number) =>
  `https://www.instagram.com/p/${id}/${bilde ? `?img_index=${bilde}` : ''}`

// Nyeste prosjekt først. Legg til nye prosjekter øverst i lista.
export const prosjekter: Prosjekt[] = [
  {
    id: 'the-peak-2025',
    tittel: 'The Peak',
    type: 'musikal',
    undertittel: 'En ny musikal',
    tidspunkt: 'Juni 2025',
    sted: 'SALT, Oslo',
    beskrivelse: [
      'Etter tre år med revy tok vi steget inn i musikalens verden. The Peak er skrevet og komponert av oss selv — manus, sangtekster og musikk er laget fra bunnen av.',
      'Historien utspiller seg på Hotell The Peak og handler om drømmer, ambisjoner og hva som skjer når du har peaka. Med humor, store følelser og et liveband.',
      'Musikalen ble spilt tre kvelder i juni på SALT, og showet gikk videre — til tross for stengetrusler, vannlekkasje i pianoet på generalprøven og en brukket arm etter premieren.',
    ],
    plakat: {
      fil: '/musikal/DJbVIKqRhTc.jpg',
      alt: 'Plakat for The Peak: et rosa grandhotell på en fjelltopp under nordlys, med teksten «Nådd livets topp? Sjekk inn hos oss!»',
      innlegg: ig('DJbVIKqRhTc'),
    },
    bildetittel: 'Fra prosessen',
    bilder: [
      {
        fil: '/musikal/DJ6TKkJCunh.jpg',
        alt: 'Gjengen samlet rundt et bord i en bakgård med laptoper under table read av første akt',
        innlegg: ig('DJ6TKkJCunh'),
      },
      {
        fil: '/musikal/DK42yQECrqI-2.jpg',
        alt: 'Tre fra kulissegjengen poserer med hammere på scenen',
        innlegg: ig('DK42yQECrqI', 2),
      },
      {
        fil: '/musikal/DK42yQECrqI-5.jpg',
        alt: 'En sitter på gulvet og maler et skilt til forestillingen',
        innlegg: ig('DK42yQECrqI', 5),
      },
      {
        fil: '/musikal/DK42yQECrqI-4.jpg',
        alt: 'Bandet øver foran scenen mens skuespillerne står på scenen bak',
        innlegg: ig('DK42yQECrqI', 4),
      },
      {
        fil: '/musikal/DK42yQECrqI-3.jpg',
        alt: 'To ved resepsjonsdisken med The Peak-logoen før forestilling',
        innlegg: ig('DK42yQECrqI', 3),
      },
      {
        fil: '/musikal/DK42yQECrqI-6.jpg',
        alt: 'Scenebilde med resepsjonsdisken til Hotell The Peak i lilla lys',
        innlegg: ig('DK42yQECrqI', 6),
      },
      {
        fil: '/musikal/DK42yQECrqI-1.jpg',
        alt: 'Ensemblet i kostymer tar en glad selfie bak scenen',
        innlegg: ig('DK42yQECrqI', 1),
      },
      {
        fil: '/musikal/DK42yQECrqI-8.jpg',
        alt: 'Skuespillerne står på rekke og tar imot applaus etter forestillingen',
        innlegg: ig('DK42yQECrqI', 8),
      },
    ],
  },
  {
    id: 'faux-fatter-2024',
    tittel: 'Faux Fatter',
    type: 'revy',
    undertittel: 'Sommershow',
    tidspunkt: 'Juni 2024',
    sted: 'SALT',
    beskrivelse: [
      'Alle gode ting er tre! Med Faux Fatter ble Faux-trilogien komplett. Showet ble spilt på SALT 10. og 11. juni 2024.',
      'Temaet var historiefortelling. Det er ikke bare oldtidens mest populære sosiale medium ved siden av hulemaling, men noe vi alle driver med hver dag. Alle er forfatter i sitt eget liv.',
    ],
    plakat: {
      fil: '/revy/C7Bn2MmiSEL.jpg',
      alt: 'Plakat for Faux Fatter: en hånd skriver med fjærpenn i en bok mens tegninger strømmer ut av sidene, på turkis bakgrunn',
      innlegg: ig('C7Bn2MmiSEL'),
    },
    bilder: [
      {
        fil: '/revy/C7xBLsriKm6-2.jpg',
        alt: 'Innspilling av en filmsnutt i en park, der skuespillerne holder opp demonstrasjonsplakater',
        innlegg: ig('C7xBLsriKm6', 2),
      },
      {
        fil: '/revy/C7-IKLpivzH-1.jpg',
        alt: 'Hele gjengen samlet til øvingsdag i et kontorlokale på Skøyen',
        innlegg: ig('C7-IKLpivzH', 1),
      },
      {
        fil: '/revy/C7-IKLpivzH-5.jpg',
        alt: 'To musikere øver på trompet og trombone',
        innlegg: ig('C7-IKLpivzH', 5),
      },
      {
        fil: '/revy/C8AlIvcin4S-1.jpg',
        alt: 'Bandet øver i rødt lys under et skråtak',
        innlegg: ig('C8AlIvcin4S', 1),
      },
      {
        fil: '/revy/C8AlIvcin4S-4.jpg',
        alt: 'Gjengen spiser lunsj sammen ute på SALT',
        innlegg: ig('C8AlIvcin4S', 4),
      },
      {
        fil: '/revy/C8FIO2CisoJ-2.jpg',
        alt: 'To fisker fra en pappbåt som heter «Doningen II», ved siden av Faux Fatter-skiltet',
        innlegg: ig('C8FIO2CisoJ', 2),
      },
      {
        fil: '/revy/C8FIO2CisoJ-1.jpg',
        alt: 'Ensemblet med fargerike fjærboaer på scenen',
        innlegg: ig('C8FIO2CisoJ', 1),
      },
      {
        fil: '/revy/C8FIO2CisoJ-4.jpg',
        alt: 'Hele ensemblet løfter ølbokser under skjermteksten «En til øl»',
        innlegg: ig('C8FIO2CisoJ', 4),
      },
      {
        fil: '/revy/C8FIO2CisoJ-5.jpg',
        alt: 'Skuespillere strekker armene i været i en sketsj, mens én ligger på gulvet',
        innlegg: ig('C8FIO2CisoJ', 5),
      },
      {
        fil: '/revy/C8FIO2CisoJ-8.jpg',
        alt: 'Fire i fargerike bøttehatter synger i mikrofoner på scenen',
        innlegg: ig('C8FIO2CisoJ', 8),
      },
    ],
  },
  {
    id: 'faux-love-2023',
    tittel: 'Faux Love',
    type: 'revy',
    undertittel: 'Sommershow',
    tidspunkt: 'August 2023',
    sted: 'Langhuset, SALT',
    beskrivelse: [
      'Revy for andre år på rad! Faux Love ble spilt på Langhuset på SALT 1. og 2. august 2023.',
      'Denne gangen utforsket vi den tidløse tematikken kjærlighet, i all sin prakt og elendighet, med sketsjer, sanger og et hjerte sydd sammen av alt fra babyer og hunder til bryllup og fotball.',
    ],
    plakat: {
      fil: '/revy/Cure_U9tkIW.jpg',
      alt: 'Plakat for Faux Love: et lappeteppe-hjerte med bilder av en baby, en hund, et brudepar og en fotball på svart bakgrunn',
      innlegg: ig('Cure_U9tkIW'),
    },
    bilder: [
      {
        fil: '/revy/CvFFZjSLsxX-1.jpg',
        alt: 'Manusgruppa skriver på laptoper på en takterrasse',
        innlegg: ig('CvFFZjSLsxX', 1),
      },
      {
        fil: '/revy/CvFFZjSLsxX-3.jpg',
        alt: 'Fire skuespillere lener seg tett sammen over et krus under øving',
        innlegg: ig('CvFFZjSLsxX', 3),
      },
      {
        fil: '/revy/CvZWabwIqfn-1.jpg',
        alt: 'Ensemblet jubler på scenen under skjermteksten «Faux love, åå»',
        innlegg: ig('CvZWabwIqfn', 1),
      },
      {
        fil: '/revy/C4D4EkIiuQO-1.jpg',
        alt: 'En skuespiller gråter dramatisk med tre par sko i armene',
        innlegg: ig('C4D4EkIiuQO', 1),
      },
      {
        fil: '/revy/CvcYzdkIVCI-1.jpg',
        alt: 'Hele ensemblet synger og strekker armene ut i et stort musikalsk nummer',
        innlegg: ig('CvcYzdkIVCI', 1),
      },
      {
        fil: '/revy/C4D4EkIiuQO-3.jpg',
        alt: 'To fra gjengen ligger og smiler under en snudd kulissekasse bak scenen',
        innlegg: ig('C4D4EkIiuQO', 3),
      },
    ],
  },
  {
    id: 'faux-show-2022',
    tittel: 'Faux Show',
    type: 'revy',
    undertittel: 'Sommershow',
    tidspunkt: 'Juli 2022',
    sted: 'Langhuset, SALT',
    beskrivelse: [
      'Vårt første sommershow! Faux Show ble spilt på Langhuset på SALT 11. og 12. juli 2022, den siste kvelden som del av Oslo Humorfest.',
      'Tittel og tema ble valgt med omhu: Når alt er «faux», slipper man unna med litt billige kulisser. Papp, teip og mye entusiasme ble til en hel by på scenen.',
    ],
    plakat: {
      fil: '/revy/Ce_WP2uMNH_.jpg',
      alt: 'Plakat for Faux Show: to tegnede figurer bærer et bilde av plakaten foran et rødt sceneteppe',
      innlegg: ig('Ce_WP2uMNH_'),
    },
    bilder: [
      {
        fil: '/revy/Cf2EYmEoB9v-1.jpg',
        alt: 'Scenegjengen bygger kulisser utendørs på SALT',
        innlegg: ig('Cf2EYmEoB9v', 1),
      },
      {
        fil: '/revy/Cf6KgYbof84.jpg',
        alt: 'En skuespiller i gul t-skjorte svinger en sleiv på scenen',
        innlegg: ig('Cf6KgYbof84'),
      },
      {
        fil: '/revy/Cf2FnZFoTP7.jpg',
        alt: 'Bandet øver med keyboard, bass, gitar og trommer',
        innlegg: ig('Cf2FnZFoTP7'),
      },
      {
        fil: '/revy/Cf6KovSo0kA.jpg',
        alt: 'To i en quizsketsj under skjermteksten «Vil du virkelig ikke bli millionær?»',
        innlegg: ig('Cf6KovSo0kA'),
      },
      {
        fil: '/revy/Cf2EYmEoB9v-2.jpg',
        alt: 'En teiper sammen papp til kulisser på terrassen på SALT',
        innlegg: ig('Cf2EYmEoB9v', 2),
      },
      {
        fil: '/revy/Cf6cARaI26U.jpg',
        alt: 'Tre musikere med gitar og mandolin på scenen i rosa lys',
        innlegg: ig('Cf6cARaI26U'),
      },
    ],
  },
]
