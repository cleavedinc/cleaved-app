import { ApolloError, DocumentNode } from "@apollo/client";

import { logError } from "../log-error";

import { RollbarLogLevels } from "../types";

export type GetQueryOptions<V> = {
  query: DocumentNode;
  queryName?: string;
  variables: V;
};

/**
 * @description
 * Logs GraphQL Query Errors
 * @param err error thrown by apollo graphql
 * @param options getQuery options from teh query that failed
 **/
export const logQueryError = <V>(err: ApolloError, options?: GetQueryOptions<V>): void => {
  logError(
    RollbarLogLevels.error,
    `Error name: ${err.name}\nfrom ${options && options.queryName} with message: ${err.message}\nstacktrace: ${
      err.stack
    }`,
    err.networkError
  );
};
