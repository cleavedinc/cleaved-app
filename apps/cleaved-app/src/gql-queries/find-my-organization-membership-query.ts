import { graphql } from "../generated-types";

export const FIND_MY_ORGANIZATION_MEMBERSHIP = graphql(`
  query organizationMemberships {
    organizationMemberships {
      id
      name
      userPermissionInOrg
    }
  }
`);
