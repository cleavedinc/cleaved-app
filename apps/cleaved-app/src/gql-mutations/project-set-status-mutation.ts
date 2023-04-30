import { graphql } from "../generated-types";

export const PROJECT_SET_STATUS = graphql(`
  mutation projectSetStatus($projectId: ID!, $organizationId: ID!, $status: ProjectStatus!) {
    projectSetStatus(projectId: $projectId, organizationId: $organizationId, status: $status)
  }
`);
