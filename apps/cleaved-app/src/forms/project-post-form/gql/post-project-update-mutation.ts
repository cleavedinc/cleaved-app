import { graphql } from "../../../generated-types";

export const POST_PROJECT_UPDATE = graphql(`
  mutation postProjectUpdate($organizationId: ID!, $postId: ID!, $body: String!) {
    postProjectUpdate(organizationId: $organizationId, postId: $postId, body: $body)
  }
`);
