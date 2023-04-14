import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { ProjectByIdQuery } from "../generated-types/graphql";
import { PROJECT_BY_ID_QUERY } from "../gql-queries";
import { useRouteParams } from "../hooks";

type ProjectByIdCustomType = ProjectByIdQuery["projectById"];

type UseProjectByIdType = {
  projectByIdData: ProjectByIdCustomType | undefined;
  projectByIdDataLoading: boolean;
  projectByIdDataRefetch: (() => void) | undefined;
};

export const useProjectById = (): UseProjectByIdType => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const { preferredOrgId } = useContext(authTokenContext);
  const projectId = routeParams.projectId;

  const { data, loading, refetch } = useQuery<ProjectByIdQuery>(PROJECT_BY_ID_QUERY, {
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
