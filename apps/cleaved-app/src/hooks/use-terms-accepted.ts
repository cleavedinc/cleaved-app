import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";
import { TermsAcceptedQuery } from "../generated-types/graphql";
import { TERMS_ACCEPTED } from "../gql-queries";
import { useLoginGuard } from "./use-login-guard";

type UseTermsAcceptedType = {
  termsAcceptedData: boolean | undefined;
  termsAcceptedDataLoading: boolean;
};

export const useTermsAccepted = (): UseTermsAcceptedType => {
  const { isLoggedIn } = useLoginGuard();

  const { data, loading } = useQuery<TermsAcceptedQuery>(TERMS_ACCEPTED, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });

  return {
    termsAcceptedData: data?.termsAccepted,
    termsAcceptedDataLoading: loading,
  };
};
