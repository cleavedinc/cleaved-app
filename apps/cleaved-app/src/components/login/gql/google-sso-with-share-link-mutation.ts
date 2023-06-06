import { graphql } from "../../../generated-types";

export const GOOGLE_SSO_WITH_SHARE_LINK_MUTATION = graphql(`
  mutation googleSSOWithShareLink($token: String!, $shareLink: ID!) {
    googleSSOWithShareLink(token: $token, shareLink: $shareLink) {
      authorizationToken
      joinedOrg
      preferredOrgId
      refreshToken
      tokenType
    }
  }
`);
