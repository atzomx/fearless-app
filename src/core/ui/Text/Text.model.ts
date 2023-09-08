import { AlignText, TextVariant, TextWeight, ThemeColor } from '@core/theme';

export type TextProps = {
  align?: AlignText;
  color?: ThemeColor | string;
  fontSize?: number;
  fontWeight?: TextWeight;
  variant?: TextVariant;
};
