import { graphql } from "../generated-types";

export const PROJECTS_IN_ORGANIZATION = graphql(`
  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int) {
    projectsInOrgSeek(organizationId: $organizationId, seekKey: $seekKey, pageSize: $pageSize) {
      id
      name
      totalRootPostCount
      totalResponseCount
    }
  }
`);
