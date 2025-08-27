/**
 * Données statiques des recettes
 * Utilise les types centralisés pour la cohérence
 */

import { Recipe } from '../types/recipe';

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Pâtes à la Carbonara',
    description: 'Une version simple et savoureuse des pâtes carbonara.',
  image: require('../assets/images/recette-icon/pates-carbonara.jpg'),
    ingredients: ['Spaghetti', 'Lardons', 'Oeufs', 'Parmesan', 'Poivre'],
    steps: [
      'Cuire les pâtes al dente.',
      'Faire revenir les lardons.',
      'Mélanger oeufs, parmesan et poivre.',
      'Égoutter les pâtes et mélanger hors du feu avec les lardons puis le mélange oeufs/parmesan.'
    ],
    time: '25 min',
    difficulty: 'Facile'
  },
  {
    id: '2',
    title: 'Salade César',
    description: 'Salade croquante avec poulet, parmesan et sauce césar maison.',
  image: require('../assets/images/recette-icon/salade-cesar.jpg'),
    ingredients: ['Laitue romaine', 'Poulet', 'Parmesan', 'Croûtons', 'Sauce césar'],
    steps: [
      'Cuire et découper le poulet.',
      'Préparer la laitue et les croûtons.',
      'Assembler avec la sauce et le parmesan.'
    ],
    time: '15 min',
    difficulty: 'Facile'
  },
  {
    id: '3',
    title: 'Tiramisu',
    description: 'Dessert italien crémeux au café et mascarpone.',
  image: require('../assets/images/recette-icon/tiramisu.jpg'),
    ingredients: ['Mascarpone', 'Oeufs', 'Sucre', 'Café', 'Biscuits cuillère', 'Cacao'],
    steps: [
      'Préparer le café et laisser refroidir.',
      'Battre les jaunes avec le sucre puis ajouter mascarpone.',
      'Monter les blancs en neige et incorporer.',
      'Tremper biscuits dans le café et alterner couches avec la crème.',
      'Réfrigérer et saupoudrer de cacao avant de servir.'
    ],
    time: '4 h',
    difficulty: 'Moyen'
  }
];

// Export des types pour la compatibilité
export type { Recipe, DifficultyLevel } from '../types/recipe';
export default recipes;
