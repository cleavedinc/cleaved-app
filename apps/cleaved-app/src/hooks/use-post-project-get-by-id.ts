import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { PostProjectGetByIdQuery } from "../generated-types/graphql";
import { POST_PROJECT_GET_BY_ID_QUERY } from "../gql-queries";

type PostProjectGetByIdCustomType = PostProjectGetByIdQuery["postProjectGetById"];

type UsePostProjectGetByIdType = {
  postProjectGetByIdData: PostProjectGetByIdCustomType | undefined;
  postProjectGetByIdDataLoading: boolean;
  postProjectGetByIdDataRefetch: (() => void) | undefined;
};

export const usePostProjectGetById = (postId: string | undefined): UsePostProjectGetByIdType => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data, loading, refetch } = useQuery<PostProjectGetByIdQuery>(POST_PROJECT_GET_BY_ID_QUERY, {
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !preferredOrgId || !postId,
    variables: { organizationId: preferredOrgId, id: postId },
  });

  return {
    postProjectGetByIdData: data?.postProjectGetById,
    postProjectGetByIdDataLoading: loading,
    postProjectGetByIdDataRefetch: refetch,
  };
};
