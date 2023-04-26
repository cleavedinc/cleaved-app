import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuItem, MenuRadioGroup } from "@szhsin/react-menu";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, COLORS, EllipsisHorizontalIcon } from "@cleaved/ui";

import { ProjectStatus } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";
import { PROJECT_SET_STATUS } from "../../gql-mutations";

import "@szhsin/react-menu/dist/index.css";

type ProjectEditMenuProps = {
  projectStatus: ProjectStatus;
  projectId: string;
  refreshProjectListData: (() => void) | undefined;
};

const StyledBasicItem = styled(MenuItem)`
  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    color: ${COLORS.BLACK};
  }
`;

export const ProjectsEditMenu: FunctionComponent<ProjectEditMenuProps> = (props) => {
  const { projectId, projectStatus, refreshProjectListData } = props;
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
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
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={COLORS.GRAY_500} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <MenuRadioGroup value={projectStatus} onRadioChange={(e) => handleProjectSetStatus(e.value)}>
        <StyledBasicItem type="radio" value={ProjectStatus.Active}>
          {t("projects.active")}
        </StyledBasicItem>

        <StyledBasicItem type="radio" value={ProjectStatus.Inactive}>
          {t("projects.inactive")}
        </StyledBasicItem>

        <StyledBasicItem type="radio" value={ProjectStatus.Archived}>
          {t("projects.archive")}
        </StyledBasicItem>
      </MenuRadioGroup>
    </StyledBasicMenu>
  );
};
