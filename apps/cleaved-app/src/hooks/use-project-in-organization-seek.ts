import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { ProjectsInOrgSeekQuery } from "../generated-types/graphql";
import { PROJECTS_IN_ORGANIZATION } from "../gql-queries";

type ProjectsInOrganizationSeekCustomType = ProjectsInOrgSeekQuery["projectsInOrgSeek"];

type UseProjectsInOrganizationSeekType = {
  projectsInOrganizationSeekData: ProjectsInOrganizationSeekCustomType | undefined;
  projectsInOrganizationSeekDataLoading: boolean;
  projectsInOrganizationSeekDataRefetch: (() => void) | undefined;
};

// NOTE: There is a Projects Context. Most likely, you will want to use the project context.
// NOTE: This was created to be used for the onboarding flow given the need. If we don't use this any more, remove this useHook.
export const useProjectsInOrganizationSeek = (
  seekKey?: string | null,
  pageSize?: number | null
): UseProjectsInOrganizationSeekType => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data, loading, refetch } = useQuery<ProjectsInOrgSeekQuery>(PROJECTS_IN_ORGANIZATION, {
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !preferredOrgId,
    variables: { organizationId: preferredOrgId, seekKey, pageSize },
  });

  return {
    projectsInOrganizationSeekData: data?.projectsInOrgSeek,
    projectsInOrganizationSeekDataLoading: loading,
    projectsInOrganizationSeekDataRefetch: refetch,
  };
};
