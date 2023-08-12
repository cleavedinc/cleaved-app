import React, { FunctionComponent, useContext, useState } from "react";
import { Link } from "@reach/router";
import Select from "react-select";
import dayjs from "dayjs";
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

import projectHelperImage from "../../media/helper-info/project-helper-image.svg";

type ProjectStatusType = {
  value: ProjectStatus;
  label: string;
};

type StyledTdWithMenuContentProps = {
  projectName?: string;
  dateCreated?: string;
  posts?: string;
};

type StyledTdWithMenuContentEditProps = {
  editStatus?: string;
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

const StyledProjectLink = styled(Link)``;

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

const StyledTdWithMenuContent = styled(StyledTd)<StyledTdWithMenuContentProps>`
  vertical-align: middle; /* Fixes a double bottom border in safari */

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: ${(props) => (props.projectName ? `"${props.projectName}"` : null)}; // "Project name";
    }

    &:nth-of-type(2):before {
      content: ${(props) => (props.dateCreated ? `"${props.dateCreated}"` : null)}; // "Date created";
    }

    &:nth-of-type(3):before {
      content: ${(props) => (props.posts ? `"${props.posts}"` : null)}; // "Posts";
    }
  }

  ${mediaQueries.XS_LANDSCAPE} {
    &:first-child {
      width: 60%;
    }

    &:nth-child(2) {
    }
  }
`;

const StyledTdWithMenuContentEdit = styled(StyledTd)<StyledTdWithMenuContentEditProps>`
  width: 100px;

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(4):before {
      content: ${(props) => (props.editStatus ? `"${props.editStatus}"` : null)}; // "Edit Status";
    }
  }
`;

const StyledThRight = styled(StyledTh)``;

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
  } = useProjectsInOrganizationSeek(null, 100, [projectStatus]);

  const projectStatusOptions: readonly ProjectStatusType[] = [
    { value: ProjectStatus.Active, label: t("projects.active") },
    { value: ProjectStatus.Inactive, label: t("projects.inactive") },
    { value: ProjectStatus.Archived, label: t("projects.archive") },
  ];

  const projectStartNewLinkName = t("menuLinkNames.projectForm") ? t("menuLinkNames.projectForm") : "";

  const projectName = t("project.projectName") ? t("project.projectName") : "";
  const dateCreated = t("project.dateCreated") ? t("project.dateCreated") : "";
  const posts = t("project.posts") ? t("project.posts") : "";
  const editStatus = t("project.editStatus") ? t("project.editStatus") : "";

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
            defaultValue={projectStatusOptions[0]}
            isSearchable={false}
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
              option: (styles, { isSelected }) => {
                return {
                  ...styles,
                  color: isSelected ? colorTheme.colors.always_white_color : colorTheme.colors.baseText_color,
                };
              },
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
            to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}${routeConstantsCleavedApp.projectForm.route}`}
            title={projectStartNewLinkName}
          >
            {t("projectForm.startNewProject")}
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
                {hasPermission && <StyledTh role="columnheader">{t("project.editStatus")}</StyledTh>}
              </StyledTHeadTr>
            </StyledTHead>
            <StyledTBody role="rowgroup">
              {projectsInOrganizationSeekData.map((project) => {
                return (
                  <StyledTrWrapper key={project.id} role="row">
                    <StyledTdWithMenuContent projectName={projectName} role="cell">
                      <StyledProjectLink
                        to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
                        title={project.name}
                      >
                        {project.name}
                      </StyledProjectLink>
                    </StyledTdWithMenuContent>
                    <StyledTdWithMenuContent dateCreated={dateCreated} role="cell">
                      {dayjs(project.createdAt).format("MMMM DD, YYYY")}
                    </StyledTdWithMenuContent>
                    <StyledTdWithMenuContent posts={posts} role="cell">
                      {project.totalRootPostCount}
                    </StyledTdWithMenuContent>
                    {hasPermission && (
                      <StyledTdWithMenuContentEdit editStatus={editStatus} role="cell">
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
