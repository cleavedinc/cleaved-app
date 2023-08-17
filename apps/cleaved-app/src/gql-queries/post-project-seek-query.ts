import { graphql } from "../generated-types";

export const POST_PROJECT_SEEK_QUERY = graphql(`
  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int, $pinnedFirst: Boolean) {
    postProjectSeek(
      organizationId: $organizationId
      projectId: $projectId
      seekKey: $seekKey
      pageSize: $pageSize
      pinnedFirst: $pinnedFirst
    ) {
      id
      body
      accountId
      date
      account {
        id
        firstName
        lastName
        jobTitle
        currentAvatar
      }
      isPinned
      reactionTotalCount
      reactionsExpressed
      myReaction
      repliesCount
      images
      project {
        id
        name
      }
    }
  }
`);
