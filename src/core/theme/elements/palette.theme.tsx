import { PaletteBase } from '../types';

export const ColorError = {
  main: '#d32f2f',
  light: '#ef5350',
  dark: '#c62828',
  contrastText: '#fff',
};
export const ColorWarning = {
  main: '#ed6c02',
  light: '#ff9800',
  dark: '#e65100',
  contrastText: '#fff',
};

export const ColorInfo = {
  main: '#0288d1',
  light: '#03a0f4',
  dark: '#01579b',
  contrastText: '#fff',
};

export const ColorSuccess = {
  main: '#2e7d32',
  light: '#4caf50',
  dark: '#1b5e20',
  contrastText: '#fff',
};

export const ColorPrimary = {
  light: '#000',
  main: '#000',
  dark: '#000',
  contrastText: '#fff',
};

export const ColorSecondary = {
  light: '#51c3fe',
  main: '#51c3fe',
  dark: '#18516e',
  contrastText: '#fff',
};

export const CommonColors = {
  black: '#000000',
  white: '#FFFFFF',
};

export const ColorsTheme = {
  ...CommonColors,
  primary: '#262626dd',
  secondary: '#50505099',
  disabled: '#93939360',
  'primary.main': ColorPrimary.main,
  'primary.light': ColorPrimary.light,
  'primary.dark': ColorPrimary.dark,
  'secondary.main': ColorSecondary.main,
  'secondary.light': ColorSecondary.light,
  'secondary.dark': ColorSecondary.dark,

  'success.main': ColorSuccess.main,
  'success.light': ColorSuccess.light,
  'success.dark': ColorSuccess.dark,

  'warning.main': ColorWarning.main,
  'warning.light': ColorWarning.light,
  'warning.dark': ColorWarning.dark,

  'error.main': ColorError.main,
  'error.light': ColorError.light,
  'error.dark': ColorError.dark,

  'info.main': ColorInfo.main,
  'info.light': ColorInfo.light,
  'info.dark': ColorInfo.dark,
};

export const palette: PaletteBase = {
  background: '#fff',
  common: CommonColors,
  action: {
    disabled: '#00000042',
    disabledBackground: '#0000001f',
  },
  primary: ColorPrimary,
  secondary: ColorSecondary,
  grey: {
    50: '#f5f5f5be',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  colors: ColorsTheme,
  text: ColorsTheme,
  error: ColorError,
  warning: ColorWarning,
  info: ColorInfo,
  success: ColorSuccess,
};

export default palette;
