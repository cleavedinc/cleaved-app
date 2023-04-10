import { graphql } from "../../../generated-types";

export const SET_ACCOUNT_EMAIL_MUTATION = graphql(`
  mutation setAccountEmail($newEmail: String!) {
    setAccountEmail(newEmail: $newEmail)
  }
`);
