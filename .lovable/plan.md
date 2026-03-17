

# Intégration vidéo démo + suppression avis Nisrine

## Changements

1. **Copier la vidéo** `.mov` dans `public/videos/demo-bulbiz.mov`
2. **Section démo vidéo** (lignes 390-404) : remplacer le placeholder par un `<video>` natif en format vertical — adapter le conteneur de `aspect-video` (16:9) vers un ratio portrait (~9:16) avec `max-w-sm mx-auto`
3. **Témoignages** (lignes 439-444) : supprimer l'entrée Nisrine Benabdelkader, passer la grille de `md:grid-cols-3` à `md:grid-cols-2` (2 avis restants)

