import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BASE_URL } from '@env';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({ uri: BASE_URL, fetch }),
  cache: new InMemoryCache(),
});

export default client;
