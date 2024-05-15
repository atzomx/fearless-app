import { CSSObject } from 'styled-components';

export type ButtonBase = {
  outlined: CSSObject;
  contained: CSSObject;
  disabled?: CSSObject;
  soft?: CSSObject;
};

export type BadgeBase = {
  circle: CSSObject;
  value: CSSObject;
};

export type ColorVariant = 'primary' | 'secondary' | string;

export type BadgeVariant = 'dot' | 'standard';

export type AlignHorizontal = 'left' | 'right';

export type AlignVertical = 'bottom' | 'top';

export type AlignText = 'center' | 'left' | 'right';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'button'
  | 'caption';

export type ButtonVariant = 'outlined' | 'contained';

export type VariantSize = 'small' | 'medium' | 'large' | 'xlarge';

export type AvatarBase = {
  small: CSSObject;
  medium: CSSObject;
  large: CSSObject;
  xlarge: CSSObject;
};

export type PaletteColor = {
  primary: string;
  secondary: string;
  disabled: string;
  'primary.main': string;
  'primary.light': string;
  'primary.dark': string;
  'secondary.main': string;
  'secondary.light': string;
  'secondary.dark': string;
  black: string;
  white: string;
};

export type ThemeColor = keyof PaletteColor;

export type paletteFullColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type paletteMainColor = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

export type InputTextBase = {
  label: CSSObject;
  container: CSSObject;
  adorment: CSSObject;
  input: CSSObject;
  helper: CSSObject;
};

export type TextWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'Thin'
  | 'ExtraLight'
  | 'Light'
  | 'Regular'
  | 'Medium'
  | 'SemiBold'
  | 'Bold'
  | 'ExtraBold'
  | 'Back';

export type TextBase = {
  h1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
  h6: CSSObject;
  body1: CSSObject;
  body2: CSSObject;
  subtitle1: CSSObject;
  subtitle2: CSSObject;
  button: CSSObject;
  caption: CSSObject;
};

export type SubColor =
  | 'primary.main'
  | 'primary.light'
  | 'primary.dark'
  | 'secondary.main'
  | 'secondary.light'
  | 'secondary.dark'
  | 'success.main'
  | 'success.light'
  | 'success.dark'
  | 'error.main'
  | 'error.light'
  | 'error.dark'
  | 'warning.main'
  | 'warning.light'
  | 'warning.dark'
  | 'info.main'
  | 'info.light'
  | 'info.dark';

export type PaletteBase = {
  background: string;
  common: {
    black: string;
    white: string;
  };
  action: {
    disabled: string;
    disabledBackground: string;
  };
  primary: paletteMainColor;
  secondary: paletteMainColor;
  grey: paletteFullColor;
  colors: PaletteColor & {
    [key in SubColor]: string;
  };
  text: PaletteColor & {
    [key in SubColor]: string;
  };
  error: paletteMainColor;
  warning: paletteMainColor;
  info: paletteMainColor;
  success: paletteMainColor;
};
