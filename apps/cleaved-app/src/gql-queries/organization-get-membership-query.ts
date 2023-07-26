import { graphql } from "../generated-types";

export const ORGANIZATION_GET_MEMBERSHIP = graphql(`
  query organizationGetMembership($organizationId: ID!) {
    organizationGetMembership(organizationId: $organizationId) {
      id
      name
      userPermissionInOrg
    }
  }
`);
