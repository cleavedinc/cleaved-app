import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { BoxNoPadding, SPACING, WidgetHeadingWrapper } from "@cleaved/ui";

import { ProjectCardMetaData, WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById, useRouteParams } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledProjectDetails = styled.div`
  padding: ${SPACING.SMALL};
  white-space: pre-wrap;
`;

const StyledWidgetHeader = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const routeParams = useRouteParams();
  const projectId = routeParams.projectId;
  const projectData = useProjectById(projectId);

  return (
    <BoxNoPadding>
      <div>
        <WidgetHeadingWrapper>
          <StyledWidgetHeader>{projectData && projectData.projectByIdData?.name}</StyledWidgetHeader>

          {hasPermission && <WidgetProjectDetailsMenu />}
        </WidgetHeadingWrapper>

        {projectData && <ProjectCardMetaData projectData={projectData?.projectByIdData} />}
      </div>

      {projectData && projectData.projectByIdData && projectData.projectByIdData?.projectDetails && (
        <StyledProjectDetails>{projectData.projectByIdData?.projectDetails}</StyledProjectDetails>
      )}
    </BoxNoPadding>
  );
};
