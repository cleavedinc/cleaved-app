import { useContext, useMemo } from "react";
import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";

import { authTokenContext } from "../contexts";
import { OrganizationGetMembershipQuery, OrgPermissionLevel } from "../generated-types/graphql";
import { ORGANIZATION_GET_MEMBERSHIP } from "../gql-queries";
import { useLoginGuard } from "../hooks";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data } = useQuery<OrganizationGetMembershipQuery>(ORGANIZATION_GET_MEMBERSHIP, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
    variables: { organizationId: preferredOrgId },
  });

  return useMemo(() => {
    const organizationGetMembershipData = data?.organizationGetMembership;
    const accountPermission =
      organizationGetMembershipData &&
      organizationGetMembershipData.userPermissionInOrg &&
      organizationGetMembershipData.userPermissionInOrg;

    return permissionLevels.some((pl) => pl === accountPermission);
  }, [data, permissionLevels]);
};

/* 
Usage:

const hasPermission = useOrganizationPermission([
  OrgPermissionLevel.Admin,
  OrgPermissionLevel.Updater,
  OrgPermissionLevel.Viewer,
]);
*/
