import { forwardRef } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

interface Props extends TextInputProps {}

const SearchBar = forwardRef<TextInput, Props>((props, ref) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }] }>
      <Ionicons name="search" size={18} color={colors.textSecondary} style={{ marginRight:8 }} />
      <TextInput
        ref={ref}
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { color: colors.text }]}
        {...props}
      />
    </View>
  );
});

export default SearchBar;

const styles = StyleSheet.create({
  container: { flexDirection:'row', alignItems:'center', paddingHorizontal:12, borderRadius:14, borderWidth:1, height:46 },
  input: { flex:1, fontSize:15 }
});
