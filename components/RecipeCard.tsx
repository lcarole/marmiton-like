/**
 * Composant RecipeCard optimisé et simplifié
 * Affiche une recette dans un format carte réutilisable
 */

import { memo } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Recipe } from '../types/recipe';
import { useTheme } from '../hooks/useTheme';

interface RecipeCardProps {
  recipe: Recipe;
  onPress?: () => void;
}

function RecipeCard({ recipe, onPress }: RecipeCardProps) {
  const { colors } = useTheme();

  const getDifficultyColor = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'Facile': return '#4caf50';
      case 'Moyen': return '#ff9800';
      case 'Difficile': return '#f44336';
      default: return colors.textSecondary;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          opacity: pressed ? 0.95 : 1,
        }
      ]}
    >
      {recipe.image && (
        <Image 
          source={recipe.image} 
          style={styles.image} 
          resizeMode="cover"
        />
      )}
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text 
            style={[styles.title, { color: colors.text }]} 
            numberOfLines={2}
          >
            {recipe.title}
          </Text>
          
          <Text 
            style={[styles.description, { color: colors.textSecondary }]} 
            numberOfLines={2}
          >
            {recipe.description}
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={[styles.time, { color: colors.textSecondary }]}>
            {recipe.time}
          </Text>
          
          <View 
            style={[
              styles.badge, 
              { backgroundColor: getDifficultyColor(recipe.difficulty) }
            ]}
          >
            <Text style={styles.badgeText}>
              {recipe.difficulty}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  time: {
    fontSize: 12,
    fontWeight: '500',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default memo(RecipeCard);
