import { useContext, useEffect, useState } from "react";

import { OrganizationMembershipsContext } from "../contexts";
import { OrgPermissionLevel } from "../generated-types/graphql";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const [hasPermission, setHasPermission] = useState(false);
  const { organizationMembershipsData, organizationMembershipsDataLoading } =
    useContext(OrganizationMembershipsContext);
  const accountPermission = organizationMembershipsData && organizationMembershipsData[0].userPermissionInOrg;

  useEffect(() => {
    let foundPermission = false;

    permissionLevels.forEach((permissionLevel) => {
      if (permissionLevel === accountPermission) {
        foundPermission = true;
      }
    });

    setHasPermission(foundPermission);
  }, [accountPermission, organizationMembershipsData, organizationMembershipsDataLoading, permissionLevels]);

  return hasPermission;
};

/* 
Usage:

const hasPermission = useOrganizationPermission([
  OrgPermissionLevel.Admin,
  OrgPermissionLevel.Updater,
  OrgPermissionLevel.Viewer,
]);
*/
