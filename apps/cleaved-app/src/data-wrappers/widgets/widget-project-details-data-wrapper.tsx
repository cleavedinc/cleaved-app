import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, SectionHeader, SPACING } from "@cleaved/ui";

import { WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledSectionHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
`;

const StyledProjectDetails = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const projectData = useProjectById();

  return (
    <Box>
      <StyledSectionHeaderWrapper>
        <SectionHeader>{projectData && projectData.projectByIdData?.name}</SectionHeader>

        {hasPermission && <WidgetProjectDetailsMenu />}
      </StyledSectionHeaderWrapper>

      <StyledProjectDetails>
        <p>temp.project details needed.</p>

        <div>TEMP label total posts: {projectData && projectData.projectByIdData?.totalPostCount}</div>
      </StyledProjectDetails>
    </Box>
  );
};
