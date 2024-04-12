import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetch from 'cross-fetch';

import { RefreshTokenResult, RefreshTokensDocument } from './generated';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const AUTH_CODE_ERROR = 'UNAUTHENTICATED';
const TOKEN_HASH = 'Bearer';

const TOKEN_KEY = 'token';
const REFRESH_KEY = 'refreshToken';

const refreshSession = async () => {
  const { data } = await client.mutate<RefreshTokenResult>({
    mutation: RefreshTokensDocument,
  });

  const refreshToken = data?.refreshToken;
  const token = data?.token;

  if (refreshToken && token) {
    Promise.all([
      AsyncStorage.setItem(TOKEN_KEY, token),
      AsyncStorage.setItem(REFRESH_KEY, refreshToken),
    ]);
  }
};

const errorLink = onError(({ graphQLErrors, forward, operation }) => {
  graphQLErrors?.forEach(({ extensions }) => {
    console.log(extensions);
    if (extensions?.code === AUTH_CODE_ERROR) {
      refreshSession().then(() => {
        return forward(operation);
      });
    }
  });
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  if (token) headers.authorization = `${TOKEN_HASH} ${token}`;
  return { headers };
});

const httpLink = new HttpLink({ uri: BASE_URL, fetch });

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  credentials: 'include',
});

export default client;
