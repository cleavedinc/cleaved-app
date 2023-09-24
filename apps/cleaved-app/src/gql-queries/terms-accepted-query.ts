import { graphql } from "../generated-types";

export const TERMS_ACCEPTED = graphql(`
  query termsAccepted {
    termsAccepted
  }
`);
