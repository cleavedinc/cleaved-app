import { logQueryError } from "@cleaved/helpers";
import { ApolloError, useQuery } from "@apollo/client";
import { FindMyAccountQuery } from "../generated-types/graphql";
import { FIND_MY_ACCOUNT } from "../gql-queries";
import { useLoginGuard } from "./use-login-guard";

type FindMyAccountCustomType = FindMyAccountQuery["findMyAccount"];

type UseFindMyAccountType = {
  findMyAccountData: FindMyAccountCustomType | undefined;
  findMyAccountDataLoading: boolean;
  findMyAccountDataRefetch: (() => void) | undefined;
};

export const useFindMyAccount = (): UseFindMyAccountType => {
  const { isLoggedIn } = useLoginGuard();

  const { data, loading, refetch } = useQuery<FindMyAccountQuery>(FIND_MY_ACCOUNT, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });

  return {
    findMyAccountData: data?.findMyAccount,
    findMyAccountDataLoading: loading,
    findMyAccountDataRefetch: refetch,
  };
};
