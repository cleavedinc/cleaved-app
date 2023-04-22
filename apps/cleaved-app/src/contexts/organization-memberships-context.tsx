import React, { FunctionComponent, ReactNode, createContext } from "react";
import { ApolloError, useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { OrganizationMembershipsQuery } from "../generated-types/graphql";
import { FIND_MY_ORGANIZATION_MEMBERSHIP } from "../gql-queries";

import { useLoginGuard } from "../hooks";

type OrganizationMembershipsContextProviderType = {
  children: ReactNode;
};

type OrganizationMembershipsContextType = {
  organizationMembershipsData: OrganizationMembershipsQuery["organizationMemberships"] | undefined;
  organizationMembershipsDataLoading: boolean;
  organizationMembershipsDataRefetch: (() => void) | undefined;
};

export const OrganizationMembershipsContext = createContext<OrganizationMembershipsContextType>({
  organizationMembershipsData: undefined,
  organizationMembershipsDataLoading: false,
  organizationMembershipsDataRefetch: () => {},
});

export const OrganizationMembershipsContextProvider: FunctionComponent<OrganizationMembershipsContextProviderType> = ({
  children,
}) => {
  const { isLoggedIn } = useLoginGuard();

  const { data, loading, refetch } = useQuery<OrganizationMembershipsQuery>(FIND_MY_ORGANIZATION_MEMBERSHIP, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error: ApolloError) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
  });

  const output: OrganizationMembershipsContextType = {
    organizationMembershipsData: data?.organizationMemberships,
    organizationMembershipsDataLoading: loading,
    organizationMembershipsDataRefetch: refetch,
  };

  return <OrganizationMembershipsContext.Provider value={output}>{children}</OrganizationMembershipsContext.Provider>;
};
