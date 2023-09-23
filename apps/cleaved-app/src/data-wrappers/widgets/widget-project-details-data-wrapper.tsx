import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

import {
  BarsProgressIcon,
  BoxNoPadding,
  CommentIcon,
  FilePost,
  FONT_SIZES,
  SPACING,
  WidgetHeadingWrapper,
} from "@cleaved/ui";

import { WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById, useProjectProgressOptions, useRouteParams, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledBarsProgressIcon = styled(BarsProgressIcon)`
  margin-right: 3px;
`;

const StyledCommentCount = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledCommentIcon = styled(CommentIcon)`
  margin-right: 3px;
`;

const StyledCommentInfo = styled.div`
  display: flex;
  align-items: center;

  :not(:first-child) {
    margin-left: ${SPACING.SMALL};
  }
`;

const StyledCommentInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};
  padding: 0 ${SPACING.SMALL};
`;

const StyledFileTextIcon = styled(FilePost)`
  margin-right: 3px;
`;

const StyledPostCount = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledProjectDetails = styled.div`
  padding: ${SPACING.SMALL};
  white-space: pre-wrap;
`;

const StyledProjectProgress = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledWidgetHeader = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const routeParams = useRouteParams();
  const projectId = routeParams.projectId;
  const projectData = useProjectById(projectId);
  const projectProgress = useProjectProgressOptions(projectId);
  const theme = useTheme();
  const { t } = useTranslator();

  const totalPosts = t("post.totalPosts") ? t("post.totalPosts") : "";
  const totalComments = t("post.totalComments") ? t("post.totalComments") : "";
  const projectProgressLabel = t("project.progress") ? t("project.progress") : "";

  return (
    <BoxNoPadding>
      <div>
        <WidgetHeadingWrapper>
          <StyledWidgetHeader>{projectData && projectData.projectByIdData?.name}</StyledWidgetHeader>

          {hasPermission && <WidgetProjectDetailsMenu />}
        </WidgetHeadingWrapper>

        <StyledCommentInfoWrapper>
          {projectData && projectData?.projectByIdData && projectData?.projectByIdData?.totalRootPostCount > 0 && (
            <StyledCommentInfo title={totalPosts}>
              <StyledFileTextIcon iconSize={FONT_SIZES.XXSMALL} color={theme.colors.baseIcon_color} />
              <StyledPostCount>{projectData.projectByIdData?.totalRootPostCount}</StyledPostCount>
            </StyledCommentInfo>
          )}

          {projectData && projectData?.projectByIdData && projectData?.projectByIdData?.totalResponseCount > 0 && (
            <StyledCommentInfo title={totalComments}>
              <StyledCommentIcon iconSize={FONT_SIZES.XXSMALL} color={theme.colors.baseIcon_color} />
              <StyledCommentCount>{projectData.projectByIdData?.totalResponseCount}</StyledCommentCount>
            </StyledCommentInfo>
          )}

          {projectProgress && (
            <StyledCommentInfo title={projectProgressLabel}>
              <StyledBarsProgressIcon iconSize={FONT_SIZES.XXSMALL} color={theme.colors.baseIcon_color} />
              <StyledProjectProgress>{projectProgress.label}</StyledProjectProgress>
            </StyledCommentInfo>
          )}
        </StyledCommentInfoWrapper>
      </div>

      {projectData && projectData.projectByIdData && projectData.projectByIdData?.projectDetails && (
        <StyledProjectDetails>{projectData.projectByIdData?.projectDetails}</StyledProjectDetails>
      )}
    </BoxNoPadding>
  );
};
