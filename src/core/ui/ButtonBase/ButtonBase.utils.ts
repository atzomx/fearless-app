import { CSSObject } from 'styled-components';

import { ButtonVariant, ColorVariant, Theme } from '@core/theme';

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

export const getButtonVariantStyle = ({
  variant,
  theme,
  color,
  disable,
}: TButtonVariantStyle): CSSObject => {
  const currentColor = disable
    ? theme.pallete.action.disabledBackground
    : theme.pallete[color].main;

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
  if (variant === 'contained') return theme.pallete[color].contrastText;
  return theme.pallete[color].main;
};
