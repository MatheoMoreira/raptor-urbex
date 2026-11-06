import carriereBleue from '../assets/photos/carriere-bleue.jpg'
import chambreBaldaquin from '../assets/photos/chambre-baldaquin.jpg'
import chambrePlafondPeint from '../assets/photos/chambre-plafond-peint.jpg'
import cimetiereAvions from '../assets/photos/cimetiere-avions.jpg'
import cloitrePiano from '../assets/photos/cloitre-piano.jpg'
import effondrement from '../assets/photos/effondrement.jpg'
import escalierTrophees from '../assets/photos/escalier-trophees.jpg'
import hangarBlindes from '../assets/photos/hangar-blindes.jpg'
import octogone from '../assets/photos/octogone.jpg'
import pavillonChasse from '../assets/photos/pavillon-chasse.jpg'
import porteBlindee from '../assets/photos/porte-blindee.jpg'
import salonTapisseries from '../assets/photos/salon-tapisseries.jpg'

export const categories = [
  {
    id: 'demeures',
    label: 'Demeure / architecture historique',
    description: 'Châteaux, demeures figées, cloîtres et salons restés intacts.',
  },
  {
    id: 'militaire',
    label: 'Militaire / industrielle',
    description: "Bunkers, hangars, cimetières d'avions et béton brut.",
  },
  {
    id: 'souterrain',
    label: 'Souterrain',
    description: 'Carrières, galeries et réseaux taillés dans la roche.',
  },
  {
    id: 'insolites',
    label: 'Lieux insolites',
    description: 'Les endroits qui ne rentrent dans aucune case.',
  },
] as const

export type CategoryId = (typeof categories)[number]['id']

export type Exploration = {
  slug: string
  title: string
  category: CategoryId
  /** Libellé affiché sur la carte, plus précis que la catégorie du filtre. */
  tag: string
  /** Date de publication sur Instagram, au format AAAA-MM-JJ. */
  date: string
  image: string
  alt: string
  /** Valeur CSS object-position pour cadrer le sujet. */
  focus?: string
  instagram: string
}

const post = (code: string) => `https://www.instagram.com/raptor_urbex/p/${code}/`

/** Les 12 dernières publications, de la plus récente à la plus ancienne. */
export const explorations: Exploration[] = [
  {
    slug: 'chambre-plafond-peint',
    title: 'La chambre au plafond peint',
    category: 'demeures',
    tag: 'Château',
    date: '2026-10-25',
    image: chambrePlafondPeint,
    alt: 'Chambre de château au plafond peint, sol couvert de gravats',
    instagram: post('De7PQ9LilTD'),
  },
  {
    slug: 'octogone',
    title: 'Octogone',
    category: 'militaire',
    tag: 'Industriel',
    date: '2026-10-18',
    image: octogone,
    alt: "Silhouette dans une ouverture octogonale d'un bâtiment en béton brut",
    focus: '50% 45%',
    instagram: post('DepIZmUigV8'),
  },
  {
    slug: 'salon-tapisseries',
    title: 'Le salon des tapisseries',
    category: 'demeures',
    tag: 'Château',
    date: '2026-10-06',
    image: salonTapisseries,
    alt: 'Salon de château abandonné, fauteuils, piano et tapisseries aux murs',
    focus: '50% 20%',
    instagram: post('DeKHUEGCm3A'),
  },
  {
    slug: 'carriere-bleue',
    title: 'Carrière bleue',
    category: 'souterrain',
    tag: 'Souterrain',
    date: '2026-09-27',
    image: carriereBleue,
    alt: 'Deux explorateurs à la lampe frontale dans une carrière souterraine baignée de lumière bleue',
    instagram: post('DdzBPfdClRc'),
  },
  {
    slug: 'escalier-trophees',
    title: "L'escalier des trophées",
    category: 'demeures',
    tag: 'Château',
    date: '2026-09-10',
    image: escalierTrophees,
    alt: 'Hall de château avec escalier en colimaçon, lustre et trophées de chasse',
    instagram: post('DdHNHfDCo6X'),
  },
  {
    slug: 'cimetiere-avions',
    title: "Cimetière d'avions",
    category: 'militaire',
    tag: 'Militaire',
    date: '2026-08-30',
    image: cimetiereAvions,
    alt: "Carcasses d'avions de chasse dans un champ au coucher du soleil",
    focus: '50% 58%',
    instagram: post('Dcq5me2ivqe'),
  },
  {
    slug: 'porte-blindee',
    title: 'La porte blindée',
    category: 'militaire',
    tag: 'Bunker',
    date: '2026-08-16',
    image: porteBlindee,
    alt: "Explorateur éclairant l'entrée circulaire d'un bunker sous un panneau d'avertissement",
    instagram: post('DcG7qHtiuUM'),
  },
  {
    slug: 'pavillon-chasse',
    title: 'Le pavillon de chasse',
    category: 'demeures',
    tag: 'Demeure',
    date: '2026-07-26',
    image: pavillonChasse,
    alt: 'Salle aux boiseries avec portraits, trophées et table ronde, deux explorateurs assis',
    instagram: post('DbQz4DpCssO'),
  },
  {
    slug: 'chambre-baldaquin',
    title: 'Chambre à baldaquin',
    category: 'demeures',
    tag: 'Château',
    date: '2026-07-20',
    image: chambreBaldaquin,
    alt: 'Chambre de château avec lit à baldaquin, crucifix et poutres apparentes',
    instagram: post('DbBWVkQipwb'),
  },
  {
    slug: 'cloitre-piano',
    title: 'Le cloître au piano',
    category: 'demeures',
    tag: 'Patrimoine',
    date: '2026-07-05',
    image: cloitrePiano,
    alt: 'Piano à queue abandonné dans un long cloître gothique voûté',
    instagram: post('DaatqgkCqH0'),
  },
  {
    slug: 'effondrement',
    title: 'Effondrement',
    category: 'demeures',
    tag: 'Château',
    date: '2026-06-21',
    image: effondrement,
    alt: "Chambre aux rideaux jaunes dont le plafond s'est effondré sur le mobilier",
    instagram: post('DZ2yTK2is1V'),
  },
  {
    slug: 'hangar-blindes',
    title: 'Hangar aux blindés',
    category: 'militaire',
    tag: 'Militaire',
    date: '2026-05-12',
    image: hangarBlindes,
    alt: 'Un explorateur debout sur un char, dans un immense hangar militaire abandonné rempli de blindés',
    focus: '50% 36%',
    instagram: post('DYPsYu2ijQB'),
  },
]

export type CuratedSlot = {
  slug: string
  /** Classes de colonne et de hauteur de la grille éditoriale (grand écran). */
  layout: string
}

/** Sélection éditoriale affichée par défaut, rangée par rangée : 7/5, 8/4, puis 4/4/4. */
export const curated: CuratedSlot[] = [
  { slug: 'cimetiere-avions', layout: 'lg:col-span-7 lg:[--media-h:640px]' },
  { slug: 'porte-blindee', layout: 'lg:col-span-5 lg:[--media-h:640px]' },
  { slug: 'carriere-bleue', layout: 'lg:col-span-8 lg:[--media-h:520px]' },
  { slug: 'octogone', layout: 'lg:col-span-4 lg:[--media-h:520px]' },
  { slug: 'cloitre-piano', layout: 'lg:col-span-4 lg:[--media-h:560px]' },
  { slug: 'escalier-trophees', layout: 'lg:col-span-4 lg:[--media-h:560px]' },
  { slug: 'effondrement', layout: 'lg:col-span-4 lg:[--media-h:560px]' },
]

export const featuredSlug = 'pavillon-chasse'
export const heroSlug = 'hangar-blindes'

export function getExploration(slug: string): Exploration {
  const found = explorations.find((e) => e.slug === slug)
  if (!found) throw new Error(`Exploration inconnue : ${slug}`)
  return found
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day}.${month}.${year}`
}
