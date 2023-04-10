import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { PostProjectRepliesQuery } from "../generated-types/graphql";
import { POST_PROJECT_REPLIES } from "../gql-queries";

import { useLoginGuard } from "./use-login-guard";
import { useRouteParams } from "./use-route-params";

type ProjectRepliesCustomType = PostProjectRepliesQuery["postProjectReplies"];

type UsePostProjectRepliesType = {
  postProjectRepliesData: ProjectRepliesCustomType | undefined;
  postProjectRepliesDataLoading: boolean;
  postProjectRepliesDataFetchMore: any; // eslint-disable-line
  postProjectRepliesDataRefetch: (() => void) | undefined;
  postProjectRepliesDataTotalReturned: number;
};

export const usePostProjectReplies = (
  parentPostId: string,
  seekKey?: string,
  pageSize?: number
): UsePostProjectRepliesType => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const [postProjectRepliesDataTotalReturned, setPostProjectRepliesDataTotalReturned] = useState<number>(0);

  const { data, loading, fetchMore, refetch } = useQuery<PostProjectRepliesQuery>(POST_PROJECT_REPLIES, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    onCompleted: (completedData) => {
      setPostProjectRepliesDataTotalReturned(
        postProjectRepliesDataTotalReturned + completedData.postProjectReplies.length
      );
    },
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn,
    variables: {
      organizationId,
      parentPostId,
      seekKey,
      pageSize,
    },
  });

  return {
    postProjectRepliesData: data?.postProjectReplies,
    postProjectRepliesDataLoading: loading,
    postProjectRepliesDataFetchMore: fetchMore,
    postProjectRepliesDataRefetch: refetch,
    postProjectRepliesDataTotalReturned,
  };
};
