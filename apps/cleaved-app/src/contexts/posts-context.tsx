import React, { FunctionComponent, ReactNode, createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { PostProjectSeekQuery } from "../generated-types/graphql";
import { POST_PROJECT_SEEK_QUERY } from "../gql-queries";

import { useLoginGuard, useRouteParams } from "../hooks";

type PostsContextProviderType = {
  children: ReactNode;
};

type PostsContextType = {
  postProjectSeekData: PostProjectSeekQuery["postProjectSeek"] | undefined;
  postProjectSeekDataLoading: boolean;
  postProjectSeekFetchMore: any; // eslint-disable-line
  postProjectSeekRefetch: () => void;
  projectPostFormIsDirty: boolean;
  projectPostFormImageUploadIsDirty: boolean;
  setProjectPostFormIsDirty: (isDirty: boolean) => void;
  setProjectPostFormImageUploadIsDirty: (isDirty: boolean) => void;
};

export const PostsContext = createContext<PostsContextType>({
  postProjectSeekData: [],
  postProjectSeekDataLoading: false,
  postProjectSeekFetchMore: () => {},
  postProjectSeekRefetch: () => {},
  projectPostFormIsDirty: false,
  projectPostFormImageUploadIsDirty: false,
  setProjectPostFormIsDirty: () => {},
  setProjectPostFormImageUploadIsDirty: () => {},
});

export const PostsContextProvider: FunctionComponent<PostsContextProviderType> = ({ children }) => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const projectId = routeParams.projectId ? routeParams.projectId : null;
  const postPageSize = 20;

  const [projectPostFormIsDirty, setProjectPostFormIsDirty] = useState(false);
  const [projectPostFormImageUploadIsDirty, setProjectPostFormImageUploadIsDirty] = useState(false);

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
    },
  });

  const setProjectPostFormIsDirtyOnContext = (isDirtyArg: boolean) => {
    setProjectPostFormIsDirty(isDirtyArg);
  };

  const setProjectPostFormImageUploadIsDirtyOnContext = (isDirtyArg: boolean) => {
    setProjectPostFormImageUploadIsDirty(isDirtyArg);
  };

  const output: PostsContextType = {
    postProjectSeekData: data?.postProjectSeek,
    postProjectSeekDataLoading: loading,
    postProjectSeekFetchMore: fetchMore,
    postProjectSeekRefetch: refetch,
    projectPostFormIsDirty,
    projectPostFormImageUploadIsDirty,
    setProjectPostFormIsDirty: setProjectPostFormIsDirtyOnContext,
    setProjectPostFormImageUploadIsDirty: setProjectPostFormImageUploadIsDirtyOnContext,
  };

  return <PostsContext.Provider value={output}>{children}</PostsContext.Provider>;
};
