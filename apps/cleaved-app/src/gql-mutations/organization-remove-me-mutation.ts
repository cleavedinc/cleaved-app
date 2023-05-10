import { graphql } from "../generated-types";

export const ORGANIZATION_REMOVE_ME_MUTATION = graphql(`
  mutation organizationRemoveMe($organizationId: ID!) {
    organizationRemoveMe(organizationId: $organizationId)
  }
`);
