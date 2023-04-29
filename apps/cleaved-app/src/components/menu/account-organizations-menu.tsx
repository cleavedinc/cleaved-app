import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { Menu, MenuItem } from "@szhsin/react-menu";
import styled, { useTheme } from "styled-components";

import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledBasicMenu = styled(Menu)`
  margin-left: auto;

  ul {
    color: ${({ theme }) => theme.colors.baseText_color};
  }
`;

export const AccountOrganizationsMenu: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const theme = useTheme();
  const { t } = useTranslator();

  const organizationRegisterLinkName = t("menuLinkNames.organizationRegister")
    ? t("menuLinkNames.organizationRegister")
    : "";

  const handleRouteToProjectStartNew = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.accountOrganizationRegister.route}`);
  };

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToProjectStartNew()}>{organizationRegisterLinkName}</StyledBasicItem>
    </StyledBasicMenu>
  );
};
