import React, { FunctionComponent, useContext, useState } from "react";
import Select from "react-select";
import styled, { useTheme } from "styled-components";

import { mediaQueries, SPACING } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { HelperInfoHeaderTextImageRightBox, StyledRouterButton, StyledRouterButtonLink } from "../../components";

import { OrgPermissionLevel, ProjectStatus } from "../../generated-types/graphql";
import { useProjectsInOrganizationSeek, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import projectHelperImage from "../../media/helper-info/project-helper-image.svg";

import { ProjectCard } from "./components";

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

const StyledRouterButtonLeft = styled(StyledRouterButton)`
  margin-left: auto;
`;

const StyledProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${mediaQueries.SM} {
    flex-direction: row;
    margin-right: -10px;
  }
`;

const StyledProjectListHeader = styled.div`
  align-items: center;
  display: flex;
  margin: ${SPACING.XLARGE} 0 ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin: ${SPACING.LARGE} ${SPACING.SMALL} ${SPACING.MEDIUM} 0;
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
  } = useProjectsInOrganizationSeek(null, 500, [projectStatus]);

  const projectStatusOptions: readonly ProjectStatusType[] = [
    { value: ProjectStatus.Active, label: t("projects.active") },
    { value: ProjectStatus.Inactive, label: t("projects.inactive") },
    { value: ProjectStatus.Archived, label: t("projects.archive") },
  ];

  const projectStartNewLinkName = t("menuLinkNames.projectForm") ? t("menuLinkNames.projectForm") : "";
  const projectStatusSelect = t("project.projectStatusSelect") ? t("project.projectStatusSelect") : "";

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.projectslistImageAlt")}
        helperInfoImageUrl={projectHelperImage}
        helperInfoText={t("helperInformationBoxes.projectslistText")}
        helperInfoTextHeader={t("helperInformationBoxes.projectslistHeader")}
        width={"250px"}
      />

      {hasPermission && (
        <StyledProjectListHeader>
          <Select
            aria-label={projectStatusSelect}
            defaultValue={projectStatusOptions[0]}
            isSearchable={false}
            onChange={(projectStatusFilter) => projectStatusFilter && setProjectStatus(projectStatusFilter.value)}
            options={projectStatusOptions}
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
            to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}${routeConstantsCleavedApp.projectForm.route}`}
            title={projectStartNewLinkName}
          >
            {t("projectForm.startNewProject")}
          </StyledRouterButtonLeft>
        </StyledProjectListHeader>
      )}

      <StyledProjectCardWrapper>
        {!projectsInOrganizationSeekDataLoading &&
          projectsInOrganizationSeekData &&
          projectsInOrganizationSeekData.length > 0 &&
          projectsInOrganizationSeekData.map((project) => {
            return (
              <ProjectCard key={project.id} project={project} refetchData={projectsInOrganizationSeekDataRefetch} />
            );
          })}
      </StyledProjectCardWrapper>

      {hasPermission &&
        !projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData.length >= 0 && (
          <StyledInviteMorePeopleWrapper>
            <StyledAddPeopleText>{t("projectForm.addNewProjectHelperText")}</StyledAddPeopleText>

            <StyledRouterButtonLink
              to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}${routeConstantsCleavedApp.projectForm.route}`}
              title={projectStartNewLinkName}
            >
              {t("projectForm.startNewProject")}
            </StyledRouterButtonLink>
          </StyledInviteMorePeopleWrapper>
        )}
    </>
  );
};
