import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { PostProjectAccountSeekQuery } from "../generated-types/graphql";
import { POST_PROJECT_ACCOUNT_SEEK_QUERY } from "../gql-queries";

type PostProjectAccountSeekCustomType = PostProjectAccountSeekQuery["postProjectAccountSeek"];

type UsePostProjectAccountSeekType = {
  postProjectAccountSeekData: PostProjectAccountSeekCustomType | undefined;
  postProjectAccountSeekDataLoading: boolean;
  postProjectAccountSeekDataRefetch: (() => void) | undefined;
};

export const usePostProjectAccountSeek = (
  projectId: string,
  seekKey?: string | null,
  pageSize?: number | null
): UsePostProjectAccountSeekType => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data, loading, refetch } = useQuery<PostProjectAccountSeekQuery>(POST_PROJECT_ACCOUNT_SEEK_QUERY, {
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !preferredOrgId || !projectId,
    variables: { organizationId: preferredOrgId, projectId, seekKey, pageSize },
  });

  return {
    postProjectAccountSeekData: data?.postProjectAccountSeek,
    postProjectAccountSeekDataLoading: loading,
    postProjectAccountSeekDataRefetch: refetch,
  };
};
