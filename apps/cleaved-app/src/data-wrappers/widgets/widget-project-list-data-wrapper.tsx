import React, { FunctionComponent, useContext, useEffect } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { BORDERS, Box, COLORS, FilePost, FONT_SIZES, SectionHeader, SPACING, WidgetHeadingWrapper } from "@cleaved/ui";

import { StyledRouterButton, WidgetProjectListMenu } from "../../components";
import { authTokenContext, ProjectsContext } from "../../contexts";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

const StyledPostCount = styled.div`
  color: ${COLORS.BLACK};
`;

const StyledPostIcon = styled(FilePost)`
  margin-left: 2px;
`;

const StyledCommentInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`;

const StyledEmptyWidgetText = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledProjectLink = styled(Link)`
  color: ${COLORS.BLACK};
  display: flex;

  :hover {
    color: ${COLORS.BLACK};
  }
`;

const StyledProjectList = styled.ul`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledProjectListItem = styled.li`
  cursor: pointer;
  padding: ${SPACING.SMALL} 0;

  /* :hover {
    background-color: ${COLORS.GRAY_50};
  } */

  :not(:last-child) {
    border-bottom: ${BORDERS.BORDER_PRIMARY};
  }
`;

const StyledProjectName = styled.div`
  margin-right: ${SPACING.SMALL};
`;

const StyledRouterButtonLeft = styled(StyledRouterButton)`
  margin-left: auto;
`;

const StyledSeeAllProjects = styled.div`
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledSeeAllProjectsLink = styled(Link)`
  color: ${COLORS.GRAY_500};

  :hover {
    color: ${COLORS.GRAY_500};
    text-decoration: underline;
  }
`;

export const WidgetProjectListDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { projectsInOrgSeek, projectsInOrgSeekDataLoading, setProjectPageSize } = useContext(ProjectsContext);
  const { t } = useTranslator();

  const projectListLinkName = t("menuLinkNames.projectList") ? t("menuLinkNames.projectList") : "";
  const projectStartNewLinkName = t("menuLinkNames.projectStartNew") ? t("menuLinkNames.projectStartNew") : "";

  useEffect(() => {
    if (setProjectPageSize) {
      setProjectPageSize(5);
    }
  }, []); // eslint-disable-line

  return (
    <Box>
      <WidgetHeadingWrapper>
        <SectionHeader>{t("widget.projectsList")}</SectionHeader>

        {hasPermission && <WidgetProjectListMenu />}
      </WidgetHeadingWrapper>

      {!projectsInOrgSeekDataLoading && projectsInOrgSeek?.length === 0 && (
        <>
          <StyledEmptyWidgetText>{t("widget.projectsListEmptyListText")}</StyledEmptyWidgetText>

          <StyledRouterButtonLeft
            to={`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`}
            title={projectStartNewLinkName}
          >
            {projectStartNewLinkName}
          </StyledRouterButtonLeft>
        </>
      )}

      {!projectsInOrgSeekDataLoading && projectsInOrgSeek && projectsInOrgSeek?.length > 0 && (
        <StyledProjectList>
          {projectsInOrgSeek &&
            projectsInOrgSeek?.map((project) => {
              return (
                <StyledProjectListItem key={project.id}>
                  <StyledProjectLink
                    to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
                    title={project.name}
                  >
                    <StyledProjectName>{project.name}</StyledProjectName>
                    <StyledCommentInfoWrapper>
                      <StyledPostCount>{project.totalRootPostCount}</StyledPostCount>
                      <StyledPostIcon iconSize={FONT_SIZES.XSMALL} color={COLORS.GRAY_500} />
                    </StyledCommentInfoWrapper>
                  </StyledProjectLink>
                </StyledProjectListItem>
              );
            })}
        </StyledProjectList>
      )}

      {!projectsInOrgSeekDataLoading && projectsInOrgSeek && projectsInOrgSeek?.length > 1 && (
        <StyledSeeAllProjects>
          <StyledSeeAllProjectsLink
            to={`/${preferredOrgId}${routeConstantsCleavedApp.projectList.route}`}
            title={projectListLinkName}
          >
            {t("widget.projectListSeeMore")}
          </StyledSeeAllProjectsLink>
        </StyledSeeAllProjects>
      )}
    </Box>
  );
};
