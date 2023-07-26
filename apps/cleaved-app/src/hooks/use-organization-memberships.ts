import { logQueryError } from "@cleaved/helpers";
import { ApolloError, QueryResult, useQuery } from "@apollo/client";

import { OrganizationMembershipsQuery } from "../generated-types/graphql";
import { ORGANIZATION_MEMBERSHIPS } from "../gql-queries";

import { useLoginGuard } from "./use-login-guard";

export const useOrganizationMemberships = (): QueryResult<OrganizationMembershipsQuery> => {
  const { isLoggedIn } = useLoginGuard();

  return useQuery<OrganizationMembershipsQuery>(ORGANIZATION_MEMBERSHIPS, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });
};
