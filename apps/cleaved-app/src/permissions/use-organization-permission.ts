import { useMemo } from "react";

import { OrgPermissionLevel } from "../generated-types/graphql";
import { useMyOrganizationMembership } from "../hooks";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const query = useMyOrganizationMembership();

  return useMemo(() => {
    const organizationMembershipsData = query.data?.organizationMemberships;
    const accountPermission = organizationMembershipsData && organizationMembershipsData[0].userPermissionInOrg;
    return permissionLevels.some((pl) => pl === accountPermission);
  }, [query, permissionLevels]);
};

/* 
Usage:

const hasPermission = useOrganizationPermission([
  OrgPermissionLevel.Admin,
  OrgPermissionLevel.Updater,
  OrgPermissionLevel.Viewer,
]);
*/
