import { graphql } from "../../../generated-types";

export const ORGANIZATION_REMOVE_USER_MUTATION = graphql(`
  mutation organizationRemoveUser($organizationId: ID!, $userId: ID!) {
    organizationRemoveUser(organizationId: $organizationId, userId: $userId)
  }
`);
