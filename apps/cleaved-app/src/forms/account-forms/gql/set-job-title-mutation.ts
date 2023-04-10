import { graphql } from "../../../generated-types";

export const SET_JOB_TITLE_MUTATION = graphql(`
  mutation setJobTitle($professionalId: ID!, $newTitle: String!) {
    setTitle(professionalId: $professionalId, newTitle: $newTitle)
  }
`);
