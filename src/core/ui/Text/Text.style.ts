import styled from 'styled-components/native';

import { TextColor } from '@core/theme';

import { TextProps } from './Text.model';

export const Text = styled.Text<TextProps>(
  ({
    theme,
    align = 'left',
    color = 'primary',
    fontSize,
    variant = 'body1',
    fontWeight = 400,
  }) => ({
    ...theme.components.Text[variant],
    color: theme.pallete.text[color as TextColor] || color,
    textAlign: align,
    ...(fontWeight && { fontFamily: theme.font[fontWeight] }),
    ...(fontSize && { fontSize }),
  }),
);
