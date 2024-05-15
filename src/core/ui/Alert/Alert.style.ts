import styled from 'styled-components/native';

import { SubColor } from '@core/theme';

export type ColorVariant = 'success' | 'error' | 'info' | 'warning';

const BG: Record<ColorVariant, SubColor> = {
  success: 'success.light',
  error: 'error.light',
  info: 'info.light',
  warning: 'warning.light',
};

export const Content = styled.View<{ variant: ColorVariant }>(
  ({ theme, variant }) => ({
    borderRadius: theme.spacingSingle(1),
    backgroundColor: theme.fade(theme.palette.colors[BG[variant]]),
  }),
);
