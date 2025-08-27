/**
 * Écran de recherche - Recherche et filtrage des recettes
 * Interface de recherche simplifiée avec filtres avancés
 */

import { useState, useMemo } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { Link } from 'expo-router';
import Screen from '../../components/Screen';
import RecipeCard from '../../components/RecipeCard';
import SearchBar from '../../components/SearchBar';
import SectionTitle from '../../components/SectionTitle';
import { useTheme } from '../../hooks/useTheme';
import recipes, { Recipe } from '../../data/recipes';

export default function SearchScreen() {
  const { colors } = useTheme();
  const [query, setQuery] = useState('');

  // Recherche optimisée avec plusieurs critères
  const filteredRecipes = useMemo(() => {
    if (!query.trim()) return recipes;

    const searchTerm = query.toLowerCase();
    return recipes.filter((recipe: Recipe) => 
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm)
      ) ||
      recipe.difficulty.toLowerCase().includes(searchTerm)
    );
  }, [query]);

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
        {query ? 'Aucune recette trouvée' : 'Tapez pour rechercher une recette...'}
      </Text>
    </View>
  );

  return (
    <Screen style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchBar
        placeholder="Rechercher une recette..."
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      {filteredRecipes.length > 0 && (
        <SectionTitle>
          {query ? `${filteredRecipes.length} résultat(s)` : 'Toutes les recettes'}
        </SectionTitle>
      )}

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link 
            href={{ pathname: '/recipes/[id]', params: { id: item.id } }} 
            asChild
          >
            <RecipeCard recipe={item} />
          </Link>
        )}
        ListEmptyComponent={renderEmptyState}
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
  listContainer: {
    paddingBottom: 40
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.6,
  },
});
