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
import fetch from 'cross-fetch';

import Session from '@core/utils/Session';

import { RefreshTokenResult, RefreshTokensDocument } from './generated';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const SESSION_EXPIRED_ERROR = 'SESSION_EXPIRED';
const TOKEN_HASH = 'Bearer';

const refreshSession = async () => {
  const { data } = await client.mutate<RefreshTokenResult>({
    mutation: RefreshTokensDocument,
  });

  const refreshToken = data?.refreshToken;
  const token = data?.token;

  if (refreshToken && token) {
    await Session.create({ token, refreshToken });
  }
};

const errorLink = onError(({ graphQLErrors, forward, operation }) => {
  graphQLErrors?.forEach(({ extensions }) => {
    if (extensions?.code === SESSION_EXPIRED_ERROR) {
      refreshSession().then(() => {
        return forward(operation);
      });
    }
  });
});

const authLink = setContext(async (_, { headers = {} }) => {
  const { token } = await Session.get();
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
