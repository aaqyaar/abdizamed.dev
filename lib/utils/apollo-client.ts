import { ApolloClient, InMemoryCache } from "@apollo/client";

if (!process.env.NEXT_PUBLIC_API_GRAPHQL) {
  console.error("NEXT_PUBLIC_API_GRAPHQL is not defined");
  throw new Error("NEXT_PUBLIC_API_GRAPHQL is not defined");
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL,
  cache: new InMemoryCache(),
});

export default client;
