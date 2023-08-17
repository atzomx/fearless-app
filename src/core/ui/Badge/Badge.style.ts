import styled from 'styled-components/native';

import {
  AlignHorizontal,
  AlignVertical,
  BadgeVariant,
  ColorVariant,
} from '@core/theme/theme';

import { getBadgeVariantStyle, getBadgeValueVariantStyle } from './Badge.utils';

type BadgeMaker = {
  color: ColorVariant;
  variant: BadgeVariant;
  alignment: { horizontal: AlignHorizontal; vertical: AlignVertical };
};
export const BadgeContainer = styled.View(({}) => ({
  position: 'relative',
}));

export const BadgeCircle = styled.View<BadgeMaker>(
  ({ color, theme, variant, alignment }) => ({
    ...getBadgeVariantStyle({ variant, alignment }),
    ...theme.components.Badge.circle,
    backgroundColor: theme.pallete[color].main,
  }),
);

export const BadgeValue = styled.Text<{ variant: BadgeVariant }>(
  ({ variant, theme }) => ({
    ...getBadgeValueVariantStyle({ variant }),
    ...theme.components.Badge.value,
  }),
);

export const BadgeView = styled.View({
  flexDirection: 'row',
});
