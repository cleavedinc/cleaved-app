import React, { FunctionComponent, ReactNode, createContext, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { ProjectsInOrgSeekQuery } from "../generated-types/graphql";
import { PROJECTS_IN_ORGANIZATION } from "../gql-queries";

import { useLoginGuard, useRouteParams } from "../hooks";

type ProjectsContextProviderType = {
  children: ReactNode;
};

type ProjectsContextType = {
  projectsInOrgSeek: ProjectsInOrgSeekQuery["projectsInOrgSeek"] | undefined;
  projectsInOrgSeekDataLoading: boolean;
  projectsInOrgSeekFetchMore: any; // eslint-disable-line
  projectsInOrgSeekRefetch: (() => void) | undefined;
  setProjectPageSize: (arg: number) => void;
};

export const ProjectsContext = createContext<ProjectsContextType>({
  projectsInOrgSeek: [],
  projectsInOrgSeekDataLoading: false,
  projectsInOrgSeekFetchMore: () => {},
  projectsInOrgSeekRefetch: () => {},
  setProjectPageSize: () => {},
});

export const ProjectsContextProvider: FunctionComponent<ProjectsContextProviderType> = ({ children }) => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const [pageSize, setPageSize] = useState<number>(100);

  const { data, loading, fetchMore, refetch } = useQuery<ProjectsInOrgSeekQuery>(PROJECTS_IN_ORGANIZATION, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !organizationId,
    variables: { organizationId: organizationId, seekKey: null, pageSize },
  });

  const output: ProjectsContextType = {
    projectsInOrgSeek: data?.projectsInOrgSeek,
    projectsInOrgSeekDataLoading: loading,
    projectsInOrgSeekFetchMore: fetchMore,
    projectsInOrgSeekRefetch: refetch,
    setProjectPageSize: (pageSizeArg: number) => {
      setPageSize(pageSizeArg);
    },
  };

  return <ProjectsContext.Provider value={output}>{children}</ProjectsContext.Provider>;
};
