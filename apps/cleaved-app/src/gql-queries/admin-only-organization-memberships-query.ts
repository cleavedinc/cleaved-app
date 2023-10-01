import { graphql } from "../generated-types";

export const ADMIN_ONLY_ORGANIZATION_MEMBERSHIPS = graphql(`
  query adminOnlyOrganizationMemberships {
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
