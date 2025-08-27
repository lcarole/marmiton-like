/**
 * Écran des favoris - Affiche les recettes favorites de l'utilisateur
 * Utilise le hook useFavorites simplifié pour la gestion d'état
 */

import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import Screen from '../../components/Screen';
import RecipeCard from '../../components/RecipeCard';
import SectionTitle from '../../components/SectionTitle';
import { useTheme } from '../../hooks/useTheme';
import { useFavorites } from '../../hooks/useFavorites';
import recipes from '../../data/recipes';

export default function FavoritesScreen() {
  const { colors } = useTheme();
  const { favoriteIds, isLoading } = useFavorites();

  // Récupération des recettes favorites
  const favoriteRecipes = recipes.filter(recipe => 
    favoriteIds.includes(recipe.id)
  );

  if (isLoading) {
    return (
      <Screen style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
            Chargement...
          </Text>
        </View>
      </Screen>
    );
  }

  if (favoriteRecipes.length === 0) {
    return (
      <Screen style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyTitle, { color: colors.text }]}>
            Aucun favori
          </Text>
          <Text style={[styles.emptyDescription, { color: colors.textSecondary }]}>
            Ajoutez des recettes à vos favoris pour les retrouver rapidement ici.
          </Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen style={[styles.container, { backgroundColor: colors.background }]}>
      <SectionTitle>
        {`Mes Favoris (${favoriteRecipes.length})`}
      </SectionTitle>
      
      <FlatList
        data={favoriteRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link 
            href={{ pathname: '/recipes/[id]', params: { id: item.id } }} 
            asChild
          >
            <RecipeCard recipe={item} />
          </Link>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  listContainer: {
    paddingBottom: 40
  },
});
