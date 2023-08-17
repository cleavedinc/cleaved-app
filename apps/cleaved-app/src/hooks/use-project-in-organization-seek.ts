import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { ProjectsInOrgSeekQuery, ProjectStatus } from "../generated-types/graphql";
import { PROJECTS_IN_ORGANIZATION } from "../gql-queries";

type ProjectsInOrganizationSeekCustomType = ProjectsInOrgSeekQuery["projectsInOrgSeek"];

type UseProjectsInOrganizationSeekType = {
  projectsInOrganizationSeekData: ProjectsInOrganizationSeekCustomType | undefined;
  projectsInOrganizationSeekDataLoading: boolean;
  projectsInOrganizationSeekDataRefetch: (() => void) | undefined;
};

export const useProjectsInOrganizationSeek = (
  seekKey?: string | null,
  pageSize?: number | null,
  statusFilter?: [ProjectStatus] | null
): UseProjectsInOrganizationSeekType => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data, loading, refetch } = useQuery<ProjectsInOrgSeekQuery>(PROJECTS_IN_ORGANIZATION, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !preferredOrgId,
    variables: { organizationId: preferredOrgId, seekKey, pageSize, statusFilter },
  });

  return {
    projectsInOrganizationSeekData: data && data?.projectsInOrgSeek,
    projectsInOrganizationSeekDataLoading: loading,
    projectsInOrganizationSeekDataRefetch: refetch,
  };
};
