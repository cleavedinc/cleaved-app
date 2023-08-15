import React, { FunctionComponent, ReactNode, createContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { PostProjectSeekQuery } from "../generated-types/graphql";
import { POST_PROJECT_SEEK_QUERY } from "../gql-queries";

import { useLoginGuard, useRouteParams } from "../hooks";

type PostsContextProviderType = {
  children: ReactNode;
  pinnedFirst?: boolean;
};

type PostsContextType = {
  postProjectSeekData: PostProjectSeekQuery["postProjectSeek"] | undefined;
  postProjectSeekDataLoading: boolean;
  postProjectSeekFetchMore: any; // eslint-disable-line
  postProjectSeekRefetch: () => void;
};

export const PostsContext = createContext<PostsContextType>({
  postProjectSeekData: [],
  postProjectSeekDataLoading: false,
  postProjectSeekFetchMore: () => {},
  postProjectSeekRefetch: () => {},
});

export const PostsContextProvider: FunctionComponent<PostsContextProviderType> = ({ children, pinnedFirst }) => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const projectId = routeParams.projectId ? routeParams.projectId : null;
  const postPageSize = 50;

  const { data, loading, fetchMore, refetch } = useQuery<PostProjectSeekQuery>(POST_PROJECT_SEEK_QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || organizationId === undefined,
    variables: {
      organizationId,
      projectId,
      seekKey: null,
      pageSize: postPageSize,
      pinnedFirst,
    },
  });

  const output: PostsContextType = {
    postProjectSeekData: data?.postProjectSeek,
    postProjectSeekDataLoading: loading,
    postProjectSeekFetchMore: fetchMore,
    postProjectSeekRefetch: refetch,
  };

  return <PostsContext.Provider value={output}>{children}</PostsContext.Provider>;
};
