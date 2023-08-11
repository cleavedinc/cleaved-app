import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon } from "@cleaved/ui";

import { ProjectStatus } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";
import { PROJECT_SET_STATUS } from "../../gql-mutations";

import { StyledRadioGroupBasicItem, StyledBasicMenu, StyledMenuRadioGroupNoBorder } from "./components";

import "@szhsin/react-menu/dist/index.css";

type ProjectEditMenuProps = {
  projectStatus: ProjectStatus;
  projectId: string;
  refreshProjectListData: (() => void) | undefined;
};

export const ProjectsEditMenu: FunctionComponent<ProjectEditMenuProps> = (props) => {
  const { projectId, projectStatus, refreshProjectListData } = props;
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

  return (
    <StyledBasicMenu
      arrow={true}
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
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
    </StyledBasicMenu>
  );
};
