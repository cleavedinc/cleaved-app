import { graphql } from "../generated-types";

export const POST_PROJECT_REPLY = graphql(`
  mutation postProjectReply($organizationId: ID!, $postOrPostReplyId: ID!, $body: String!) {
    postProjectReply(organizationId: $organizationId, postOrPostReplyId: $postOrPostReplyId, body: $body)
  }
`);
