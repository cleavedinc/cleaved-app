import { useContext, useMemo } from "react";

import { OrganizationMembershipsContext } from "../contexts";
import { OrgPermissionLevel } from "../generated-types/graphql";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const { organizationMembershipsData } = useContext(OrganizationMembershipsContext);

  return useMemo(() => {
    const accountPermission = organizationMembershipsData && organizationMembershipsData[0].userPermissionInOrg;
    return permissionLevels.some((pl) => pl === accountPermission);
  }, [organizationMembershipsData, permissionLevels]);
};

/* 
Usage:

const hasPermission = useOrganizationPermission([
  OrgPermissionLevel.Admin,
  OrgPermissionLevel.Updater,
  OrgPermissionLevel.Viewer,
]);
*/
