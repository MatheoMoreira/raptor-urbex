# Raptor Urbex — portfolio

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
  `/?categorie=Militaire#explorations`.
- `/a-propos` : présentation de l'explorateur (`src/pages/AboutPage.tsx`) — photo fixe à gauche,
  le code, les thèmes explorés, la FAQ et un appel au contact.

Le routage passe par React Router. En production, l'hébergeur doit renvoyer `index.html` pour
toutes les routes (règle de réécriture « SPA »), sinon `/a-propos` répondra 404 au rechargement.

## Où modifier quoi

- `src/data/site.ts` : pseudo, ville, abonnés, pays et **adresse e-mail** (vide = emplacement réservé affiché).
- `src/data/explorations.ts` : les explorations (titre, catégorie, date, photo, lien Instagram),
  la sélection éditoriale de la grille (`curated`), le récit mis en avant et la photo du hero.
- `src/assets/photos/` : les photos, importées par Vite (noms de fichiers hachés au build).
- `src/index.css` : couleurs, polices et tailles de titres (`@theme`), dégradé du hero.
- `src/components/` : une section de la page par fichier.

Pour ajouter une exploration : déposer la photo dans `src/assets/photos/`, l'importer en haut de
`explorations.ts` et ajouter une entrée au tableau `explorations` (le plus récent en premier).
