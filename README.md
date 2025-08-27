# 🍽️ Marmiton-Like

Une application mobile de recettes inspirée de Marmiton, développée avec **Expo Router** et **React Native**.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.79.6-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~53.0.22-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.8.3-blue.svg)

## 📱 Aperçu

Marmiton-Like est une application moderne de recettes de cuisine qui offre une expérience utilisateur intuitive avec un design adaptatif (mode clair/sombre) et une navigation fluide. L'application permet de découvrir, rechercher et sauvegarder vos recettes préférées.

### ✨ Fonctionnalités principales

- 🏠 **Page d'accueil** : Découverte de recettes populaires et recommandations
- 🔍 **Recherche avancée** : Filtrage par nom, ingrédients, type de plat
- ❤️ **Favoris** : Sauvegarde de vos recettes préférées
- 📱 **Design adaptatif** : Interface qui s'adapte au thème système (clair/sombre)
- 🎨 **Navigation intuitive** : Onglets avec icônes et navigation par pile
- 🚀 **Performance optimisée** : Architecture clean et composants réutilisables

## 🏗️ Architecture

L'application utilise une architecture moderne basée sur :

### 📁 Structure du projet

```
marmiton-like/
├── app/                    # Pages et navigation (Expo Router)
│   ├── (tabs)/            # Navigation par onglets
│   │   ├── index.tsx      # Page d'accueil
│   │   ├── search.tsx     # Page de recherche
│   │   ├── favorites.tsx  # Page des favoris
│   │   └── _layout.tsx    # Layout des onglets
│   ├── recipes/           # Pages de recettes
│   │   └── [id].tsx       # Détail d'une recette
│   └── _layout.tsx        # Layout racine
├── components/            # Composants réutilisables
│   ├── RecipeCard.tsx     # Carte de recette
│   ├── SearchBar.tsx      # Barre de recherche
│   ├── Screen.tsx         # Conteneur d'écran
│   └── SectionTitle.tsx   # Titre de section
├── hooks/                 # Hooks personnalisés
│   ├── useTheme.tsx       # Gestion du thème
│   └── useFavorites.ts    # Gestion des favoris
├── services/              # Services et logique métier
│   └── storage.ts         # Service de stockage
├── constants/             # Constantes et configuration
│   └── Colors.ts          # Palette de couleurs
├── data/                  # Données statiques
│   └── recipes.ts         # Base de données des recettes
└── types/                 # Types TypeScript
    └── recipe.ts          # Types pour les recettes
```

### 🎨 Système de thème

L'application utilise un système de thème adaptatif qui détecte automatiquement les préférences système :

- **Mode clair** : Interface lumineuse avec des couleurs chaudes
- **Mode sombre** : Interface sombre pour une utilisation confortable en basse luminosité
- **Transition automatique** : Basculement selon les paramètres du système

### 🗂️ Gestion des données

- **Recettes** : Base de données locale avec recettes variées
- **Favoris** : Système de persistance local avec fallback en mémoire
- **Recherche** : Filtrage en temps réel par nom et ingrédients

## 🚀 Installation et démarrage

### Prérequis

- Node.js (≥ 18.0.0)
- npm ou yarn
- Expo CLI
- Un émulateur iOS/Android ou l'app Expo Go

### Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/lcarole/marmiton-like.git
   cd marmiton-like
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npm start
   ```

### 📱 Lancement sur différentes plateformes

```bash
# Développement web
npm run web

# Émulateur iOS
npm run ios

# Émulateur Android
npm run android

# Avec Expo Go
npm start
# Puis scanner le QR code avec l'app Expo Go
```

## 🛠️ Technologies utilisées

### Framework et Runtime
- **React Native 0.79.6** - Framework de développement mobile
- **Expo ~53.0.22** - Plateforme de développement
- **Expo Router ~5.1.5** - Navigation basée sur le système de fichiers
- **TypeScript ~5.8.3** - Typage statique

### UI et Thème
- **@expo/vector-icons** - Icônes vectorielles
- **React Native Reanimated** - Animations fluides
- **Système de thème personnalisé** - Support clair/sombre

### Navigation
- **Expo Router** - Navigation moderne avec file-system routing
- **React Native Screens** - Optimisation des écrans
- **React Native Safe Area Context** - Gestion des zones sécurisées

## 📋 Fonctionnalités détaillées

### 🏠 Page d'accueil
- Affichage des recettes populaires
- Recommandations personnalisées
- Navigation rapide vers les détails
- Interface responsive

### 🔍 Recherche
- Barre de recherche en temps réel
- Filtrage par nom de recette
- Filtrage par ingrédients
- Résultats instantanés

### ❤️ Favoris
- Ajout/suppression de favoris
- Persistance locale des données
- Interface de gestion intuitive
- Synchronisation automatique

### 📖 Détail des recettes
- Affichage complet des informations
- Liste des ingrédients
- Instructions étape par étape
- Temps de préparation et cuisson

## 🔧 Configuration

### Thème personnalisé

Les couleurs sont définies dans `constants/Colors.ts` :

```typescript
const Colors = {
  light: {
    primary: '#ff7a00',
    background: '#ffffff',
    text: '#1a1a1a',
    // ...
  },
  dark: {
    primary: '#ffb366',
    background: '#121212',
    text: '#ffffff',
    // ...
  }
};
```

### Configuration Expo

Le fichier `app.json` contient la configuration principale :
- Bundle identifier : `com.example.marmichef`
- Schéma d'URL : `marmitonlike://`
- Support tablette activé
- Architecture nouvelle activée

## 🚀 Déploiement

### Build de développement

```bash
# Build pour iOS
expo build:ios

# Build pour Android
expo build:android
```

### Build de production avec EAS

```bash
# Configuration EAS
npx eas build --platform all

# Build pour store
npx eas submit
```

## 🧪 Tests et débogage

### Outils de développement

- **Expo DevTools** - Débogage en temps réel
- **React Developer Tools** - Inspection des composants
- **TypeScript** - Vérification de types à la compilation

### Hot Reload

L'application supporte le hot reload pour un développement rapide :
- Modifications instantanées des composants
- Préservation de l'état lors des modifications
- Rechargement automatique des assets

## 📝 Contribution

### Standards de code

- **TypeScript strict** - Typage complet
- **Composants fonctionnels** - Hooks uniquement
- **Architecture modulaire** - Séparation des responsabilités
- **Nommage cohérent** - Conventions React/TypeScript

### Processus de contribution

1. Fork du projet
2. Création d'une branche feature
3. Développement avec tests
4. Pull request avec description détaillée


## 👥 Auteurs

- **Luigi Carole** - [@lcarole](https://github.com/lcarole)
