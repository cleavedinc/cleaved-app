import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { Menu, MenuItem } from "@szhsin/react-menu";
import styled from "styled-components";

import { CircleEditButtonSmall, COLORS, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicMenu = styled(Menu)`
  margin-left: auto;

  ul {
    color: ${COLORS.BLACK};
  }
`;

export const WidgetProjectListMenu: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  const handleRouteToProjectStartNew = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.projectStartNew.route}`);
  };

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall>
          <EllipsisHorizontalIcon />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToProjectStartNew()}>
        {t("projectStartNew.startNewProject")}
      </StyledBasicItem>
    </StyledBasicMenu>
  );
};
