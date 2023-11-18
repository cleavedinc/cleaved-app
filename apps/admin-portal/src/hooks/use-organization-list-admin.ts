import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery, QueryResult } from "@apollo/client";
import { OrganizationListAdminQuery } from "../generated-types/graphql";
import { ORGANIZATION_LIST_ADMIN } from "../gql-queries";
import { useLoginGuard } from "./use-login-guard";

export const useOrganizationListAdmin = (
  page?: number | null,
  limit?: number | null
): QueryResult<OrganizationListAdminQuery> => {
  const { isLoggedIn } = useLoginGuard();

  return useQuery<OrganizationListAdminQuery>(ORGANIZATION_LIST_ADMIN, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
    variables: { page, limit },
  });
};
