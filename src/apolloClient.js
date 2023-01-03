// export default client;
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
export default async function getApolloClient() {
  const cache = new InMemoryCache();
  await persistCache({
    cache,
    storage: window.localStorage,
  });
  const client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: 'http://localhost:3030/',
    }),
  });
  return client;
}
