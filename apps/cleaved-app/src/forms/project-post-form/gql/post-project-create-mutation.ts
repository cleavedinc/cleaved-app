import { graphql } from "../../../generated-types";

export const POST_PROJECT_CREATE = graphql(`
  mutation postProjectCreate($organizationId: ID!, $projectId: ID!, $body: String!, $imageUrls: [ImagePath!]) {
    postProjectCreate(organizationId: $organizationId, projectId: $projectId, body: $body, imageUrls: $imageUrls)
  }
`);
