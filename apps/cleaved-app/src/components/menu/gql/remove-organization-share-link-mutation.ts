import { graphql } from "../../../generated-types";

export const REMOVE_ORGANIZATION_SHARE_LINK_MUTATION = graphql(`
  mutation removeOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {
    removeOrganizationShareLink(organizationId: $organizationId, permission: $permission)
  }
`);
