import { graphql } from "../generated-types";

export const FIND_MY_ACCOUNT_PERSONAL_INFORMATION = graphql(`
  query findMyAccountPersonalInformation {
    findMyAccount {
      firstName
      id
      lastName
      middleName
    }
  }
`);
