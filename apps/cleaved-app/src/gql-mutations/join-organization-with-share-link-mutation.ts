import { graphql } from "../generated-types";

export const JOIN_ORGANIZATION_WITH_SHARE_LINK_MUTATION = graphql(`
  mutation joinOrganizationWithShareLink($shareLink: ID!) {
    joinOrganizationWithShareLink(shareLink: $shareLink)
  }
`);
