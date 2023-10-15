import { graphql } from "../generated-types";

export const PROJECTS_IN_ORGANIZATION = graphql(`
  query projectsInOrgSeek($organizationId: ID!, $seekKey: ID, $pageSize: Int, $statusFilter: [ProjectStatus!]) {
    projectsInOrgSeek(
      organizationId: $organizationId
      seekKey: $seekKey
      pageSize: $pageSize
      statusFilter: $statusFilter
    ) {
      createdAt
      id
      name
      projectProgress
      status
      projectDates {
        startDate
        endDate
      }
      totalResponseCount
      totalRootPostCount
    }
  }
`);
