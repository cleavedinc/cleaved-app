import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";

import { AdminOnlyOrganizationMembershipsQuery } from "../generated-types/graphql";
import { ADMIN_ONLY_ORGANIZATION_MEMBERSHIPS } from "../gql-queries";

import { useLoginGuard } from "./use-login-guard";

type AdminOnlyOrganizationMembershipsCustomType = AdminOnlyOrganizationMembershipsQuery["organizationMemberships"][0];

type AdminOnlyOrganizationMembershipsType = {
  adminOnlyOrganizationMembershipsData: AdminOnlyOrganizationMembershipsCustomType | undefined;
  adminOnlyOrganizationMembershipsError: ApolloError | undefined;
  adminOnlyOrganizationMembershipsDataLoading: boolean;
  adminOnlyOrganizationMembershipsDataRefetch: (() => void) | undefined;
};

export const useAdminOnlyOrganizationMemberships = (): AdminOnlyOrganizationMembershipsType => {
  const { isLoggedIn } = useLoginGuard();

  const { data, error, loading, refetch } = useQuery<AdminOnlyOrganizationMembershipsQuery>(
    ADMIN_ONLY_ORGANIZATION_MEMBERSHIPS,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-and-network",
      onError: (error2: ApolloError) => {
        logQueryError(error2);
      },
      skip: !isLoggedIn,
    }
  );

  return {
    adminOnlyOrganizationMembershipsData: data?.organizationMemberships[0],
    adminOnlyOrganizationMembershipsError: error,
    adminOnlyOrganizationMembershipsDataLoading: loading,
    adminOnlyOrganizationMembershipsDataRefetch: refetch,
  };
};
