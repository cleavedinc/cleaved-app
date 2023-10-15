import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";
import { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { ProjectStatus } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";
import { PROJECT_SET_STATUS } from "../../gql-mutations";
import { routeConstantsCleavedApp } from "../../router";

import {
  StyledArchiveIcon,
  StyledBasicItem,
  StyledEditIcon,
  StyledRadioGroupBasicItem,
  StyledBasicMenu,
  StyledMenuRadioGroupNoBorder,
  StyledSubMenu,
} from "./components";

import "@szhsin/react-menu/dist/index.css";

type ProjectEditMenuProps = {
  projectStatus: ProjectStatus;
  projectId: string;
  refreshProjectListData: (() => void) | undefined;
};

export const ProjectsEditMenu: FunctionComponent<ProjectEditMenuProps> = (props) => {
  const { projectId, projectStatus, refreshProjectListData } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const theme = useTheme();
  const { t } = useTranslator();

  const [projectSetStatus] = useMutation(PROJECT_SET_STATUS, {
    onCompleted: () => {
      if (refreshProjectListData) {
        refreshProjectListData();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleProjectSetStatus = (projectStatusArg: ProjectStatus) => {
    projectSetStatus({
      variables: {
        projectId,
        organizationId,
        status: projectStatusArg,
      },
    });
  };

  const handleRouteToProjectEdit = () => {
    navigate(
      `/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${projectId}${routeConstantsCleavedApp.projectForm.route}`
    );
  };

  const editProjectButton = t("projects.editProject") ? t("projects.editProject") : undefined;
  // const setProjectStatus = t("project.setProjectStatus") ? t("project.setProjectStatus") : undefined;

  const setProjectStatus = () => {
    return (
      <>
        <StyledArchiveIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        {t("project.setProjectStatus")}
      </>
    );
  };

  return (
    <StyledBasicMenu
      arrow={true}
      menuButton={
        <CircleEditButtonSmall type="button" aria-label={editProjectButton}>
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      onItemClick={(e) => (e.keepOpen = true)}
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToProjectEdit()}>
        <StyledEditIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        {t("widget.projectDetailsEdit")}
      </StyledBasicItem>

      <StyledSubMenu arrow={true} label={setProjectStatus()}>
        <StyledMenuRadioGroupNoBorder value={projectStatus} onRadioChange={(e) => handleProjectSetStatus(e.value)}>
          <StyledRadioGroupBasicItem type="radio" value={ProjectStatus.Active}>
            {t("projects.active")}
          </StyledRadioGroupBasicItem>

          <StyledRadioGroupBasicItem type="radio" value={ProjectStatus.Inactive}>
            {t("projects.inactive")}
          </StyledRadioGroupBasicItem>

          <StyledRadioGroupBasicItem type="radio" value={ProjectStatus.Archived}>
            {t("projects.archive")}
          </StyledRadioGroupBasicItem>
        </StyledMenuRadioGroupNoBorder>
      </StyledSubMenu>
    </StyledBasicMenu>
  );
};
