import { graphql } from "../generated-types";

export const POST_PROJECT_SET_REACTION = graphql(`
  mutation postProjectSetReaction($organizationId: ID!, $postId: ID!, $reactionType: PostReactionType!) {
    postProjectSetReaction(organizationId: $organizationId, postId: $postId, reactionType: $reactionType)
  }
`);
