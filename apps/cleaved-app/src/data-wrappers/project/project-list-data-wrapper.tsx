import React, { FunctionComponent, useContext, useState } from "react";
import { Link } from "@reach/router";
import Select from "react-select";
import styled, { useTheme } from "styled-components";

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
  COLORS,
} from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import {
  ProjectsEditMenu,
  HelperInfoHeaderTextImageRightBox,
  StyledRouterButton,
  StyledRouterButtonLink,
} from "../../components";

import { OrgPermissionLevel, ProjectStatus } from "../../generated-types/graphql";
import { useProjectsInOrganizationSeek, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

type ProjectStatusType = {
  value: ProjectStatus;
  label: string;
};

const StyledAddPeopleText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

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

const StyledProjectLink = styled(Link)`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
`;

const StyledRouterButtonLeft = styled(StyledRouterButton)`
  margin-left: auto;
`;

const StyledProjectListHeader = styled.div`
  align-items: center;
  display: flex;
  margin: ${SPACING.XLARGE} 0 ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin: ${SPACING.LARGE} ${SPACING.SMALL} ${SPACING.MEDIUM} 0;
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
      content: "Posts";
    }
  }

  ${mediaQueries.XS_LANDSCAPE} {
    &:first-child {
      width: 50%;
    }

    &:nth-child(2) {
      padding-right: ${SPACING.MEDIUM};
      text-align: end;
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

const StyledThRight = styled(StyledTh)`
  &:nth-child(2) {
    padding-right: ${SPACING.MEDIUM};
    text-align: end;
  }
`;

const StyledTrWrapper = styled(StyledTr)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-bottom: ${SPACING.LARGE};
  }
`;

export const ProjectListDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const [projectStatus, setProjectStatus] = useState<ProjectStatus>(ProjectStatus.Active);
  const colorTheme = useTheme();
  const { t } = useTranslator();

  const {
    projectsInOrganizationSeekData,
    projectsInOrganizationSeekDataLoading,
    projectsInOrganizationSeekDataRefetch,
  } = useProjectsInOrganizationSeek(null, 100, projectStatus);

  const projectStatusOptions: readonly ProjectStatusType[] = [
    { value: ProjectStatus.Active, label: t("projects.active") },
    { value: ProjectStatus.Inactive, label: t("projects.inactive") },
    { value: ProjectStatus.Archived, label: t("projects.archive") },
  ];

  const projectStartNewLinkName = t("menuLinkNames.projectStartNew") ? t("menuLinkNames.projectStartNew") : "";

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.projectslistImageAlt")}
        helperInfoImageUrl={"/helper-info/project-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.projectslistText")}
        helperInfoTextHeader={t("helperInformationBoxes.projectslistHeader")}
        width={"250px"}
      />

      {hasPermission && (
        <StyledProjectListHeader>
          <Select
            defaultValue={projectStatusOptions[0]}
            onChange={(projectStatusFilter) => projectStatusFilter && setProjectStatus(projectStatusFilter.value)}
            options={projectStatusOptions}
            styles={{
              singleValue: (baseStyles) => ({
                ...baseStyles,
                textTransform: "capitalize",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                textTransform: "capitalize",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral0: colorTheme.colors.baseBox_backgroundColor,
                neutral80: colorTheme.colors.baseText_color,
                primary: colorTheme.colors.baseLink_color,
                primary25: colorTheme.colors.baseButtonAndIcon_backgroundColorHover,
              },
            })}
          />

          <StyledRouterButtonLeft
            to={`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`}
            title={projectStartNewLinkName}
          >
            {t("projectStartNew.startNewProject")}
          </StyledRouterButtonLeft>
        </StyledProjectListHeader>
      )}

      {!projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData.length > 0 && (
          <StyledTable role="table">
            <StyledTHead role="rowgroup">
              <StyledTHeadTr role="row">
                <StyledTh role="columnheader">{t("project.projectName")}</StyledTh>
                <StyledThRight role="columnheader">{t("project.dateCreated")}</StyledThRight>
                <StyledTh role="columnheader">{t("project.posts")}</StyledTh>
                {hasPermission && <StyledTh role="columnheader">{t("project.edit")}</StyledTh>}
              </StyledTHeadTr>
            </StyledTHead>
            <StyledTBody role="rowgroup">
              {projectsInOrganizationSeekData.map((project) => {
                return (
                  <StyledTrWrapper key={project.id} role="row">
                    <StyledTdWithMenuContent role="cell">
                      <StyledProjectLink
                        to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
                        title={project.name}
                      >
                        {project.name}
                      </StyledProjectLink>
                    </StyledTdWithMenuContent>
                    <StyledTdWithMenuContent role="cell">temp: 01/25/2023</StyledTdWithMenuContent>
                    <StyledTdWithMenuContent role="cell">{project.totalRootPostCount}</StyledTdWithMenuContent>
                    {hasPermission && (
                      <StyledTdWithMenuContentEdit role="cell">
                        <ProjectsEditMenu
                          projectId={project.id}
                          projectStatus={project.status}
                          refreshProjectListData={projectsInOrganizationSeekDataRefetch}
                        />
                      </StyledTdWithMenuContentEdit>
                    )}
                  </StyledTrWrapper>
                );
              })}
            </StyledTBody>
          </StyledTable>
        )}

      {hasPermission &&
        !projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData.length >= 0 && (
          <StyledInviteMorePeopleWrapper>
            <StyledAddPeopleText>{t("projectStartNew.addNewProjectHelperText")}</StyledAddPeopleText>

            <StyledRouterButtonLink
              to={`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`}
              title={projectStartNewLinkName}
            >
              {t("projectStartNew.startNewProject")}
            </StyledRouterButtonLink>
          </StyledInviteMorePeopleWrapper>
        )}
    </>
  );
};
