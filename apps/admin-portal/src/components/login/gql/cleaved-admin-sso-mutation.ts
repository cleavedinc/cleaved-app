import { graphql } from "../../../generated-types";

export const CLEAVED_ADMIN_SSO_MUTATION = graphql(`
  mutation cleavedAdminSSO($token: String!) {
    cleavedAdminSSO(token: $token) {
      id
      authorizationToken
      refreshToken
      tokenType
    }
  }
`);
