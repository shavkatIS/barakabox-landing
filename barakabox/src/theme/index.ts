import { colors } from './colors';
import { spacing } from './spacing';

export const theme = {
  colors,
  spacing,
  fonts: {
    regular: 'Inter_400Regular',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
} as const;

export type Theme = typeof theme;
export { colors, spacing };