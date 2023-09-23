import { graphql } from "../../../generated-types";

export const SET_GOALS_MUTATION = graphql(`
  mutation setMyGoals($goals: String!) {
    setMyGoals(goals: $goals)
  }
`);
