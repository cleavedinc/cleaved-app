import { graphql } from "../../../generated-types";

export const POST_PROJECT_PIN_MUTATION = graphql(`
  mutation postProjectPin($organizationId: ID!, $postId: ID!) {
    postProjectPin(organizationId: $organizationId, postId: $postId)
  }
`);
