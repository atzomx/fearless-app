import React, { FC, PropsWithChildren } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components/native';

import { LightTheme } from '@core/theme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <SCThemeProvider theme={LightTheme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
