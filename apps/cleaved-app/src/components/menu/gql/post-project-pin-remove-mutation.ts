import { graphql } from "../../../generated-types";

export const POST_PROJECT_PIN_REMOVE_MUTATION = graphql(`
  mutation postProjectPinRemove($organizationId: ID!, $postId: ID!) {
    postProjectPinRemove(organizationId: $organizationId, postId: $postId)
  }
`);
