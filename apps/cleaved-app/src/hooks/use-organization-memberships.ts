import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";

import { OrganizationMembershipsQuery } from "../generated-types/graphql";
import { ORGANIZATION_MEMBERSHIPS } from "../gql-queries";

import { useLoginGuard } from "./use-login-guard";

type OrganizationMembershipsCustomType = OrganizationMembershipsQuery["organizationMemberships"];

type OrganizationMembershipsType = {
  organizationMembershipsData: OrganizationMembershipsCustomType | undefined;
  organizationMembershipsError: ApolloError | undefined;
  organizationMembershipsDataLoading: boolean;
  organizationMembershipsDataRefetch: (() => void) | undefined;
};

export const useOrganizationMemberships = (): OrganizationMembershipsType => {
  const { isLoggedIn } = useLoginGuard();

  const { data, error, loading, refetch } = useQuery<OrganizationMembershipsQuery>(ORGANIZATION_MEMBERSHIPS, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error2: ApolloError) => {
      logQueryError(error2);
    },
    skip: !isLoggedIn,
  });

  return {
    organizationMembershipsData: data?.organizationMemberships,
    organizationMembershipsError: error,
    organizationMembershipsDataLoading: loading,
    organizationMembershipsDataRefetch: refetch,
  };
};
