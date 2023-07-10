import { logQueryError } from "@cleaved/helpers";
import { ApolloError, QueryResult, useQuery } from "@apollo/client";
import { OrganizationMembershipsQuery } from "../generated-types/graphql";
import { FIND_MY_ORGANIZATION_MEMBERSHIP } from "../gql-queries";
import { useLoginGuard } from "./use-login-guard";

export const useMyOrganizationMembership = (): QueryResult<OrganizationMembershipsQuery> => {
  const { isLoggedIn } = useLoginGuard();

  return useQuery<OrganizationMembershipsQuery>(FIND_MY_ORGANIZATION_MEMBERSHIP, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });
};
