import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { useTheme } from "styled-components";

import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { StyledBasicItem, StyledBasicMenu, StyledAwardIcon } from "./components";

import "@szhsin/react-menu/dist/index.css";

export const OrganizationMembershipMenu: FunctionComponent = () => {
  const theme = useTheme();
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  const handleRouteToChangeMembership = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.membership.route}`);
  };

  const editPostButton = t("widget.editProjectDetailsMenu") ? t("widget.editProjectDetailsMenu") : undefined;

  return (
    <StyledBasicMenu
      arrow={true}
      menuButton={
        <CircleEditButtonSmall type="button" aria-label={editPostButton}>
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToChangeMembership()}>
        <StyledAwardIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        {t("membership.membershipDetails")}
      </StyledBasicItem>
    </StyledBasicMenu>
  );
};
