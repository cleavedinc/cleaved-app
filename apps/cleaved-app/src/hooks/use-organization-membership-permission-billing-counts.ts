import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";

import { OrganizationMembershipPermissionBillingCountsQuery } from "../generated-types/graphql";
import { ORGANIZATION_MEMBERSHIP_PERMISSION_BILLING_COUNTS } from "../gql-queries";

import { useLoginGuard } from "./use-login-guard";

type OrganizationMembershipPermissionBillingCountsCustomType =
  OrganizationMembershipPermissionBillingCountsQuery["organizationMemberships"][0];

type OrganizationMembershipPermissionBillingCountsType = {
  organizationMembershipPermissionBillingCountsData:
    | OrganizationMembershipPermissionBillingCountsCustomType
    | undefined;
  organizationMembershipPermissionBillingCountsError: ApolloError | undefined;
  organizationMembershipPermissionBillingCountsDataLoading: boolean;
  organizationMembershipPermissionBillingCountsDataRefetch: (() => void) | undefined;
};

export const useOrganizationMembershipPermissionBillingCounts =
  (): OrganizationMembershipPermissionBillingCountsType => {
    const { isLoggedIn } = useLoginGuard();

    const { data, error, loading, refetch } = useQuery<OrganizationMembershipPermissionBillingCountsQuery>(
      ORGANIZATION_MEMBERSHIP_PERMISSION_BILLING_COUNTS,
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
      organizationMembershipPermissionBillingCountsData: data?.organizationMemberships[0],
      organizationMembershipPermissionBillingCountsError: error,
      organizationMembershipPermissionBillingCountsDataLoading: loading,
      organizationMembershipPermissionBillingCountsDataRefetch: refetch,
    };
  };
