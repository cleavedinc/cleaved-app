import { graphql } from "../../../generated-types";

export const SET_JOB_TITLE_MUTATION = graphql(`
  mutation setJobTitle($jobTitle: String!) {
    setMyJobTitle(jobTitle: $jobTitle)
  }
`);
