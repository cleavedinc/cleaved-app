import { OrgPermissionLevel } from "../generated-types/graphql";

export const convertPermissionInOrgReadable = (permission: OrgPermissionLevel, translate: any): string => {
  switch (permission) {
    case OrgPermissionLevel.Admin:
      return translate("permission.admin");
      break;
    case OrgPermissionLevel.Updater:
      return translate("permission.updater");
      break;
    case OrgPermissionLevel.Viewer:
    default:
      return translate("permission.viewer");
  }
};
