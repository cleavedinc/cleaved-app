import { graphql } from "../generated-types";

export const FIND_MY_ACCOUNT = graphql(`
  query findMyAccount {
    findMyAccount {
      currentAvatar
      emailAddress
      firstName
      id
      lastName
      middleName
      professionals {
        about
        jobTitle
        id
        userId
      }
    }
  }
`);
