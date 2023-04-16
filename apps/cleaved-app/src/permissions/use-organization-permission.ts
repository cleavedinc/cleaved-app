import { useContext, useEffect, useState } from "react";

// import { AccountContext } from "../contexts";
import { OrgPermissionLevel } from "../generated-types/graphql";

export const useOrganizationPermission = (permissionLevels: OrgPermissionLevel[]): boolean => {
  const [hasPermission, setHasPermission] = useState(false);
  // const { accountData } = useContext(AccountContext);
  // const accountPermission = accountData?.permissionInOrg; // TODO: add this to the model??? Ask jeremy
  const accountPermission = "ADMIN"; // ADMIN, VIEWER, UPDATER

  useEffect(() => {
    let foundPermission = false;

    permissionLevels.forEach((permissionLevel) => {
      if (permissionLevel === accountPermission) {
        console.log("hit");

        foundPermission = true;
      }
    });

    setHasPermission(foundPermission);
  }, [permissionLevels, accountPermission]);

  console.log("hasPermission 11111", hasPermission);

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
