import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, SectionHeader, WidgetHeadingWrapper } from "@cleaved/ui";

import { WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledProjectDetails = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const projectData = useProjectById();

  return (
    <Box>
      <WidgetHeadingWrapper>
        <SectionHeader>{projectData && projectData.projectByIdData?.name}</SectionHeader>

        {hasPermission && <WidgetProjectDetailsMenu />}
      </WidgetHeadingWrapper>

      <StyledProjectDetails>
        <p>temp.project details needed.</p>

        <div>TEMP label total posts: {projectData && projectData.projectByIdData?.totalPostCount}</div>
      </StyledProjectDetails>
    </Box>
  );
};
