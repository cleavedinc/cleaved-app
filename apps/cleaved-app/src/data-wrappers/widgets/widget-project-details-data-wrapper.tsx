import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { BoxNoPadding, COLORS, CommentIcon, FilePost, FONT_SIZES, SPACING, WidgetHeadingWrapper } from "@cleaved/ui";

import { WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledCommentCount = styled.div`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledCommentIcon = styled(CommentIcon)`
  margin-left: 2px;
`;

const StyledCommentInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCommentInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};
  padding: 0 ${SPACING.SMALL};
`;

const StyledFileText = styled(FilePost)`
  margin-left: 2px;
  margin-right: ${SPACING.SMALL};
`;

const StyledPostCount = styled.div`
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledProjectDetails = styled.div`
  padding: ${SPACING.SMALL};
`;

const StyledWidgetHeader = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const projectData = useProjectById();
  const { t } = useTranslator();

  const totalPosts = t("post.totalPosts") ? t("post.totalPosts") : "";
  const totalComments = t("post.totalComments") ? t("post.totalComments") : "";

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
              <StyledPostCount>{projectData.projectByIdData?.totalRootPostCount}</StyledPostCount>
              <StyledFileText iconSize={FONT_SIZES.XXSMALL} color={COLORS.GRAY_500} />
            </StyledCommentInfo>
          )}

          {projectData && projectData?.projectByIdData && projectData?.projectByIdData?.totalResponseCount > 0 && (
            <StyledCommentInfo title={totalComments}>
              <StyledCommentCount>{projectData.projectByIdData?.totalResponseCount}</StyledCommentCount>
              <StyledCommentIcon iconSize={FONT_SIZES.XXSMALL} color={COLORS.GRAY_500} />
            </StyledCommentInfo>
          )}
        </StyledCommentInfoWrapper>
      </div>

      <StyledProjectDetails>temp.project details needed.</StyledProjectDetails>
    </BoxNoPadding>
  );
};
