import { getExploration, type Exploration } from './explorations'

export type StoryBlock = {
  /** Heure affichée en marge du paragraphe (repère chronologique du récit). */
  time?: string
  text: string
}

export type Story = {
  /** Exploration dont le récit reprend la galerie, la date et le lien Instagram. */
  exploration: Exploration
  /** Nom court affiché dans le sélecteur de récits. */
  label: string
  title: string
  tag: string
  /** Troisième repère sous le titre, après la catégorie et la date de publication. */
  fact: { label: string; value: string }
  /** Index (0) de la photo du récit dans le carrousel du post. */
  photo: number
  alt: string
  blocks: StoryBlock[]
  quote?: string
  /** Compagnon d'exploration identifié dans le post. */
  partner?: { handle: string; url: string }
}

/** Nombre de paragraphes visibles avant « Lire tout le récit ». */
export const storyPreview = 3

/** Récits de l'accueil, tirés des longues légendes Instagram. */
export const stories: Story[] = [
  {
    exploration: getExploration('porte-blindee'),
    label: 'Lemoniz',
    title: 'La centrale nucléaire de Lemoniz',
    tag: 'Centrale nucléaire',
    fact: { label: 'Lieu', value: 'Lemoniz, Espagne' },
    photo: 4,
    alt: "Explorateur dans l'ouverture octogonale d'un bloc de béton de la centrale nucléaire de Lemoniz",
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
    ],
    quote: 'Certaines aventures commencent par une porte. D’autres commencent par la décision de franchir l’interdit.',
  },
  {
    exploration: getExploration('hangar-blindes'),
    label: 'World of Tanks',
    title: 'World of Tanks',
    tag: 'Hangar militaire',
    fact: { label: 'Exploré', value: 'Juillet 2025' },
    photo: 0,
    alt: 'Explorateur à la lampe frontale rouge debout sur un char, au milieu d’un immense hangar militaire',
    blocks: [
      {
        time: '5h',
        text: 'Réveil à 5h après une courte nuit passée sur une zone vague à 2 km du site. La veille, un premier repérage nous avait déjà montré que l’endroit n’avait rien de simple : grillages barbelés, caméras orientées sur chaque angle du bâtiment.',
      },
      {
        text: 'À l’aube, sacs sur le dos, on avance discrètement le long de la clôture jusqu’au premier passage. Escalade rapide du grillage, réception entre les barbelés de l’autre côté et progression accroupis vers les immenses portes métalliques du hangar.',
      },
      {
        text: 'Une à une, nous testons les entrées. Toutes verrouillées. Le stress monte à mesure que le ciel commence à s’éclaircir. Puis au fond de l’allée, une porte qui semble légèrement forcée. Juste assez pour glisser les sacs et se faufiler de profil entre le métal et des caisses militaires empilées derrière.',
      },
      { time: '6h', text: 'À 6h passées, aux premières lueurs du matin, nous pénétrons enfin à l’intérieur.' },
      {
        text: 'Le silence du hangar est irréel. Cachés plusieurs minutes derrière les caisses, on reprend notre souffle avant de lever les yeux. Face à nous, les monstres endormis apparaissent dans la pénombre, gigantesques, figés au milieu de cette cathédrale d’acier.',
      },
      {
        text: 'Chaque bruit résonne, chaque mouvement est calculé. Avec le jour qui se lève lentement à travers les ouvertures du toit, l’exploration peut enfin commencer.',
      },
      {
        text: 'Entre les véhicules militaires, les passerelles métalliques et l’odeur de poussière froide, le temps semble suspendu. Pendant plusieurs heures, on documente ce lieu hors norme en restant constamment attentifs au moindre son venant de l’extérieur.',
      },
      {
        time: '7h30',
        text: 'À 7h30, il est déjà temps de repartir. Exfiltration minutieuse, un par un, par cette même porte forcée. Une fois dehors, direction l’extrémité du site avant de franchir à nouveau le grillage barbelé sous la lumière du matin.',
      },
    ],
    quote: 'Le rêve se réalise.',
  },
  {
    exploration: getExploration('cimetiere-avions'),
    label: 'F-4 Phantom',
    title: 'Les F-4 Phantom du désert',
    tag: 'Aviation',
    fact: { label: 'Marche', value: '20 km' },
    photo: 5,
    alt: 'Explorateur debout sur la carcasse d’un F-4 Phantom, sous le ciel du désert',
    blocks: [
      {
        time: '4h',
        text: 'Départ à pied en lisière du désert. Devant nous : dix kilomètres de marche sous l’attaque constante des moustiques, à suivre des pistes qui nous mènent au plus près de la zone militaire.',
      },
      {
        text: 'Dans l’obscurité quasi totale, seules les étoiles filantes et la lumière de la lune guident cette avancée clandestine.',
      },
      {
        text: 'Les pluies des derniers jours ont gorgé la terre d’eau : nos pieds s’enfoncent dans une boue lourde à chaque pas. Dans ce champ sans repères, s’orienter devient un combat et nous perdons le cap à plusieurs reprises.',
      },
      {
        time: '6h',
        text: 'L’aube se dessine à peine et révèle les premiers véhicules criblés de balles, entourés d’obus et de projectiles encore intacts. Au loin, la silhouette des F-4 Phantom apparaît enfin. C’est le signal : nous sortons le matériel.',
      },
      {
        time: '7h',
        text: 'Le soleil émerge au-dessus des falaises. La lumière dorée frappe les carcasses d’acier et le décor aride. L’atmosphère est surréaliste, digne d’un décor de cinéma, et nos clichés photos s’enchaînent.',
      },
      {
        time: '8h',
        text: 'Le temps presse. Les deux bases militaires situées à deux kilomètres s’éveillent. Le retour s’annonce exigeant : chaque pas doit être mesuré pour contourner les cratères, les zones marécageuses et les munitions non explosées.',
      },
      {
        time: '9h',
        text: 'Après un dernier effort au milieu des bosses d’argile, nous retrouvons la piste, puis le véhicule d’exfiltration. Mission accomplie.',
      },
    ],
    quote: '20 km de marche, des moustiques, de la boue et des projectiles… et des souvenirs plein la tête.',
    partner: { handle: 'thenewculture.17', url: 'https://www.instagram.com/thenewculture.17/' },
  },
]
