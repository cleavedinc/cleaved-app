import { graphql } from "../../../generated-types";

export const REGISTER_ORGANIZATION_MUTATION = graphql(`
  mutation registerOrganization($organizationId: ID!, $name: String) {
    registerOrganization(organizationId: $organizationId, name: $name)
  }
`);
