# Raptor Urbex : portfolio

Site vitrine de [@raptor_urbex](https://www.instagram.com/raptor_urbex/), direction « Nocturne ».
React 19, TypeScript, Vite et Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vérifie les types puis génère dist/
npm run preview  # sert le build de production
```

## Pages

- `/` : accueil (`src/pages/HomePage.tsx`). Le filtre des explorations se lit dans l'URL :
  `/?categorie=militaire#explorations` (`demeures`, `militaire`, `souterrain`, `insolites`).
- `/a-propos` : présentation de l'explorateur (`src/pages/AboutPage.tsx`) : photo fixe à gauche,
  le code, les thèmes explorés, la FAQ et un appel au contact.

Le routage passe par React Router. En production, l'hébergeur doit renvoyer `index.html` pour
toutes les routes (règle de réécriture « SPA »), sinon `/a-propos` répondra 404 au rechargement.

## Déploiement

Chaque push sur `main` publie le site sur GitHub Pages via `.github/workflows/deploy.yml` :
https://matheomoreira.github.io/raptor-urbex/ (version de relecture, `noindex` dans `index.html`).

## Où modifier quoi

- `src/data/site.ts` : pseudo, ville, abonnés, chiffres clés, pays, e-mail et liens Instagram / TikTok.
- `src/data/explorations.ts` : les catégories, les explorations, la sélection éditoriale de la
  grille (`curated`) et l'exploration nommée dans le hero.
- `src/data/story.ts` : les récits du carrousel (Lemoniz, World of Tanks, F-4 Phantom), tirés des
  longues légendes Instagram. Pour en ajouter un, ajouter un objet au tableau `stories`.
- `src/assets/photos/<slug>/` : toutes les photos d'une exploration, `01.jpg`, `02.jpg`… dans
  l'ordre du carrousel Instagram.
- `src/assets/hero-f4-phantom.webp` : la photo de fond de l'accueil.
- `src/index.css` : couleurs, polices et tailles de titres (`@theme`), dégradé du hero.
- `src/components/` : une section de la page par fichier ; `Gallery.tsx` est la visionneuse qui
  s'ouvre au clic sur une exploration.

Pour ajouter une exploration : déposer ses photos dans `src/assets/photos/<slug>/` (`01.jpg`,
`02.jpg`…), puis ajouter une ligne au tableau `entries` de `explorations.ts` avec le `code` du post
Instagram (`instagram.com/p/<code>/`). `cover: 3` choisit la photo affichée sur la carte (la
première par défaut). La date de publication et le lien sont calculés à partir du code, et la liste
est triée automatiquement de la plus récente à la plus ancienne.
