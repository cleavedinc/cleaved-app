import { graphql } from "../../../generated-types";

export const PROJECT_CREATE = graphql(`
  mutation projectCreate($projectName: String!, $organizationId: ID!, $projectId: ID, $projectDetail: String) {
    projectCreate(
      projectName: $projectName
      organizationId: $organizationId
      projectId: $projectId
      projectDetail: $projectDetail
    )
  }
`);