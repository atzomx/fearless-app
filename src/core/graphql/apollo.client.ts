import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { BASE_URL } from '@env';
import fetch from 'cross-fetch';

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const client = new ApolloClient({
  link: new HttpLink({ uri: BASE_URL, fetch }),
  cache: new InMemoryCache(),
});

export default client;
