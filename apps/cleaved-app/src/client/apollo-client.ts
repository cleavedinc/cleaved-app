import { ApolloClient, ApolloLink, concat, from, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { navigate } from "@reach/router";

import { logError, RollbarLogLevels } from "@cleaved/helpers";

import { routeConstantsCleavedApp } from "../router";

const httpLink = createUploadLink({ uri: process.env.GRAPHQL_API_SERVICE_URL, credentials: "omit" });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = (window as unknown as { _cleaved_cat_token: null | string | undefined })._cleaved_cat_token;
  // add the authorization to the headers
  operation.setContext({
    headers: {
      // eslint-disable-next-line no-underscore-dangle
      authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ extensions }) => {
      // navigate users to the TOS page it not accepted
      if (extensions.code === "TERMS_NOT_ACCEPTED") {
        navigate(routeConstantsCleavedApp.termsOfServiceAgreement.route);
      }
    });

  if (networkError) {
    logError(RollbarLogLevels.error, "Network error", networkError);
  }
});

export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: true,
    }),
    link: from([errorLink, concat(authMiddleware, httpLink as any)]), // eslint-disable-line
  });
};

export const apolloClient = createApolloClient();
