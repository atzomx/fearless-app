import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { useTheme, DefaultTheme } from 'styled-components/native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

const makeStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  styled: (theme: DefaultTheme) => T | NamedStyles<T>,
): (() => T | StyleSheet.NamedStyles<T>) => {
  const useStyles = (): StyleSheet.NamedStyles<T> => {
    const theme = useTheme();
    return StyleSheet.create(styled(theme));
  };
  return useStyles;
};

export default makeStyles;
