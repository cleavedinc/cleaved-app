import { useContext, useEffect, useState } from "react";

// import { AccountContext } from "../contexts";
import { OrgPermissionLevel } from "../generated-types/graphql";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const [hasPermission, setHasPermission] = useState(false);
  // const { accountData } = useContext(AccountContext);
  // const accountPermission = accountData?.permissionInOrg; // TODO: add this to the model??? Ask jeremy
  const accountPermission = "ADMIN";

  useEffect(() => {
    let foundPermission = false;

    permissionLevels.forEach((permissionLevel) => {
      if (permissionLevel === accountPermission) {
        foundPermission = true;
      }
    });

    setHasPermission(foundPermission);
  }, [permissionLevels, accountPermission]);

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
