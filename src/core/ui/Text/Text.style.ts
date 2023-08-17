import styled from 'styled-components/native';

import { AlignText, TextColor, TextVariant } from '@core/theme/theme';

export const Text = styled.Text<{
  align: AlignText;
  variant: TextVariant;
  color: TextColor;
}>(({ theme, variant, color, align }) => ({
  ...theme.components.Text[variant],
  color: theme.pallete.text[color],
  textAlign: align,
}));
