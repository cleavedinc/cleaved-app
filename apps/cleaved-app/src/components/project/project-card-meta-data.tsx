import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";
import { format } from "date-fns";

import { ArrowRightIcon, BarsProgressIcon, CommentIcon, FilePost, FONT_SIZES, SPACING } from "@cleaved/ui";

import { ProjectByIdQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  margin: 0 ${SPACING.BASE};
`;

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

const StyledDate = styled.span`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XXSMALL};
`;

const StyledFileTextIcon = styled(FilePost)`
  margin-right: 3px;
`;

const StyledPostCount = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledProjectDates = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.BASE};
  padding: 0 ${SPACING.SMALL};
`;

const StyledProjectProgress = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

type ProjectCardMetaDataProps = {
  projectData?: ProjectByIdQuery["projectById"];
};

export const ProjectCardMetaData: FunctionComponent<ProjectCardMetaDataProps> = (props) => {
  const { projectData } = props;
  const theme = useTheme();
  const { t } = useTranslator();

  const totalPosts = t("post.totalPosts") ? t("post.totalPosts") : "";
  const totalComments = t("post.totalComments") ? t("post.totalComments") : "";
  const projectProgressLabel = t("project.progress") ? t("project.progress") : "";

  return (
    <>
      {projectData && projectData?.projectDates.startDate && (
        <StyledProjectDates>
          <StyledDate>{format(new Date(projectData?.projectDates.startDate), "MMMM dd, yyyy")}</StyledDate>

          {projectData && projectData?.projectDates.endDate && (
            <>
              <StyledArrowRightIcon color={theme.colors.baseLink_color} iconSize={FONT_SIZES.XXSMALL} />
              <StyledDate>{format(new Date(projectData?.projectDates.endDate), "MMMM dd, yyyy")}</StyledDate>
            </>
          )}
        </StyledProjectDates>
      )}

      <StyledCommentInfoWrapper>
        {projectData && projectData?.totalRootPostCount > 0 && (
          <StyledCommentInfo title={totalPosts}>
            <StyledFileTextIcon iconSize={FONT_SIZES.XXSMALL} color={theme.colors.baseIcon_color} />
            <StyledPostCount>{projectData.totalRootPostCount}</StyledPostCount>
          </StyledCommentInfo>
        )}

        {projectData && projectData?.totalResponseCount > 0 && (
          <StyledCommentInfo title={totalComments}>
            <StyledCommentIcon iconSize={FONT_SIZES.XXSMALL} color={theme.colors.baseIcon_color} />
            <StyledCommentCount>{projectData.totalResponseCount}</StyledCommentCount>
          </StyledCommentInfo>
        )}

        {projectData && projectData?.projectProgress && (
          <StyledCommentInfo title={projectProgressLabel}>
            <StyledBarsProgressIcon iconSize={FONT_SIZES.XXSMALL} color={theme.colors.baseIcon_color} />
            <StyledProjectProgress>{projectData?.projectProgress}</StyledProjectProgress>
          </StyledCommentInfo>
        )}
      </StyledCommentInfoWrapper>
    </>
  );
};
