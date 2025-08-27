import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function Badge({ label }: { label: string }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.badge, { backgroundColor: colors.accent + '22', borderColor: colors.accent + '55' }] }>
      <Text style={[styles.text, { color: colors.accent }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { paddingHorizontal:10, paddingVertical:4, borderRadius:20, borderWidth:1 },
  text: { fontSize:12, fontWeight:'600' }
});
