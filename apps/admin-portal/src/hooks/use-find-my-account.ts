import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery, QueryResult } from "@apollo/client";
import { FindMyAccountQuery } from "../generated-types/graphql";
import { FIND_MY_ACCOUNT } from "../gql-queries";
import { useLoginGuard } from "./use-login-guard";

export const useFindMyAccount = (): QueryResult<FindMyAccountQuery> => {
  const { isLoggedIn } = useLoginGuard();

  return useQuery<FindMyAccountQuery>(FIND_MY_ACCOUNT, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });
};
