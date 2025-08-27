# MarmiChef - Application de Recettes

Une application mobile moderne de recettes de cuisine construite avec Expo et React Native.

## 🏗️ Architecture Simplifiée et Maintenable

Cette version optimisée du code privilégie la simplicité et la maintenabilité pour les équipes de développement.

### Structure du Projet

```
📁 app/                     # Navigation Expo Router
  📁 (tabs)/               # Onglets principaux
  📁 recipes/              # Pages de détail des recettes
📁 components/             # Composants réutilisables
📁 hooks/                  # Hooks personnalisés
📁 services/              # Services (stockage, API)
📁 types/                 # Types TypeScript centralisés
📁 constants/             # Constantes (thèmes, couleurs)
📁 data/                  # Données statiques
```

### Principaux Composants

#### 🎨 Système de Thème (`hooks/useTheme.ts`)
- **Simplicité** : Detection automatique du thème système
- **Performance** : Context optimisé avec types stricts
- **Maintenabilité** : Couleurs centralisées dans `constants/theme.ts`

#### 💾 Gestion du Stockage (`services/storage.ts`)
- **Fallback automatique** : Mémoire si AsyncStorage indisponible
- **Interface unifiée** : Même API pour tous les types de stockage
- **Gestion d'erreurs** : Logs sans interruption de l'app

#### ⭐ Favoris (`hooks/useFavorites.ts`)
- **Performance** : Utilise Set pour O(1) lookup
- **Persistance** : Sauvegarde automatique des changements
- **Simplicité** : Hook unique pour toute la logique

## 📋 Types Centralisés

Tous les types sont définis dans `types/recipe.ts` pour une meilleure cohérence.

## 🚀 Avantages de cette Architecture

### ✅ Pour les Développeurs
- **Code prévisible** : Patterns cohérents partout
- **Debugging facile** : Services isolés et testables
- **Tests simples** : Hooks découplés de l'UI
- **Réutilisabilité** : Composants modulaires

### ✅ Pour la Maintenance
- **Évolutivité** : Ajout facile de nouvelles fonctionnalités
- **Refactoring sûr** : Types stricts TypeScript
- **Performance** : Optimisations intégrées (memo, useMemo)
- **Documentation** : Code auto-documenté avec JSDoc

### Fonctionnalités
- Liste de recettes populaires
- Recherche par titre (filtrage local)
- Détails d'une recette (ingrédients + étapes)
- Gestion des favoris (contexte React)
- Navigation par onglets + pile (Expo Router)
- Typage TypeScript strict
- Composants réutilisables (`RecipeCard`, `Screen`)

### Structure principale
```
app/
  _layout.tsx              # Layout racine (Stack)
  (tabs)/_layout.tsx       # Layout des onglets
  (tabs)/index.tsx         # Accueil
  (tabs)/search.tsx        # Recherche
  (tabs)/favorites.tsx     # Favoris
  recipes/[id].tsx         # Détail recette
components/
  FavoritesContext.tsx
  RecipeCard.tsx
  Screen.tsx
data/
  recipes.ts               # Données factices
```

### Installation & Lancement
```bash
npm install
npm run start
```
Ouvrir ensuite sur iOS / Android / Web via l'interface Expo.

### Captures
Les captures iOS se trouvent dans `screenshots/`.

### Améliorations potentielles
- Persistance des favoris (AsyncStorage)
- Ajout d'images pour chaque recette
- Filtrage avancé (difficulté, durée)
- Tests unitaires (Jest + Testing Library) pour le contexte et les écrans
- Internationalisation (i18n)

### Licence
Usage éducatif / démo.
