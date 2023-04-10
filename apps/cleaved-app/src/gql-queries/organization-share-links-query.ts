import { graphql } from "../generated-types";

export const ORGANIZATION_SHARE_LINKS_QUERY = graphql(`
  query organizationShareLinks($organizationId: ID!) {
    organizationShareLinks(organizationId: $organizationId) {
      id
      shareLink
      permission
    }
  }
`);
