import { graphql } from "../generated-types";

export const POST_PROJECT_REMOVE_MUTATION = graphql(`
  mutation postProjectRemove($organizationId: ID!, $postId: ID!) {
    postProjectRemove(organizationId: $organizationId, postId: $postId)
  }
`);
