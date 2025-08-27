/**
 * Page de détail d'une recette
 * Affiche tous les détails et permet d'ajouter/retirer des favoris
 */

import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import recipes, { Recipe } from '../../data/recipes';
import { useTheme } from '../../hooks/useTheme';
import { useFavorites } from '../../hooks/useFavorites';

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();
  const { toggleFavorite, isFavorite } = useFavorites();

  const recipe: Recipe | undefined = recipes.find((r: Recipe) => r.id === id);

  if (!recipe) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>
          Recette introuvable
        </Text>
      </View>
    );
  }

  const isRecipeFavorite = isFavorite(recipe.id);

  const getDifficultyColor = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'Facile': return '#4caf50';
      case 'Moyen': return '#ff9800';
      case 'Difficile': return '#f44336';
      default: return colors.textSecondary;
    }
  };

  return (
    <ScrollView 
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {recipe.image && (
        <Image source={recipe.image} style={styles.heroImage} />
      )}

      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          {recipe.title}
        </Text>
        
        <View style={styles.metaRow}>
          <View 
            style={[
              styles.difficultyBadge, 
              { backgroundColor: getDifficultyColor(recipe.difficulty) }
            ]}
          >
            <Text style={styles.difficultyText}>
              {recipe.difficulty}
            </Text>
          </View>
          <Text style={[styles.timeText, { color: colors.textSecondary }]}>
            {recipe.time}
          </Text>
        </View>
      </View>

      <Text style={[styles.description, { color: colors.textSecondary }]}>
        {recipe.description}
      </Text>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Ingrédients
        </Text>
        {recipe.ingredients.map((ingredient: string, index: number) => (
          <Text 
            key={index} 
            style={[styles.ingredient, { color: colors.textSecondary }]}
          >
            • {ingredient}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Étapes de préparation
        </Text>
        {recipe.steps.map((step: string, index: number) => (
          <View key={index} style={styles.stepContainer}>
            <Text style={[styles.stepNumber, { color: colors.primary }]}>
              {index + 1}
            </Text>
            <Text style={[styles.stepText, { color: colors.textSecondary }]}>
              {step}
            </Text>
          </View>
        ))}
      </View>

      <Pressable 
        onPress={() => toggleFavorite(recipe.id)}
        style={[
          styles.favoriteButton, 
          { 
            backgroundColor: isRecipeFavorite ? colors.primary : colors.surface,
            borderColor: colors.primary,
            borderWidth: isRecipeFavorite ? 0 : 1,
          }
        ]}
      >
        <Ionicons 
          name={isRecipeFavorite ? "heart" : "heart-outline"} 
          size={20} 
          color={isRecipeFavorite ? "#ffffff" : colors.primary} 
        />
        <Text 
          style={[
            styles.favoriteButtonText, 
            { 
              color: isRecipeFavorite ? "#ffffff" : colors.primary 
            }
          ]}
        >
          {isRecipeFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 16,
    paddingBottom: 40,
  },
  errorContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
  },
  heroImage: { 
    width: '100%', 
    height: 250, 
    borderRadius: 16, 
    marginBottom: 20,
  },
  header: {
    marginBottom: 16,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700', 
    marginBottom: 12,
    lineHeight: 34,
  },
  metaRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 16,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  difficultyText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  timeText: { 
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '600',
    marginBottom: 12,
  },
  ingredient: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 4,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 12,
    marginTop: 2,
    minWidth: 24,
  },
  stepText: {
    fontSize: 15,
    lineHeight: 22,
    flex: 1,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
    gap: 8,
  },
  favoriteButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
