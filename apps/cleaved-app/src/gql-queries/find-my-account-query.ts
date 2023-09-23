import { graphql } from "../generated-types";

export const FIND_MY_ACCOUNT = graphql(`
  query findMyAccount {
    findMyAccount {
      about
      currentAvatar
      emailAddress
      firstName
      goals
      id
      jobTitle
      lastName
    }
  }
`);
