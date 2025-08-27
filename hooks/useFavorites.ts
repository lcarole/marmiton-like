/**
 * Hook de gestion des favoris simplifié
 * Gère la persistance automatiquement et optimise les performances
 */

import { useState, useEffect, useCallback } from 'react';
import { storage } from '../services/storage';
import { Recipe } from '../types/recipe';

const FAVORITES_KEY = 'favorites';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Chargement initial des favoris
  useEffect(() => {
    loadFavorites();
  }, []);

  // Sauvegarde automatique lors des changements
  useEffect(() => {
    if (!isLoading) {
      saveFavorites();
    }
  }, [favoriteIds, isLoading]);

  const loadFavorites = async () => {
    try {
      const saved = await storage.getItem(FAVORITES_KEY);
      if (saved) {
        const ids = JSON.parse(saved) as string[];
        setFavoriteIds(new Set(ids));
      }
    } catch (error) {
      console.warn('Erreur de chargement des favoris:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavorites = async () => {
    try {
      const ids = Array.from(favoriteIds);
      await storage.setItem(FAVORITES_KEY, JSON.stringify(ids));
    } catch (error) {
      console.warn('Erreur de sauvegarde des favoris:', error);
    }
  };

  const toggleFavorite = useCallback((recipeId: string) => {
    setFavoriteIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(recipeId)) {
        newSet.delete(recipeId);
      } else {
        newSet.add(recipeId);
      }
      return newSet;
    });
  }, []);

  const isFavorite = useCallback((recipeId: string) => {
    return favoriteIds.has(recipeId);
  }, [favoriteIds]);

  const clearFavorites = useCallback(() => {
    setFavoriteIds(new Set());
  }, []);

  const getFavoriteIds = useCallback(() => {
    return Array.from(favoriteIds);
  }, [favoriteIds]);

  return {
    favoriteIds: Array.from(favoriteIds),
    isLoading,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    getFavoriteIds,
  };
}
