import { graphql } from "../../../generated-types";

export const CLEAVED_ADMIN_REFRESH_LOGIN_MUTATION = graphql(`
  mutation cleavedAdminRefreshLogin($refreshToken: String!) {
    cleavedAdminRefreshLogin(refreshToken: $refreshToken) {
      id
      authorizationToken
      refreshToken
      tokenType
    }
  }
`);
