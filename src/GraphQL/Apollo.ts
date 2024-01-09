/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
// @ts-ignore
import { GRAPHQL_URL } from "../../config";


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    // set header for CORS
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      }
    }
  });

  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL || GRAPHQL_URL,
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    name: "react-web-client",
    version: "1.0",
});

export default client;