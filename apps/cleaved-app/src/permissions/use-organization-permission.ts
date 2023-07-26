import { useMemo } from "react";
import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";
import { OrganizationGetMembershipQuery, OrgPermissionLevel } from "../generated-types/graphql";
import { ORGANIZATION_GET_MEMBERSHIP } from "../gql-queries";
import { useLoginGuard } from "../hooks";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const { isLoggedIn } = useLoginGuard();

  const { data, loading, refetch } = useQuery<OrganizationGetMembershipQuery>(ORGANIZATION_GET_MEMBERSHIP, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onCompleted: (data2) => {
      console.log("some data2", data2);
    },
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });

  return useMemo(() => {
    const organizationGetMembershipData = data?.organizationGetMembership;
    const accountPermission = organizationGetMembershipData && organizationGetMembershipData[0].userPermissionInOrg;

    return permissionLevels.some((pl) => pl === accountPermission);
  }, [data, permissionLevels]);
};

// Original Code
// export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
//   const query = useMyOrganizationMembership();

//   return useMemo(() => {
//     const organizationMembershipsData = query.data?.organizationMemberships;
//     const accountPermission = organizationMembershipsData && organizationMembershipsData[0].userPermissionInOrg;
//     return permissionLevels.some((pl) => pl === accountPermission);
//   }, [query, permissionLevels]);
// };

/* 
Usage:

const hasPermission = useOrganizationPermission([
  OrgPermissionLevel.Admin,
  OrgPermissionLevel.Updater,
  OrgPermissionLevel.Viewer,
]);
*/
