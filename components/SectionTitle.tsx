import { Text, StyleSheet, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SectionTitle({ children }: { children: string }) {
  const { colors } = useTheme();
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.text, { color: colors.text }]}>{children}</Text>
      <View style={[styles.bar, { backgroundColor: colors.primary }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginTop:18, marginBottom:8 },
  text: { fontSize:18, fontWeight:'700' },
  bar: { marginTop:6, height:4, width:42, borderRadius:4 }
});
