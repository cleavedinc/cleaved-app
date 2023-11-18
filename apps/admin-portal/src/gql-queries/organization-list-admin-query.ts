import { graphql } from "../generated-types";

export const ORGANIZATION_LIST_ADMIN = graphql(`
  query organizationListAdmin($page: Int, $limit: Int) {
    organizationListAdmin(page: $page, limit: $limit) {
      id
      name
      userPermissionInOrg
      memberCount
      projectCount
      activeProjectCount
      billingTier
    }
  }
`);
