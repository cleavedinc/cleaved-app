import { graphql } from "../generated-types";

export const POST_PROJECT_REPLIES = graphql(`
  query postProjectReplies($organizationId: ID!, $parentPostId: ID!, $seekKey: ID, $pageSize: Int) {
    postProjectReplies(
      organizationId: $organizationId
      parentPostId: $parentPostId
      seekKey: $seekKey
      pageSize: $pageSize
    ) {
      id
      body
      date
      account {
        id
        firstName
        lastName
        jobTitle
        currentAvatar
      }
      reactionTotalCount
      reactionsExpressed
      myReaction
      initialReplies {
        id
        body
        date
        account {
          id
          firstName
          lastName
          jobTitle
          currentAvatar
        }
        reactionTotalCount
        reactionsExpressed
        myReaction
        repliesCount
        nestedRepliesCount
        images
      }
      repliesCount
      nestedRepliesCount
      images
    }
  }
`);
