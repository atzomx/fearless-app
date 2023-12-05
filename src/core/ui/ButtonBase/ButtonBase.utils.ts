import { CSSObject } from 'styled-components';

import DefaultTheme, { ButtonVariant, ColorVariant, Theme } from '@core/theme';

export type TButtonVariantStyle = {
  variant: ButtonVariant;
  theme: Theme;
  color: ColorVariant;
  disable: boolean;
};

export type ButtonMakerProps = {
  color: ColorVariant;
  variant: ButtonVariant;
  disable: boolean;
};

type Color = keyof typeof DefaultTheme.pallete;

export const getButtonVariantStyle = ({
  variant,
  theme,
  color,
  disable,
}: TButtonVariantStyle): CSSObject => {
  const currentColor = disable
    ? theme.pallete.action.disabledBackground
    : // @ts-ignore
      theme.pallete[color as Color]?.main ?? color;

  const variants = {
    contained: {
      backgroundColor: currentColor,
    },
    outlined: {
      borderColor: currentColor,
    },
  };
  return variants[variant];
};

export const getContentVariantStyle = ({
  variant,
  theme,
  color,
  disable,
}: TButtonVariantStyle) => {
  if (disable) return theme.pallete.action.disabled;
  if (variant === 'contained')
    // @ts-ignore
    return theme.pallete[color as Color]?.contrastText ?? color;
  // @ts-ignore
  return theme.pallete[color as Color].main;
};
