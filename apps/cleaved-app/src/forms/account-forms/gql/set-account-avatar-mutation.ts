import { graphql } from "../../../generated-types";

export const SET_ACCOUNT_AVATAR_MUTATION = graphql(`
  mutation setAccountAvatar($image: Upload!) {
    setAccountAvatar(image: $image)
  }
`);
