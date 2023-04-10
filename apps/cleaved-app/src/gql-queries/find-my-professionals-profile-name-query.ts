import { graphql } from "../generated-types";

export const FIND_MY_PROFESSIONALS_PROFILE_NAME = graphql(`
  query findMyProfessionalsProfileName {
    findMyAccount {
      id
      professionals {
        id
        jobTitle
        userId
      }
    }
  }
`);
