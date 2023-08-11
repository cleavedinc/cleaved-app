import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { useTheme } from "styled-components";

import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { StyledBasicItem, StyledBasicMenu } from "./components";

import "@szhsin/react-menu/dist/index.css";

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
      arrow={true}
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
