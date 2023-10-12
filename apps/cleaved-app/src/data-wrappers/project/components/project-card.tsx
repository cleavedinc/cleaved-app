import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, SPACING } from "@cleaved/ui";

import { ProjectCardMetaData, ProjectsEditMenu } from "../../../components";
import { authTokenContext } from "../../../contexts";
import { OrgPermissionLevel, ProjectsInOrgSeekQuery } from "../../../generated-types/graphql";
import { useOrganizationPermission } from "../../../permissions";
import { routeConstantsCleavedApp } from "../../../router";

type ProjectCardProps = {
  project: ProjectsInOrgSeekQuery["projectsInOrgSeek"][0];
  refetchData: (() => void) | undefined;
};

const StyledHeadingWrapper = styled.div`
  display: flex;
  margin-bottom: ${SPACING.BASE};
`;

const StyledMenuContentEdit = styled.div`
  margin-left: auto;
`;

const StyledProjectCardBox = styled(Box)`
  width: 100%;
`;

const StyledProjectLink = styled(Link)`
  font-size: ${FONT_SIZES.LARGE};
`;

export const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  const { project, refetchData } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);

  return (
    <StyledProjectCardBox>
      <StyledHeadingWrapper>
        <StyledProjectLink
          to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
          title={project.name}
        >
          {project.name}
        </StyledProjectLink>

        {hasPermission && (
          <StyledMenuContentEdit role="cell">
            <ProjectsEditMenu
              projectId={project.id}
              projectStatus={project.status}
              refreshProjectListData={refetchData}
            />
          </StyledMenuContentEdit>
        )}
      </StyledHeadingWrapper>

      {project && <ProjectCardMetaData projectData={project} />}
    </StyledProjectCardBox>
  );
};
