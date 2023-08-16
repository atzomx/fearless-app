import { CSSObject } from 'styled-components';

import { ButtonVariant, ColorVariant, Theme } from '@core/theme/theme';

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
  return disable
    ? theme.pallete.action.disabled
    : variant === 'contained'
    ? theme.pallete[color].contrastText
    : theme.pallete[color].main;
};
