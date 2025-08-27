/**
 * Écran d'accueil - Page principale de l'application
 * Affiche les recettes populaires avec navigation simplifiée
 */

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';
import Screen from '../../components/Screen';
import RecipeCard from '../../components/RecipeCard';
import SectionTitle from '../../components/SectionTitle';
import { useTheme } from '../../hooks/useTheme';
import recipes from '../../data/recipes';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <Screen style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.appTitle, { color: colors.text }]}>
          MarmiChef
        </Text>
        <Text 
          style={[styles.subtitle, { color: colors.textSecondary }]} 
          numberOfLines={1}
        >
          Inspiration culinaire quotidienne
        </Text>
      </View>

      <SectionTitle>Populaires</SectionTitle>

      <FlatList
        data={recipes}
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
  header: { 
    marginBottom: 24 
  },
  appTitle: { 
    fontSize: 32, 
    fontWeight: '700', 
    letterSpacing: -0.5 
  },
  subtitle: { 
    fontSize: 16, 
    marginTop: 4,
    opacity: 0.8
  },
  listContainer: {
    paddingBottom: 40
  },
});
