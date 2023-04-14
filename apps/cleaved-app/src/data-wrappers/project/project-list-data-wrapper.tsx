import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import {
  mediaQueries,
  SPACING,
  StyledTable,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTHeadTr,
  StyledTHead,
  StyledTr,
} from "@cleaved/ui";

import { authTokenContext, ProjectsContext } from "../../contexts";
import {
  ProjectsEditMenu,
  HelperInfoHeaderTextImageRightBox,
  StyledRouterButton,
  StyledRouterButtonLink,
} from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

const StyledProjectLink = styled(Link)``;

const StyledRouterButtonLeft = styled(StyledRouterButton)`
  margin-left: auto;
`;

const StyledProjectListHeader = styled.div`
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-top: ${SPACING.SMALL};
  }
`;

const StyledTdWithMenuContent = styled(StyledTd)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: "Project name";
    }

    &:nth-of-type(2):before {
      content: "Date created";
    }

    &:nth-of-type(3):before {
      content: "Owner";
    }

    &:nth-of-type(4):before {
      content: "Posts";
    }
  }

  ${mediaQueries.XS_LANDSCAPE} {
    &:first-child {
      width: 40%;
    }
  }
`;

const StyledTdWithMenuContentEdit = styled(StyledTd)`
  width: 100px;

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(4):before {
      content: "Edit";
    }
  }
`;

/// ///
const StyledInviteMorePeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${SPACING.XLARGE} 0 ${SPACING.XXXLARGE};
  text-align: center;

  ${mediaQueries.SM_MD} {
    margin: ${SPACING.XLARGE} 0;
  }
`;

const StyledAddPeopleText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

export const ProjectListDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { projectsInOrgSeek, projectsInOrgSeekDataLoading } = useContext(ProjectsContext);
  const { t } = useTranslator();

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.projectslistImageAlt")}
        helperInfoImageUrl={"/helper-info/project-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.projectslistText")}
        helperInfoTextHeader={t("helperInformationBoxes.projectslistHeader")}
        width={"400px"}
      />

      {hasPermission && (
        <StyledProjectListHeader>
          <StyledRouterButtonLeft
            to={`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`}
            title={routeConstantsCleavedApp.projectStartNew.name}
          >
            {t("projectStartNew.startNewProject")}
          </StyledRouterButtonLeft>
        </StyledProjectListHeader>
      )}

      {!projectsInOrgSeekDataLoading && projectsInOrgSeek && projectsInOrgSeek?.length > 0 && (
        <StyledTable role="table">
          <StyledTHead role="rowgroup">
            <StyledTHeadTr role="row">
              <StyledTh role="columnheader">{t("project.projectName")}</StyledTh>
              <StyledTh role="columnheader">{t("project.dateCreated")}</StyledTh>
              <StyledTh role="columnheader">{t("project.owner")}</StyledTh>
              <StyledTh role="columnheader">{t("project.posts")}</StyledTh>
              <StyledTh role="columnheader">{t("project.edit")}</StyledTh>
            </StyledTHeadTr>
          </StyledTHead>
          <StyledTBody role="rowgroup">
            {projectsInOrgSeek?.map((project) => {
              return (
                <StyledTr key={project.id} role="row">
                  <StyledTdWithMenuContent role="cell">
                    <StyledProjectLink
                      to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
                      title={project.name}
                    >
                      {project.name}
                    </StyledProjectLink>
                  </StyledTdWithMenuContent>
                  <StyledTdWithMenuContent role="cell">temp: 01/25/2023</StyledTdWithMenuContent>
                  <StyledTdWithMenuContent role="cell">temp: James Riddley</StyledTdWithMenuContent>
                  <StyledTdWithMenuContent role="cell">{project.totalRootPostCount}</StyledTdWithMenuContent>
                  <StyledTdWithMenuContentEdit role="cell">
                    {hasPermission && <ProjectsEditMenu />}
                  </StyledTdWithMenuContentEdit>
                </StyledTr>
              );
            })}
          </StyledTBody>
        </StyledTable>
      )}

      {hasPermission && !projectsInOrgSeekDataLoading && projectsInOrgSeek && projectsInOrgSeek?.length > 0 && (
        <StyledInviteMorePeopleWrapper>
          <StyledAddPeopleText>{t("projectStartNew.addNewProjectHelperText")}</StyledAddPeopleText>

          <StyledRouterButtonLink
            to={`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`}
            title={routeConstantsCleavedApp.projectStartNew.name}
          >
            {t("projectStartNew.startNewProject")}
          </StyledRouterButtonLink>
        </StyledInviteMorePeopleWrapper>
      )}
    </>
  );
};
