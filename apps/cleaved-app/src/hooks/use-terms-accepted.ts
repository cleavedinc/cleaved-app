import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { TermsAcceptedQuery } from "../generated-types/graphql";

import { TERMS_ACCEPTED } from "../gql-queries";

type TermsAccepted = {
  termsAccepted: boolean | undefined;
  termsAcceptedIsLoading: boolean;
};

export const useTermsAccepted = (): TermsAccepted => {
  const { isLoggedIn } = useLoginGuard();

  const { data, loading } = useQuery<TermsAcceptedQuery>(TERMS_ACCEPTED, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });

  return {
    termsAccepted: data?.termsAccepted,
    termsAcceptedIsLoading: loading,
  };
};
