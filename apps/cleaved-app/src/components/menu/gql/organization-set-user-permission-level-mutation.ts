import { graphql } from "../../../generated-types";

export const ORGANIZATION_SET_USER_PERMISSION_LEVEL_MUTATION = graphql(`
  mutation organizationSetUserPermissionLevel(
    $organizationId: ID!
    $userId: ID!
    $permissionLevel: OrgPermissionLevel!
  ) {
    organizationSetUserPermissionLevel(
      organizationId: $organizationId
      userId: $userId
      permissionLevel: $permissionLevel
    )
  }
`);
