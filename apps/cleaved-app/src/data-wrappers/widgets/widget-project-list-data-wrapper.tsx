import React, { FunctionComponent, useContext, useEffect } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { BORDERS, Box, COLORS, CommentIcon, FONT_SIZES, SectionHeader, SPACING } from "@cleaved/ui";

import { StyledRouterButton, WidgetProjectListMenu } from "../../components";
import { authTokenContext, ProjectsContext } from "../../contexts";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

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
  padding: ${SPACING.SMALL};

  :hover {
    background-color: ${COLORS.GRAY_50};
  }

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

const StyledSectionHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
`;

const StyledSeeAllProjects = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  text-align: right;
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
  const { projectsInOrgSeek, projectsInOrgSeekDataLoading, projectsInOrgSeekRefetch, setProjectPageSize } =
    useContext(ProjectsContext);
  const { t } = useTranslator();

  useEffect(() => {
    if (setProjectPageSize) {
      setProjectPageSize(5);
    }

    // if (projectsInOrgSeekRefetch) {
    //   projectsInOrgSeekRefetch(); // TODO: ASK Jeremy if this is the way... I'm refreshing on project create and doens' tseem to retrigger state on the home page without a use effect
    // }
  }, []); // eslint-disable-line

  return (
    <Box>
      <StyledSectionHeaderWrapper>
        <SectionHeader>{t("widget.projectsList")}</SectionHeader>

        {hasPermission && <WidgetProjectListMenu />}
      </StyledSectionHeaderWrapper>

      {!projectsInOrgSeekDataLoading && projectsInOrgSeek?.length === 0 && (
        <>
          <StyledEmptyWidgetText>{t("widget.projectsListEmptyListText")}</StyledEmptyWidgetText>

          <StyledRouterButtonLeft
            to={`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`}
            title={routeConstantsCleavedApp.projectStartNew.name}
          >
            {t("projectStartNew.startNewProject")}
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
                      <StyledCommentCount>{project.totalResponseCount}</StyledCommentCount>
                      <StyledCommentIcon iconSize={FONT_SIZES.XSMALL} color={COLORS.GRAY_500} />
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
            title={routeConstantsCleavedApp.projectList.name}
          >
            {t("widget.projectListSeeMore")}
          </StyledSeeAllProjectsLink>
        </StyledSeeAllProjects>
      )}
    </Box>
  );
};
