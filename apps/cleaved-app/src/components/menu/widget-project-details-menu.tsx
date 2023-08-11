import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { useTheme } from "styled-components";

import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useRouteParams, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { StyledBasicItem, StyledBasicMenu, StyledEditIcon } from "./components";

import "@szhsin/react-menu/dist/index.css";

export const WidgetProjectDetailsMenu: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const routeParams = useRouteParams();
  const projectId = routeParams.projectId ? routeParams.projectId : null;
  const theme = useTheme();
  const { t } = useTranslator();

  const handleRouteToProjectStartNew = () => {
    navigate(
      `/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${projectId}${routeConstantsCleavedApp.projectForm.route}`
    );
  };

  return (
    <StyledBasicMenu
      arrow={true}
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToProjectStartNew()}>
        <StyledEditIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        {t("widget.projectDetailsEdit")}
      </StyledBasicItem>
    </StyledBasicMenu>
  );
};
