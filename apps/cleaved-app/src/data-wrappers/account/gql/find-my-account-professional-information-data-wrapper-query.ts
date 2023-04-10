import { graphql } from "../../../generated-types";

export const FIND_MY_ACCOUNT_PROFESSIONAL_INFORMATION = graphql(`
  query findMyAccountProfessionalInformationDataWrapper {
    findMyAccount {
      id
      professionals {
        about
        id
      }
    }
  }
`);
