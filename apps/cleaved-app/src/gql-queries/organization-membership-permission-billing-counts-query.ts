import { graphql } from "../generated-types";

export const ORGANIZATION_MEMBERSHIP_PERMISSION_BILLING_COUNTS = graphql(`
  query organizationMembershipPermissionBillingCounts {
    organizationMemberships {
      id
      userPermissionInOrg
      memberCount
      projectCount
      billingTier
    }
  }
`);
