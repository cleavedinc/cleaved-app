import { graphql } from "../generated-types";

export const POST_PROJECT_ACCOUNT_SEEK_QUERY = graphql(`
  query postProjectAccountSeek($organizationId: ID!, $projectId: ID!, $seekKey: ID, $pageSize: Int) {
    postProjectAccountSeek(
      organizationId: $organizationId
      projectId: $projectId
      seekKey: $seekKey
      pageSize: $pageSize
    ) {
      id
      firstName
      lastName
      currentAvatar
    }
  }
`);
