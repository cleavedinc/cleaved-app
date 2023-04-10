import { graphql } from "../generated-types";

export const FIND_MY_ACCOUNT_FIND_MY_PROFESSIONALS = graphql(`
  query findMyAccountUseFindMyProfessionals {
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
