import { graphql } from "../generated-types";

export const ORGANIZATION_MEMBERSHIPS = graphql(`
  query organizationMemberships {
    organizationMemberships {
      id
      name
      userPermissionInOrg
      projectCount
      activeProjectCount
      billingTier
    }
  }
`);
