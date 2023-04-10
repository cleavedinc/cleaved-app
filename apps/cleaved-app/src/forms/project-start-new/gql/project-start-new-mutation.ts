import { graphql } from "../../../generated-types";

export const PROJECT_START_NEW = graphql(`
  mutation projectStart($projectName: String!, $organizationId: ID!) {
    projectStart(projectName: $projectName, organizationId: $organizationId)
  }
`);
