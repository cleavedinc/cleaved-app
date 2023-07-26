import { graphql } from "../generated-types";

export const ORGANIZATION_GET_MEMBERSHIP = graphql(`
  query organizationGetMembership {
    organizationGetMembership {
      id
      name
      userPermissionInOrg
    }
  }
`);
