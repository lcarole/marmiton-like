/**
 * Layout principal de l'application
 */

import { Stack } from 'expo-router';
import { ThemeProvider, useTheme } from '../hooks/useTheme';

function NavigationContent() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerBackButtonDisplayMode: 'minimal',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: colors.text,
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="recipes/[id]" options={{ title: 'Recette' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <NavigationContent />
    </ThemeProvider>
  );
}
