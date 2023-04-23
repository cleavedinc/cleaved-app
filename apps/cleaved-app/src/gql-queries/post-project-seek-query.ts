import { graphql } from "../generated-types";

export const POST_PROJECT_SEEK_QUERY = graphql(`
  query postProjectSeek($organizationId: ID!, $projectId: ID, $seekKey: ID, $pageSize: Int) {
    postProjectSeek(organizationId: $organizationId, projectId: $projectId, seekKey: $seekKey, pageSize: $pageSize) {
      id
      body
      accountId
      date
      account {
        id
        firstName
        lastName
        professionals {
          id
          jobTitle
        }
        currentAvatar
      }
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
