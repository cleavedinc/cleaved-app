import { graphql } from "../../../generated-types";

export const SET_ACCOUNT_SOCIAL_MEDIA_LINKS_MUTATION = graphql(`
  mutation setAccountSocialMediaLinks($socialLinks: [SocialMediaSetInput!]!) {
    setAccountSocialMediaLinks(socialLinks: $socialLinks)
  }
`);
