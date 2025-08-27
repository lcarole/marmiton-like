import { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../hooks/useTheme';

interface ScreenProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  edges?: ('top' | 'right' | 'bottom' | 'left')[];
}

export default function Screen({ children, style, edges = ['top','left','right'] }: ScreenProps) {
  const { colors } = useTheme();
  return <SafeAreaView style={[styles.root, { backgroundColor: colors.background }, style]} edges={edges}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: { flex:1 }
});
