import { getExploration } from './explorations'

export type StoryBlock = {
  /** Heure affichée en marge du paragraphe (repère chronologique du récit). */
  time?: string
  text: string
}

const lemoniz = getExploration('porte-blindee')

/** Récit mis en avant sur l'accueil : texte du post Instagram, photo 5/8 du carrousel. */
export const story = {
  title: 'La centrale nucléaire de Lemoniz',
  tag: 'Centrale nucléaire',
  place: 'Lemoniz, Espagne',
  date: lemoniz.date,
  instagram: `${lemoniz.instagram}?img_index=5`,
  /** L'exploration dont la galerie s'ouvre depuis le récit. */
  exploration: lemoniz,
  /** Index (0) de la photo du récit dans le carrousel. */
  photo: 4,
  alt: "Explorateur dans l'ouverture octogonale d'un bloc de béton de la centrale nucléaire de Lemoniz",
  /** Nombre de paragraphes visibles avant « Lire tout le récit ». */
  preview: 3,
  blocks: [
    {
      time: '22h',
      text: 'Sous une pluie intense et un orage qui éclate, nous quittons la voiture pour rejoindre la route surplombant la centrale de Lemoniz.',
    },
    { text: 'À chaque passage de voiture, le même réflexe : se jeter rapidement dans la végétation pour disparaître.' },
    {
      text: 'À l’angle du site, deux lumières apparaissent : (la voiture du garde). Nous poursuivons accroupis jusqu’au fond de la crique, où notre tunnel à marée basse nous attend. Le véhicule ne cesse ses passages proche de nous, après une longue heure d’attente dans les douves, nous tentons notre chance.',
    },
    { text: 'Quelques années d’expérience en grimpe, une courte échelle, une corde… et nous voilà à l’intérieur d’un des blocs de béton.' },
    {
      text: 'Commence alors une progression de plusieurs heures dans ce véritable labyrinthe : salle de surveillance, ateliers, espaces d’usinage, administration… Des heures à avancer, à chercher, à douter… jusqu’à enfin atteindre, à 4h du matin, la fameuse salle des réacteurs.',
    },
    { text: 'Nous installons nos hamacs dans le SAS de sécurité et attendons le lever du jour.' },
    {
      time: '6h',
      text: 'Le site se réveille avec nous. Le lever du jour et les premières lumières nous permettront enfin de photographier les lieux.',
    },
    {
      text: 'Descente en rappel, progression dans les réacteurs, puis ascension jusqu’au sommet du pylône. Là-haut, quelques instants de silence pour profiter de la vue, et surtout, réaliser la chance que nous avons d’être ici.',
    },
    {
      time: '10h',
      text: 'Nous découvrons une partie presque apocalyptique du site, entre immenses structures de béton, eau et cris de mouettes.',
    },
    { time: '11h', text: 'Il est temps de partir.' },
    { text: 'Mais alors que nous descendons le long d’un immense mur… le gardien et son chien arrivent droit sur nous.' },
    { text: 'Après un échange avec les gardiens et un contrôle de la police locale, nous pouvons finalement repartir.' },
    { text: 'Une nuit d’infiltration, des heures d’exploration, des kilomètres parcourus et des souvenirs inoubliables.' },
  ] satisfies StoryBlock[],
  quote: 'Certaines aventures commencent par une porte. D’autres commencent par la décision de franchir l’interdit.',
}
