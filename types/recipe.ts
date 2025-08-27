/**
 * Types principaux de l'application MarmiChef
 * Centralise toutes les interfaces et types pour une meilleure maintenabilité
 */

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  time: string; // Format: "30 min", "2h 30min", etc.
  difficulty: DifficultyLevel;
  image?: any; // require() asset ou URL
  category?: string;
  servings?: number;
}

export type DifficultyLevel = 'Facile' | 'Moyen' | 'Difficile';

export interface SearchFilters {
  query?: string;
  difficulty?: DifficultyLevel;
  maxTime?: number; // en minutes
  category?: string;
}

export interface NavigationScreens {
  index: undefined;
  search: undefined;
  favorites: undefined;
  'recipes/[id]': { id: string };
}
