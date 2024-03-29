import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled, { useTheme } from "styled-components";

import { BORDERS, BoxNoPadding, FilePost, FONT_SIZES, RADIUS, SPACING, WidgetHeadingWrapper } from "@cleaved/ui";

import { StyledRouterButton, WidgetProjectListMenu } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, ProjectStatus } from "../../generated-types/graphql";
import { useProjectsInOrganizationSeek, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

const StyledBoxNoPadding = styled(BoxNoPadding)`
  display: flex;
  flex-direction: column;
`;

const StyledCommentInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`;

const StyledEmptyWidgetText = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
  padding: ${SPACING.SMALL};
`;

const StyledPostCount = styled.div``;

const StyledPostIcon = styled(FilePost)`
  margin-left: 2px;
`;

const StyledProjectLink = styled(Link)`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  display: flex;
`;

const StyledProjectList = styled.ul`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledProjectListItem = styled.li`
  cursor: pointer;
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.SMALL};

  :not(:last-child) {
    border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  }
`;

const StyledProjectName = styled.div`
  margin-right: ${SPACING.SMALL};
`;

const StyledRouterButtonLeft = styled(StyledRouterButton)`
  border-radius: 0 0 ${RADIUS.MEDIUM} ${RADIUS.MEDIUM};
`;

const StyledSeeAllProjects = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.SMALL};
`;

const StyledSeeAllProjectsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.SMALL};

  :hover {
    color: ${({ theme }) => theme.colors.baseSubText_color};
    text-decoration: underline;
  }
`;

const StyledWidgetHeader = styled.div``;

export const WidgetProjectListDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const theme = useTheme();
  const { t } = useTranslator();

  const { projectsInOrganizationSeekData, projectsInOrganizationSeekDataLoading } = useProjectsInOrganizationSeek(
    null,
    5,
    [ProjectStatus.Active]
  );

  const projectListLinkName = t("menuLinkNames.projectList") ? t("menuLinkNames.projectList") : "";
  const projectStartNewLinkName = t("menuLinkNames.projectForm") ? t("menuLinkNames.projectForm") : "";
  const totalPosts = t("post.totalPosts") ? t("post.totalPosts") : "";

  return (
    <StyledBoxNoPadding>
      <WidgetHeadingWrapper>
        <StyledWidgetHeader>{t("widget.projectsList")}</StyledWidgetHeader>

        {hasPermission && <WidgetProjectListMenu />}
      </WidgetHeadingWrapper>

      {!projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData.length === 0 && (
          <>
            <StyledEmptyWidgetText>{t("widget.projectsListEmptyListText")}</StyledEmptyWidgetText>

            <StyledRouterButtonLeft
              to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}${routeConstantsCleavedApp.projectForm.route}`}
              title={projectStartNewLinkName}
            >
              {projectStartNewLinkName}
            </StyledRouterButtonLeft>
          </>
        )}

      {!projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData.length > 0 && (
          <StyledProjectList>
            {projectsInOrganizationSeekData &&
              projectsInOrganizationSeekData.map((project) => {
                return (
                  <StyledProjectListItem key={project.id}>
                    <StyledProjectLink
                      to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
                      title={project.name}
                    >
                      <StyledProjectName>{project.name}</StyledProjectName>
                      <StyledCommentInfoWrapper title={totalPosts}>
                        <StyledPostCount>{project.totalRootPostCount}</StyledPostCount>
                        <StyledPostIcon iconSize={FONT_SIZES.XSMALL} color={theme.colors.baseIcon_color} />
                      </StyledCommentInfoWrapper>
                    </StyledProjectLink>
                  </StyledProjectListItem>
                );
              })}
          </StyledProjectList>
        )}

      {!projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData.length > 1 && (
          <StyledSeeAllProjects>
            <StyledSeeAllProjectsLink
              to={`/${preferredOrgId}${routeConstantsCleavedApp.projectList.route}`}
              title={projectListLinkName}
            >
              {t("widget.projectListSeeMore")}
            </StyledSeeAllProjectsLink>
          </StyledSeeAllProjects>
        )}
    </StyledBoxNoPadding>
  );
};
