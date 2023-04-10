import { graphql } from "../generated-types";

export const SET_PREFERRED_ORGANIZATION_MUTATION = graphql(`
  mutation setPreferredOrgId($orgId: ID!) {
    setPreferredOrgId(orgId: $orgId)
  }
`);
