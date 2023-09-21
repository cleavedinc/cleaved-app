import { graphql } from "../../../generated-types";

export const PROJECT_SET_PROGRESS = graphql(`
  mutation projectSetPercentComplete($projectId: ID!, $organizationId: ID!, $percentComplete: PercentComplete!) {
    projectSetPercentComplete(projectId: $projectId, organizationId: $organizationId, percentComplete: $percentComplete)
  }
`);
