import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { ProjectByIdQuery } from "../generated-types/graphql";
import { PROJECT_BY_ID_QUERY } from "../gql-queries";

type ProjectByIdCustomType = ProjectByIdQuery["projectById"];

type UseProjectByIdType = {
  projectByIdData: ProjectByIdCustomType | undefined;
  projectByIdDataLoading: boolean;
  projectByIdDataRefetch: (() => void) | undefined;
};

export const useProjectById = (projectId?: string): UseProjectByIdType => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data, loading, refetch } = useQuery<ProjectByIdQuery>(PROJECT_BY_ID_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !preferredOrgId || !projectId,
    variables: { projectId, organizationId: preferredOrgId },
  });

  return {
    projectByIdData: data?.projectById,
    projectByIdDataLoading: loading,
    projectByIdDataRefetch: refetch,
  };
};
