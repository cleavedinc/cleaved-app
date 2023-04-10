import { graphql } from "../generated-types";

export const FIND_MY_PROFESSIONAL_BY_ID = graphql(`
  query findMyProfessionalById($professionalId: ID!) {
    findProfessionalById(id: $professionalId) {
      id
      about
      account {
        currentAvatar
        firstName
        id
        lastName
      }
      jobTitle
    }
  }
`);
