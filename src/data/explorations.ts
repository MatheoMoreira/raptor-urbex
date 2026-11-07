export const categories = [
  {
    id: 'demeures',
    label: 'Demeure / architecture historique',
    description: 'Châteaux, manoirs, villas, églises et chapelles restés intacts.',
  },
  {
    id: 'militaire',
    label: 'Militaire / industrielle',
    description: "Blindés, avions, centrale nucléaire et béton brut.",
  },
  {
    id: 'souterrain',
    label: 'Souterrain',
    description: 'Mines, gouffres et galeries taillées dans la roche.',
  },
  {
    id: 'insolites',
    label: 'Lieux insolites',
    description: 'Piscines, serres, prison, théâtre : tout ce qui ne rentre dans aucune case.',
  },
] as const

export type CategoryId = (typeof categories)[number]['id']

type Entry = {
  /** Identifiant du post Instagram (instagram.com/p/<code>/). */
  code: string
  slug: string
  title: string
  category: CategoryId
  /** Libellé affiché sur la carte, plus précis que la catégorie du filtre. */
  tag: string
  alt: string
  /** Valeur CSS object-position pour cadrer le sujet de la photo de couverture. */
  focus?: string
  /** Numéro de la photo du carrousel affichée sur la carte (1 par défaut). */
  cover?: number
  /** Photographe à créditer quand ce n'est pas Raptor. */
  credit?: string
}

export type Exploration = Entry & {
  /** Date de publication, au format AAAA-MM-JJ. */
  date: string
  /** Toutes les photos du post, dans l'ordre du carrousel Instagram. */
  photos: string[]
  /** Photo de couverture (photos[cover - 1]). */
  image: string
  instagram: string
}

const files = import.meta.glob<string>('../assets/photos/*/*.jpg', { eager: true, import: 'default' })

/** Photos rangées par exploration : src/assets/photos/<slug>/01.jpg, 02.jpg… */
const galleries: Record<string, string[]> = {}
for (const path of Object.keys(files).sort()) {
  const slug = path.split('/').at(-2)!
  ;(galleries[slug] ??= []).push(files[path])
}

function gallery(slug: string): string[] {
  const photos = galleries[slug]
  if (!photos) throw new Error(`Photos introuvables : src/assets/photos/${slug}/`)
  return photos
}

const shortcodeAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'

/** Date de publication déduite de l'identifiant Instagram (horodatage contenu dans l'id du média). */
export function publishedOn(code: string): string {
  let id = 0n
  for (const char of code.slice(0, 11)) id = id * 64n + BigInt(shortcodeAlphabet.indexOf(char))
  return new Date(Number((id >> 23n) + 1314220021721n)).toISOString().slice(0, 10)
}

const entries: Entry[] = [
  // Demeure / architecture historique
  { code: 'De7PQ9LilTD', slug: 'chambre-plafond-peint', title: 'La chambre au plafond peint', category: 'demeures', tag: 'Château', alt: 'Chambre de château au plafond peint, sol couvert de gravats' },
  { code: 'DeKHUEGCm3A', slug: 'salon-tapisseries', title: 'Le salon des tapisseries', category: 'demeures', tag: 'Château', alt: 'Salon de château abandonné, fauteuils, piano et tapisseries aux murs', focus: '50% 20%' },
  { code: 'DdHNHfDCo6X', slug: 'escalier-trophees', title: "L'escalier des trophées", category: 'demeures', tag: 'Château', alt: 'Hall de château avec escalier en colimaçon, lustre et trophées de chasse' },
  { code: 'DbQz4DpCssO', slug: 'pavillon-chasse', title: 'Le pavillon de chasse', category: 'demeures', tag: 'Demeure', alt: 'Salle aux boiseries avec portraits, trophées et table ronde, deux explorateurs assis' },
  { code: 'DbBWVkQipwb', slug: 'chambre-baldaquin', title: 'Chambre à baldaquin', category: 'demeures', tag: 'Château', alt: 'Chambre de château avec lit à baldaquin, crucifix et poutres apparentes' },
  { code: 'DaatqgkCqH0', slug: 'cloitre-piano', title: 'Le cloître au piano', category: 'demeures', tag: 'Cloître', alt: 'Piano à queue abandonné dans un long cloître gothique voûté' },
  { code: 'DZ2yTK2is1V', slug: 'effondrement', title: 'Effondrement', category: 'demeures', tag: 'Château', alt: "Chambre aux rideaux jaunes dont le plafond s'est effondré sur le mobilier" },
  { code: 'DZkrogiKh6Z', slug: 'salon-tapisserie', title: 'Le salon de verdure', category: 'demeures', tag: 'Château', alt: 'Grand salon de château aux tapisseries de verdure, table et fauteuils anciens' },
  { code: 'DZVQ0_FikFu', slug: 'chateau-du-cerf', title: 'Le château du cerf', category: 'demeures', tag: 'Château', alt: 'Salon lambrissé avec trophée de cerf au mur, piano droit et bureau' },
  { code: 'DYKlPcKCtCR', slug: 'chapelle-aux-chaises', title: 'La chapelle aux chaises', category: 'demeures', tag: 'Chapelle', alt: 'Chapelle blanche abandonnée, rangées de chaises paillées face à l’autel' },
  { code: 'DX4hRLjClXm', slug: 'villa-rosso', title: 'Villa Rosso', category: 'demeures', tag: 'Villa', alt: 'Chambre de villa aux murs rouges, lit en bois sculpté sous un plafond peint' },
  { code: 'DWwbEe9CqpR', slug: 'salon-vert', title: 'Le salon vert', category: 'demeures', tag: 'Château', alt: 'Salon aux murs verts, lustre de cristal, piano et fauteuil jaune' },
  { code: 'DWMdDZkChex', slug: 'manoir-aux-toiles', title: 'Le manoir aux toiles', category: 'demeures', tag: 'Manoir', alt: 'Explorateur à la lumière rouge descendant l’escalier sombre d’un manoir' },
  { code: 'DV6eV-0CmtX', slug: 'chateau-du-donjon', title: 'Le château du donjon', category: 'demeures', tag: 'Château', alt: 'Salle à manger de château aux murs rouges, grande cheminée et lustre' },
  { code: 'DVWYrkiCpd2', slug: 'villa-rose', title: 'La villa rose', category: 'demeures', tag: 'Villa', alt: 'Salon de villa aux canapés roses sous un plafond peint et un lustre' },
  { code: 'DUTgnfGiuYK', slug: 'eglise-effondree', title: "L'église effondrée", category: 'demeures', tag: 'Église', alt: 'Nef d’église dont la voûte s’est effondrée sur les bancs' },
  { code: 'DQ4mYsQDD_h', slug: 'escalier-vegetal', title: "L'escalier végétal", category: 'demeures', tag: 'Demeure', alt: 'Escalier en colimaçon en bois entouré de plantes et d’une statue blanche' },
  { code: 'DPtzou6DJrv', slug: 'chateau-aux-drapeaux', title: 'Le château aux drapeaux', category: 'demeures', tag: 'Château', alt: 'Galerie voûtée de château ornée de drapeaux américains' },
  { code: 'DO83awsiqGk', slug: 'eglise-ciel-bleu', title: "L'église au ciel bleu", category: 'demeures', tag: 'Église', alt: 'Chapelle en ruine au plafond bleu percé, crucifix au-dessus de l’autel' },
  { code: 'DNvqRFDVMt1', slug: 'cloitre-de-verre', title: 'Le cloître de verre', category: 'demeures', tag: 'Cloître', alt: 'Explorateur accroupi dans un cloître à colonnes sous une verrière' },
  { code: 'DNdf9fWqbpG', slug: 'chateau-dans-les-herbes', title: 'Le château dans les herbes', category: 'demeures', tag: 'Château', alt: 'Façade d’un grand château abandonné au milieu des herbes hautes' },
  { code: 'DM8JYeqK27x', slug: 'chateau-du-loup', title: 'Le château du loup', category: 'demeures', tag: 'Château', alt: 'Long salon de château rempli de trophées et d’animaux naturalisés' },
  { code: 'DLfddbQqNvJ', slug: 'chapelle-neogothique', title: 'La chapelle néogothique', category: 'demeures', tag: 'Chapelle', alt: 'Chapelle néogothique aux arcs sculptés et au plafond bleu étoilé' },
  { code: 'DK9_cy_qSDu', slug: 'chateau-au-dome', title: 'Le château au dôme', category: 'demeures', tag: 'Château', alt: 'Salle de château sous un dôme percé, murs blanchis par le temps' },
  { code: 'DKm1XKaKtm9', slug: 'rotonde-aux-vitraux', title: 'La rotonde aux vitraux', category: 'demeures', tag: 'Château', alt: 'Rotonde de château sous une coupole en vitrail' },
  { code: 'DKFUogmKkS5', slug: 'eglise-bleue', title: "L'église bleue", category: 'demeures', tag: 'Église', alt: 'Nef d’église aux voûtes peintes en bleu, bancs alignés' },
  { code: 'DJzUYArqiGd', slug: 'eglise-arc-en-ciel', title: "L'église arc-en-ciel", category: 'demeures', tag: 'Église', alt: 'Église aux colonnes et voûtes multicolores, bancs face au chœur' },
  { code: 'DJZirBcq9TP', slug: 'villa-peinte', title: 'La villa peinte', category: 'demeures', tag: 'Villa', alt: 'Enfilade de salles de villa couvertes de fresques colorées' },
  { code: 'DJPROdqKo88', slug: 'escalier-rouge', title: "L'escalier rouge", category: 'demeures', tag: 'Château', alt: 'Escalier de château en bois au tapis rouge, sous un grand lustre' },
  { code: 'DIHIqY8KlSo', slug: 'vue-sur-la-nef', title: 'Vue sur la nef', category: 'demeures', tag: 'Église', alt: 'Explorateur de dos contemplant une nef gothique depuis la tribune' },
  { code: 'DHMDIXxKaQ7', slug: 'villa-aux-fresques', title: 'La villa aux fresques', category: 'demeures', tag: 'Villa', alt: 'Palier de villa aux murs peints et rambarde ouvragée' },
  { code: 'DGtNEbrAkQb', slug: 'galerie-peinte', title: 'La galerie peinte', category: 'demeures', tag: 'Château', alt: 'Longue galerie de château entièrement couverte de fresques' },
  { code: 'DF8TPOUI5Yz', slug: 'plafond-aux-anges', title: 'Le plafond aux anges', category: 'demeures', tag: 'Château', alt: 'Salle blanche de château sous un plafond peint de personnages' },
  { code: 'DE0K-Ltgl57', slug: 'escalier-aux-vitraux', title: "L'escalier aux vitraux", category: 'demeures', tag: 'Château', alt: 'Cage d’escalier sombre éclairée par des vitraux colorés' },
  { code: 'DC7HO7EgCTG', slug: 'eglise-charpente', title: "L'église à la charpente", category: 'demeures', tag: 'Église', alt: 'Nef d’église abandonnée soutenue par une charpente de bois' },
  { code: 'DABpA-KgSEG', slug: 'vitrail-du-palier', title: 'Le vitrail du palier', category: 'demeures', tag: 'Château', alt: 'Palier de château devant un grand vitrail en arc' },
  { code: 'C69Ry0IoJRz', slug: 'piano-du-salon', title: 'Le piano du salon', category: 'demeures', tag: 'Château', alt: 'Piano à queue noir dans un salon de château aux boiseries vertes' },
  { code: 'C61fjvLI2UD', slug: 'bibliotheque-oubliee', title: 'La bibliothèque oubliée', category: 'demeures', tag: 'Maison', alt: 'Bibliothèque en désordre, livres anciens empilés sur les étagères' },
  { code: 'C6jUqBAoWik', slug: 'bibliotheque-verte', title: 'La bibliothèque verte', category: 'demeures', tag: 'Château', alt: 'Bibliothèque aux boiseries vertes, mannequin de couture et fauteuil rouge' },
  { code: 'C5v_6RNoKxu', slug: 'grand-escalier-blanc', title: 'Le grand escalier blanc', category: 'demeures', tag: 'Château', alt: 'Grand escalier double en pierre blanche sous une voûte' },
  { code: 'C3Pgim2AzBN', slug: 'chateau-au-crepuscule', title: 'Château au crépuscule', category: 'demeures', tag: 'Château', alt: 'Explorateur assis devant la façade d’un château au coucher du soleil' },
  { code: 'C2NffQpoNDo', slug: 'les-arcades', title: 'Les arcades', category: 'demeures', tag: 'Château', alt: 'Cour intérieure de château aux arcades de pierre et balcons en fer forgé' },
  { code: 'C2HpiuuIvYa', slug: 'salle-gothique', title: 'La salle gothique', category: 'demeures', tag: 'Château', alt: 'Salle gothique aux arcs brisés et vasque centrale' },
  { code: 'DZApzlQisPq', slug: 'italie-2026', title: 'Italie 2026', category: 'demeures', tag: 'Série · Italie', alt: 'Salon italien abandonné au plafond effondré, fauteuils fleuris sous les gravats' },
  { code: 'DY2WCFLK7bc', slug: 'salon-aux-papiers', title: 'Le salon aux papiers', category: 'demeures', tag: 'Château', alt: 'Salon de château aux tapisseries anciennes, sol jonché de papiers' },
  { code: 'DXmiDY-Cpeg', slug: 'salle-a-manger-du-manoir', title: 'La salle à manger du manoir', category: 'demeures', tag: 'Manoir', alt: 'Chaises sculptées autour d’une table ovale, sous le lustre d’un manoir' },
  { code: 'DXUeiHgCt6Z', slug: 'chambres-fleuries', title: 'Les chambres fleuries', category: 'demeures', tag: 'Château', alt: 'Chambre de château au papier peint fleuri, lit en bois et commode' },
  { code: 'DXCdwZvClx4', slug: 'chateau-bois-noble', title: 'Château Bois Noble', category: 'demeures', tag: 'Château', alt: 'Escalier en fer forgé sous une arche de pierre, bois de cerf aux murs' },
  { code: 'DWeaSoiCozo', slug: 'salon-du-manoir', title: 'Le salon du manoir', category: 'demeures', tag: 'Manoir', alt: 'Salon de manoir au plafond à caissons, fauteuils rouges et bibliothèque' },
  { code: 'DUybfkLivSZ', slug: 'villa-aux-voutes-bleues', title: 'La villa aux voûtes bleues', category: 'demeures', tag: 'Villa', alt: 'Hall de villa aux voûtes peintes en bleu, escalier de pierre et horloge' },
  { code: 'DUgZvDYiuVB', slug: 'villa-sun', title: 'Villa Sun', category: 'demeures', tag: 'Villa', alt: 'Salon de villa baigné de soleil, piano à queue sous un plafond à caissons' },
  { code: 'DT-4w20DEZh', slug: 'chambre-aux-deux-lits', title: 'La chambre aux deux lits', category: 'demeures', tag: 'Villa', alt: 'Chambre de villa aux murs bleus, deux lits jumeaux en bois' },
  { code: 'DQmlHv8jPbY', slug: 'quatre-chambres', title: 'Quatre chambres', category: 'demeures', tag: 'Série', alt: 'Chambre ancienne avec lit en bois, malle et petit cheval à roulettes' },
  { code: 'DP_3Z7ljEX7', slug: 'bibliotheque-rouge', title: 'La bibliothèque rouge', category: 'demeures', tag: 'Château', alt: 'Salon-bibliothèque aux murs rouges, portraits et cheminée' },
  { code: 'DPbyWMpCpE4', slug: 'chambre-au-violoncelle', title: 'La chambre au violoncelle', category: 'demeures', tag: 'Manoir', alt: 'Chambre de manoir, violoncelle posé contre le bureau près d’un lit rayé' },
  { code: 'DPMXWePilLe', slug: 'eglise-verdie', title: "L'église verdie", category: 'demeures', tag: 'Église', alt: 'Chœur d’église néogothique verdi par la mousse, sous une rosace colorée' },
  { code: 'DOlrl8gDCqR', slug: 'chambres-du-manoir', title: 'Les chambres du manoir', category: 'demeures', tag: 'Manoir', alt: 'Chambre au papier peint rose et lit sculpté dans un manoir abandonné' },
  { code: 'DOGz8OICm00', slug: 'chambre-bleue', title: 'La chambre bleue', category: 'demeures', tag: 'Demeure', alt: 'Chambre aux murs bleus écaillés, lit en bois et coiffeuse' },
  { code: 'DNLljlEqilZ', slug: 'couloir-de-lumiere', title: 'Le couloir de lumière', category: 'demeures', tag: 'Château', alt: 'Long couloir de château traversé par la lumière des fenêtres' },
  { code: 'DND4PB4qNws', slug: 'bureau-au-globe', title: 'Le bureau au globe', category: 'demeures', tag: 'Manoir', alt: 'Bureau de manoir avec globe terrestre, lampe et papiers anciens' },
  { code: 'DLpt6lDKU5n', slug: 'chambre-aux-tentures', title: 'La chambre aux tentures', category: 'demeures', tag: 'Château', alt: 'Chambre aux tentures déchirées, lit ancien et armoire à glace' },
  { code: 'DLh_8ZJKsO4', slug: 'rideaux-rouges', title: 'Les rideaux rouges', category: 'demeures', tag: 'Château', alt: 'Salon au sol en damier, rideaux rouges, lustre et tableau ancien' },
  { code: 'DLXvx0bq0qq', slug: 'salle-a-manger-grise', title: 'La salle à manger grise', category: 'demeures', tag: 'Château', alt: 'Salle à manger aux boiseries grises, longue table et chaises en bois' },
  { code: 'DLVKFrVqrcy', slug: 'salle-a-manger-fleurie', title: 'La salle à manger fleurie', category: 'demeures', tag: 'Manoir', alt: 'Salle à manger au papier peint fleuri, trophées de chasse et lustre' },
  { code: 'DLQAUB9qqc5', slug: 'salon-rose', title: 'Le salon rose', category: 'demeures', tag: 'Château', alt: 'Salon aux murs roses, cheminée, trophées et fauteuil rouge' },
  { code: 'DLFxQgsKZgG', slug: 'chateau-de-la-chevre', title: 'Le château de la chèvre', category: 'demeures', tag: 'Château', alt: 'Salon de château avec piano, table ronde et trophées de chasse' },
  { code: 'DL5KhCTKghu', slug: 'chambre-aux-bequilles', title: 'La chambre aux béquilles', category: 'demeures', tag: 'Manoir', alt: 'Chambre de manoir au lit à baldaquin, béquilles posées contre le lit' },
  { code: 'DL0B1CbKUGc', slug: 'chambre-au-heron', title: 'La chambre au héron', category: 'demeures', tag: 'Manoir', alt: 'Chambre de manoir au lit à baldaquin, héron naturalisé au premier plan' },
  { code: 'DKfFdBbKETB', slug: 'horloge-et-portrait', title: "L'horloge et le portrait", category: 'demeures', tag: 'Château', alt: 'Salon avec horloge comtoise, commode et grand portrait d’homme' },
  { code: 'DKXWxCPKkMk', slug: 'hall-au-damier', title: 'Le hall au damier', category: 'demeures', tag: 'Château', alt: 'Hall de château au sol en damier, piano, tapisserie et buste' },
  { code: 'DKKeyJ3K1nd', slug: 'lustre-tombe', title: 'Le lustre tombé', category: 'demeures', tag: 'Château', alt: 'Lustre de cristal posé au sol d’un salon gris à cheminée' },
  { code: 'DJhSv4xqvQb', slug: 'salon-voute', title: 'Le salon voûté', category: 'demeures', tag: 'Château', alt: 'Salon sous une voûte peinte, fauteuils et lampes anciennes' },
  { code: 'DJ7CiY8K15c', slug: 'eglise-blanche', title: "L'église blanche", category: 'demeures', tag: 'Église', alt: 'Nef blanche d’une église abandonnée, bancs alignés face à l’autel' },
  { code: 'DItzr9lKuJi', slug: 'baldaquin-jaune', title: 'Le baldaquin jaune', category: 'demeures', tag: 'Château', alt: 'Lit à baldaquin au couvre-lit jaune dans une chambre au papier peint rouge' },
  { code: 'DI_2NH6KNdq', slug: 'chambre-aux-valises', title: 'La chambre aux valises', category: 'demeures', tag: 'Château', alt: 'Chambre de château avec lustre, armoire et valises anciennes au pied du lit' },
  { code: 'DI9Pzi-q_AJ', slug: 'chambre-verte', title: 'La chambre verte', category: 'demeures', tag: 'Villa', alt: 'Chambre aux murs verts écaillés, deux lits en bois sculpté' },
  { code: 'DHEU34Nq5Zo', slug: 'salon-des-stucs', title: 'Le salon des stucs', category: 'demeures', tag: 'Villa', alt: 'Salon de villa aux stucs rococo, statue dans une niche' },
  { code: 'DGTarKtgBKP', slug: 'galerie-aux-colonnes', title: 'La galerie aux colonnes', category: 'demeures', tag: 'Château', alt: 'Galerie de château bordée de colonnes blanches et de hautes fenêtres' },
  { code: 'DFYOjgRAuFN', slug: 'plafond-aux-nuees', title: 'Le plafond aux nuées', category: 'demeures', tag: 'Château', alt: 'Hall de château sous un plafond peint de nuages, vitrail et balustrade' },
  { code: 'DEiKGgVALaD', slug: 'chambre-sous-les-gravats', title: 'La chambre sous les gravats', category: 'demeures', tag: 'Manoir', alt: 'Chambre de manoir envahie par les gravats et une branche tombée du plafond' },

  // Militaire / industrielle
  { code: 'Dcq5me2ivqe', slug: 'cimetiere-avions', title: 'Cimetière de F-4 Phantom', category: 'militaire', tag: 'Aviation', alt: "Carcasses d'avions de chasse F-4 Phantom dans un champ au coucher du soleil", focus: '50% 58%' },
  { code: 'DcG7qHtiuUM', slug: 'porte-blindee', title: 'La centrale de Lemoniz', category: 'militaire', tag: 'Centrale nucléaire', alt: "Explorateur éclairant l'entrée circulaire blindée de la centrale nucléaire de Lemoniz" },
  { code: 'DepIZmUigV8', slug: 'octogone', title: 'Lemoniz, 8 h du matin', category: 'militaire', tag: 'Centrale nucléaire', alt: "Silhouette dans l'ouverture octogonale d'un bloc de béton de la centrale de Lemoniz", focus: '50% 45%' },
  { code: 'DYPsYu2ijQB', slug: 'hangar-blindes', title: 'World of Tanks', category: 'militaire', tag: 'Militaire', alt: 'Char au centre d’un immense hangar militaire abandonné, entouré de rangées de blindés', cover: 3 },
  { code: 'DRKq0IijHWE', slug: 'hangar-bleu', title: 'Le hangar bleu', category: 'militaire', tag: 'Militaire', alt: 'Hangar plongé dans la pénombre bleue, rangées de chars alignés' },
  { code: 'DMvQRnnKGIl', slug: 'chars-alignes', title: 'Les chars alignés', category: 'militaire', tag: 'Militaire', alt: 'Rangées de chars alignés sous les verrières d’un hangar militaire' },
  { code: 'DMVfs9FoTgB', slug: 'hangar-noir-et-blanc', title: 'Le hangar en noir et blanc', category: 'militaire', tag: 'Militaire', alt: 'Explorateur debout au milieu des chars d’un hangar, en noir et blanc' },
  { code: 'DMnh3RrK9L_', slug: 'char-dans-les-dunes', title: 'Le char dans les dunes', category: 'militaire', tag: 'Militaire', alt: 'Explorateur debout sur un char abandonné au milieu des herbes sèches' },
  { code: 'C4tHyCZoONT', slug: 'avion-de-la-marine', title: "L'avion de la Marine", category: 'militaire', tag: 'Aviation', alt: 'Explorateur debout sur le fuselage d’un avion de la Marine abandonné' },
  { code: 'C4ilWGEIF5W', slug: 'camion-lance-missiles', title: 'Le camion lance-missiles', category: 'militaire', tag: 'Militaire', alt: 'Explorateur assis sur un camion lance-missiles sous un ciel d’orage' },

  // Souterrain
  { code: 'DdzBPfdClRc', slug: 'carriere-bleue', title: "Les mines d'ocre", category: 'souterrain', tag: 'Mine', alt: "Deux explorateurs à la lampe frontale dans une mine d'ocre baignée de lumière bleue" },
  { code: 'DPJx9c_Chjl', slug: 'gouffre', title: 'Le gouffre', category: 'souterrain', tag: 'Souterrain', alt: "Raptor, frontale rouge allumée, au fond d'un gouffre envahi par la végétation", focus: '50% 60%', credit: 'echo_du_passe' },

  // Lieux insolites
  { code: 'DQR_dp3jAVe', slug: 'verrieres', title: 'Les verrières', category: 'insolites', tag: 'Série 2023-2025', alt: 'Serre abandonnée sous une coupole de verre et de fer', cover: 7 },
  { code: 'DVrCmgPivdB', slug: 'piscine-en-herbe', title: 'La piscine en herbe', category: 'insolites', tag: 'Piscine', alt: 'Bassin de piscine couverte entièrement envahi par l’herbe' },
  { code: 'DTGRQgHCuUh', slug: 'face-a-la-tour-eiffel', title: 'Face à la tour Eiffel', category: 'insolites', tag: 'Toit', alt: 'Explorateur sur un toit de Paris, de nuit, face à la tour Eiffel illuminée' },
  { code: 'DOWQgMqCm8W', slug: 'camion-de-pompiers', title: 'Le camion de pompiers', category: 'insolites', tag: 'Véhicule', alt: 'Camion de pompiers abandonné, échelle dressée au milieu de la forêt' },
  { code: 'DNYffZZqLpO', slug: 'prison-circulaire', title: 'La prison circulaire', category: 'insolites', tag: 'Prison', alt: 'Coursives circulaires d’une prison abandonnée, explorateurs aux étages' },
  { code: 'DKzt2SpKY-a', slug: 'bassin-aux-arcades', title: 'Le bassin aux arcades', category: 'insolites', tag: 'Piscine', alt: 'Explorateur assis au bord d’un bassin vide entouré d’arcades sous verrière' },
  { code: 'DHobgUZKh5a', slug: 'cabinet-dentaire', title: 'Le cabinet dentaire', category: 'insolites', tag: 'Hôpital', alt: 'Fauteuil de dentiste au milieu des gravats dans un hôpital abandonné' },
  { code: 'DHRCutSqbDJ', slug: 'voiture-de-la-foret', title: 'La voiture de la forêt', category: 'insolites', tag: 'Véhicule', alt: 'Voiture ancienne abandonnée et recouverte de feuilles en pleine forêt' },
  { code: 'DGi5lUugtQ3', slug: 'amphitheatre', title: "L'amphithéâtre", category: 'insolites', tag: 'Amphithéâtre', alt: 'Rangées de fauteuils face à l’écran d’un amphithéâtre abandonné' },
  { code: 'DFGNDXuAf5x', slug: 'hotel-a-verriere', title: "L'hôtel à verrière", category: 'insolites', tag: 'Hôtel', alt: 'Atrium d’hôtel abandonné sous une immense verrière' },
  { code: 'DAWOo_BAjXc', slug: 'serre-au-bassin', title: 'La serre au bassin', category: 'insolites', tag: 'Serre', alt: 'Grande serre de verre abandonnée autour d’un bassin vide' },
  { code: 'C_gMTY8gNKV', slug: 'serre-envahie', title: 'La serre envahie', category: 'insolites', tag: 'Serre', alt: 'Serre abandonnée dont la végétation envahit les grandes vitres' },
  { code: 'C56Ooqyo_n-', slug: 'les-thermes', title: 'Les thermes', category: 'insolites', tag: 'Thermes', alt: 'Galerie des thermes sous verrière, sol couvert de mousse' },
  { code: 'C5Bn_JZIqIc', slug: 'salon-de-coiffure', title: 'Le salon de coiffure', category: 'insolites', tag: 'Commerce', alt: 'Salon de coiffure abandonné, fauteuils et casques séchoirs' },
  { code: 'C4n5otBoXhX', slug: 'le-theatre', title: 'Le théâtre', category: 'insolites', tag: 'Théâtre', alt: 'Salle de théâtre abandonnée vue depuis la scène, sous un lustre' },
]

/** Toutes les explorations, de la plus récente à la plus ancienne. */
export const explorations: Exploration[] = entries
  .map((entry) => {
    const photos = gallery(entry.slug)
    return {
      ...entry,
      date: publishedOn(entry.code),
      photos,
      image: photos[(entry.cover ?? 1) - 1] ?? photos[0],
      instagram: `https://www.instagram.com/p/${entry.code}/`,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

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
  { slug: 'hangar-blindes', layout: 'lg:col-span-4 lg:[--media-h:520px]' },
  { slug: 'pavillon-chasse', layout: 'lg:col-span-4 lg:[--media-h:560px]' },
  { slug: 'villa-sun', layout: 'lg:col-span-4 lg:[--media-h:560px]' },
  { slug: 'lustre-tombe', layout: 'lg:col-span-4 lg:[--media-h:560px]' },
]

/** Exploration nommée en couverture du hero (la photo est src/assets/hero-f4-phantom.webp). */
export const heroSlug = 'cimetiere-avions'

export function getExploration(slug: string): Exploration {
  const found = explorations.find((e) => e.slug === slug)
  if (!found) throw new Error(`Exploration inconnue : ${slug}`)
  return found
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day}.${month}.${year}`
}
