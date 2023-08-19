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

// function offsetFromCursor(items: [any], seekKey: string, readField: any) {
//   // Search from the back of the list because the cursor we're
//   // looking for is typically the ID of the last item.
//   for (let i = items.length - 1; i >= 0; i -= 1) {
//     const item = items[i];
//     // Using readField works for both non-normalized objects
//     // (returning item.id) and normalized references (returning
//     // the id field from the referenced entity object), so it's
//     // a good idea to use readField when you're not sure what
//     // kind of elements you're dealing with.
//     if (readField("id", item) === seekKey) {
//       // Add one because the cursor identifies the item just
//       // before the first item in the page we care about.
//       return i + 1;
//     }
//   }
//   // Report that the cursor could not be found.
//   return -1;
// }

export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: true,
    }),
    link: from([errorLink, concat(authMiddleware, httpLink as any)]), // eslint-disable-line
  });
};

export const apolloClient = createApolloClient();
