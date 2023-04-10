import { graphql } from "../../../generated-types";

export const SET_PROFESSIONAL_ABOUT_MUTATION = graphql(`
  mutation setProfessionalAbout($professionalId: ID!, $newAbout: String!) {
    setProfessionalAbout(professionalId: $professionalId, newAbout: $newAbout)
  }
`);
