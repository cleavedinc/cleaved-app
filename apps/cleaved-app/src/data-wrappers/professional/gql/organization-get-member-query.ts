import { graphql } from "../../../generated-types";

export const ORGANIZATION_GET_MEMBER_QUERY = graphql(`
  query organizationGetMember($organizationId: ID!, $memberId: ID!) {
    organizationGetMember(organizationId: $organizationId, memberId: $memberId) {
      about
      emailAddress
      id
      firstName
      goals
      lastName
      currentAvatar
      jobTitle
    }
  }
`);
