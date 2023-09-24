import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import dayjs from "dayjs";
import styled, { useTheme } from "styled-components";

import { BarsProgressIcon, Box, CommentIcon, FilePost, FONT_SIZES, mediaQueries, SPACING } from "@cleaved/ui";

import { ProjectsEditMenu } from "../../../components";
import { authTokenContext } from "../../../contexts";
import { OrgPermissionLevel, ProjectsInOrgSeekQuery } from "../../../generated-types/graphql";
import { useProjectProgressOptions, useTranslator } from "../../../hooks";
import { useOrganizationPermission } from "../../../permissions";
import { routeConstantsCleavedApp } from "../../../router";

type ProjectCardProps = {
  project: ProjectsInOrgSeekQuery["projectsInOrgSeek"][0];
  refetchData: (() => void) | undefined;
};

const StyledBarsProgressIcon = styled(BarsProgressIcon)`
  margin-right: 3px;
`;

const StyledCommentCount = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.SMALL};
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
`;

const StyledDateCreated = styled.div``;

const StyledDateCreatedLabel = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledFileTextIcon = styled(FilePost)`
  margin-right: 3px;
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  margin-bottom: ${SPACING.BASE};
`;

const StyledMenuContentEdit = styled.div`
  margin-left: auto;
`;

const StyledPostCount = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledProjectCardBox = styled(Box)`
  width: 100%;

  ${mediaQueries.SM} {
    flex-basis: calc(50% - 10px);
    margin-right: 10px;
    width: 50%;
  }

  ${mediaQueries.MD} {
    flex-basis: calc(33% - 10px);
    width: 33%;
  }
  ${mediaQueries.LG} {
    flex-basis: calc(25% - 10px);
    width: 25%;
  }
`;

const StyledProjectLink = styled(Link)`
  font-size: ${FONT_SIZES.LARGE};
`;

const StyledProjectProgress = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.SMALL};
`;

export const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  const { project, refetchData } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const projectProgress = useProjectProgressOptions(project.id);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const theme = useTheme();
  const { t } = useTranslator();

  const totalPosts = t("post.totalPosts") ? t("post.totalPosts") : "";
  const totalComments = t("post.totalComments") ? t("post.totalComments") : "";
  const projectProgressLabel = t("project.progress") ? t("project.progress") : "";
  const projectDateCreatedLabel = t("project.dateCreated") ? t("project.dateCreated") : "";

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

      <StyledCommentInfoWrapper>
        {project && project.totalRootPostCount > 0 && (
          <StyledCommentInfo title={totalPosts}>
            <StyledFileTextIcon iconSize={FONT_SIZES.SMALL} color={theme.colors.baseIcon_color} />
            <StyledPostCount>{project.totalRootPostCount}</StyledPostCount>
          </StyledCommentInfo>
        )}

        {project && project.totalResponseCount > 0 && (
          <StyledCommentInfo title={totalComments}>
            <StyledCommentIcon iconSize={FONT_SIZES.SMALL} color={theme.colors.baseIcon_color} />
            <StyledCommentCount>{project.totalResponseCount}</StyledCommentCount>
          </StyledCommentInfo>
        )}

        {project && (
          <StyledCommentInfo title={projectProgressLabel}>
            <StyledBarsProgressIcon iconSize={FONT_SIZES.SMALL} color={theme.colors.baseIcon_color} />
            <StyledProjectProgress>{projectProgress.label}</StyledProjectProgress>
          </StyledCommentInfo>
        )}
      </StyledCommentInfoWrapper>

      <StyledDateCreated title={projectDateCreatedLabel}>
        <StyledDateCreatedLabel>{projectDateCreatedLabel}</StyledDateCreatedLabel>
        {dayjs(project.createdAt).format("MMMM DD, YYYY")}
      </StyledDateCreated>
    </StyledProjectCardBox>
  );
};
