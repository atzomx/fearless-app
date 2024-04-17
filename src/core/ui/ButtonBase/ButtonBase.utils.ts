import { CSSObject } from 'styled-components';

import DefaultTheme, { ButtonVariant, ColorVariant, Theme } from '@core/theme';

export type TButtonVariantStyle = {
  variant: ButtonVariant;
  theme: Theme;
  color: ColorVariant;
  disabled: boolean;
};

export type ButtonMakerProps = {
  color: ColorVariant;
  variant: ButtonVariant;
  disabled: boolean;
};

type Color = keyof typeof DefaultTheme.palette;

export const getButtonVariantStyle = ({
  variant,
  theme,
  color,
  disabled,
}: TButtonVariantStyle): CSSObject => {
  const currentColor = disabled
    ? theme.palette.action.disabledBackground
    : // @ts-ignore
      theme.palette[color as Color]?.main ?? color;

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
  disabled,
}: TButtonVariantStyle) => {
  if (disabled) return theme.palette.action.disabled;
  if (variant === 'contained')
    // @ts-ignore
    return theme.palette[color as Color]?.contrastText ?? color;
  // @ts-ignore
  return theme.palette[color as Color].main;
};
