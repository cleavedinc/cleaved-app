import React, { FunctionComponent, ReactNode, createContext } from "react";
import { ApolloError, useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { FindMyAccountQuery } from "../generated-types/graphql";
import { FIND_MY_ACCOUNT } from "../gql-queries";

import { useLoginGuard } from "../hooks";

type AccountContextProviderType = {
  children: ReactNode;
};

type AccountContextType = {
  accountData: FindMyAccountQuery["findMyAccount"] | undefined;
  accountDataLoading: boolean;
  accountDataRefetch: (() => void) | undefined;
};

export const AccountContext = createContext<AccountContextType>({
  accountData: undefined,
  accountDataLoading: false,
  accountDataRefetch: () => {},
});

export const AccountContextProvider: FunctionComponent<AccountContextProviderType> = ({ children }) => {
  const { isLoggedIn } = useLoginGuard();

  const { data, loading, refetch } = useQuery<FindMyAccountQuery>(FIND_MY_ACCOUNT, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });

  const output: AccountContextType = {
    accountData: data?.findMyAccount,
    accountDataLoading: loading,
    accountDataRefetch: refetch,
  };

  return <AccountContext.Provider value={output}>{children}</AccountContext.Provider>;
};
