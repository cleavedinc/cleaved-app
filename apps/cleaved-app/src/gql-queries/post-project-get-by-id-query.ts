import { graphql } from "../generated-types";

export const POST_PROJECT_GET_BY_ID_QUERY = graphql(`
  query postProjectGetById($organizationId: ID!, $id: ID!) {
    postProjectGetById(organizationId: $organizationId, id: $id) {
      id
      body
      accountId
      date
      account {
        id
        firstName
        lastName
        professionals {
          id
          jobTitle
        }
        currentAvatar
      }
      images
    }
  }
`);
