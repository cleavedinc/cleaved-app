import { graphql } from "../../../generated-types";

export const UPDATE_ACCOUNT_MUTATION = graphql(`
  mutation updateAccount($firstName: String, $lastName: String, $middleName: String) {
    updateAccount(firstName: $firstName, lastName: $lastName, middleName: $middleName)
  }
`);
