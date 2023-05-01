import { graphql } from "../../../generated-types";

export const SET_ABOUT_MUTATION = graphql(`
  mutation setMyAbout($about: String!) {
    setMyAbout(about: $about)
  }
`);
