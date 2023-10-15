import { graphql } from "../../../generated-types";

export const PROJECT_UPDATE = graphql(`
  mutation projectUpdate(
    $organizationId: ID!
    $projectId: ID!
    $projectDetail: String
    $projectName: String!
    $projectProgress: ProjectProgress
    $projectStartDate: String
    $projectEndDate: String
  ) {
    projectUpdate(
      organizationId: $organizationId
      projectId: $projectId
      projectDetail: $projectDetail
      projectName: $projectName
      projectProgress: $projectProgress
      projectStartDate: $projectStartDate
      projectEndDate: $projectEndDate
    )
  }
`);
