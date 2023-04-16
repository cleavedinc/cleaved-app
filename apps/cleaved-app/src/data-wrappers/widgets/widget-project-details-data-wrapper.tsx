import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, COLORS, CommentIcon, FilePost, FONT_SIZES, SectionHeader, SPACING } from "@cleaved/ui";

import { WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledCommentCount = styled.div`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledCommentIcon = styled(CommentIcon)`
  margin-left: 2px;
`;

const StyledCommentInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledFileText = styled(FilePost)`
  margin-left: 2px;
  margin-right: ${SPACING.SMALL};
`;

const StyledPostCount = styled.div`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledProjectDetails = styled.div``;

const WidgetHeadingWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const projectData = useProjectById();

  return (
    <Box>
      <div>
        <WidgetHeadingWrapper>
          <SectionHeader>{projectData && projectData.projectByIdData?.name}</SectionHeader>

          {hasPermission && <WidgetProjectDetailsMenu />}
        </WidgetHeadingWrapper>

        <StyledCommentInfoWrapper>
          {projectData && projectData?.projectByIdData && projectData?.projectByIdData?.totalRootPostCount > 0 && (
            <>
              <StyledPostCount>{projectData.projectByIdData?.totalRootPostCount}</StyledPostCount>
              <StyledFileText iconSize={FONT_SIZES.XXSMALL} color={COLORS.GRAY_500} />
            </>
          )}

          {projectData && projectData?.projectByIdData && projectData?.projectByIdData?.totalResponseCount > 0 && (
            <>
              <StyledCommentCount>{projectData.projectByIdData?.totalResponseCount}</StyledCommentCount>
              <StyledCommentIcon iconSize={FONT_SIZES.XXSMALL} color={COLORS.GRAY_500} />
            </>
          )}
        </StyledCommentInfoWrapper>
      </div>

      <StyledProjectDetails>
        <p>temp.project details needed.</p>
      </StyledProjectDetails>
    </Box>
  );
};
