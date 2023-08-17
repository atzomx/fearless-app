import * as React from 'react';

import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ApolloClient } from '@core/graphql';
import i18n from '@core/i18n';

import ThemeProvider from './Theme';

const GlobalProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={ApolloClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </ThemeProvider>
      </I18nextProvider>
    </ApolloProvider>
  );
};

export default GlobalProviders;
