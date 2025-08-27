/**
 * Hook de thème simplifié et optimisé
 * Gère automatiquement la détection du thème système
 */

import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import Colors from '../constants/Colors';

export type ThemeName = 'light' | 'dark';
export type ThemeColors = typeof Colors.light;

interface ThemeContextValue {
  theme: ThemeName;
  colors: ThemeColors;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemTheme = useColorScheme();
  const theme: ThemeName = systemTheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[theme];
  const isDark = theme === 'dark';

  const value: ThemeContextValue = {
    theme,
    colors,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return context;
}
