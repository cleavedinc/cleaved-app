import { graphql } from "../generated-types";

export const ORGANIZATION_SEEK_MEMBERS_QUERY = graphql(`
  query organizationSeekMembers($organizationId: ID!, $seekKey: ID, $pageSize: Int) {
    organizationSeekMembers(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {
      id
      firstName
      lastName
      currentAvatar
      jobTitle
      permissionInOrg
    }
  }
`);
