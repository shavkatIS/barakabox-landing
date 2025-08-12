import React from 'react';
import { Text as RNText, TouchableOpacity, View, TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from 'src/theme';

export const Text = ({ style, weight = 'regular', ...props }: RNText['props'] & { weight?: 'regular' | 'semibold' | 'bold' }) => {
  const fontFamily = theme.fonts[weight];
  return <RNText {...props} style={[{ color: theme.colors.text, fontFamily }, style]} />;
};

export const Button = ({ title, onPress, style, variant = 'primary' }: { title: string; onPress?: () => void; style?: ViewStyle; variant?: 'primary' | 'ghost' }) => {
  const backgroundColor = variant === 'primary' ? theme.colors.primary : 'transparent';
  const color = variant === 'primary' ? '#fff' : theme.colors.text;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
      <Text style={{ color }} weight="semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Card = ({ children, style }: { children: React.ReactNode; style?: ViewStyle }) => (
  <View style={[styles.card, style]}>{children}</View>
);

export const Input = ({ style, ...props }: React.ComponentProps<typeof TextInput>) => (
  <TextInput
    placeholderTextColor={theme.colors.muted}
    style={[styles.input, style]}
    {...props}
  />
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
    padding: 16,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: theme.colors.text,
  },
});