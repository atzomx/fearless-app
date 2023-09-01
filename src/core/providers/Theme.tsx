import React, { FC, PropsWithChildren } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components/native';

import Theme from '@core/theme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <SCThemeProvider theme={Theme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
