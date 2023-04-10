import { graphql } from "../generated-types";

export const GENERATE_ORGANIZATION_SHARE_LINK_MUTATION = graphql(`
  mutation generateOrganizationShareLink($organizationId: ID!, $permission: OrgPermissionLevel!) {
    generateOrganizationShareLink(organizationId: $organizationId, permission: $permission)
  }
`);
