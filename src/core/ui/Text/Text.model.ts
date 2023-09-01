import { AlignText, TextColor, TextVariant, TextWeight } from '@core/theme';

export type TextProps = {
  align?: AlignText;
  color?: TextColor | string;
  fontSize?: number;
  fontWeight?: TextWeight;
  variant?: TextVariant;
};
