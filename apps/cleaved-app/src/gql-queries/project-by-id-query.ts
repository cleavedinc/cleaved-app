import { graphql } from "../generated-types";

export const PROJECT_BY_ID_QUERY = graphql(`
  query projectById($projectId: ID!, $organizationId: ID!) {
    projectById(projectId: $projectId, organizationId: $organizationId) {
      id
      name
      totalRootPostCount
      totalResponseCount
    }
  }
`);
