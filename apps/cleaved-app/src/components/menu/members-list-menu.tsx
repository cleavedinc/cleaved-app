import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { Menu, MenuItem } from "@szhsin/react-menu";
import styled, { useTheme } from "styled-components";

import { BORDERS, CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover,
  &.szh-menu__item--hover {
    background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  }
`;

const StyledBasicMenu = styled(Menu)`
  margin-left: auto;

  ul {
    background-color: ${({ theme }) => theme.colors.body_backgroundColor};
    border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
    color: ${({ theme }) => theme.colors.baseText_color};
  }
`;

export const MembersListMenu: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const theme = useTheme();
  const { t } = useTranslator();

  const handleRouteToTeamsPage = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.teamsList.route}`);
  };

  const handleRouteToAddNewTeammate = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`);
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
      <StyledBasicItem onClick={() => handleRouteToAddNewTeammate()}>{t("people.addPerson")}</StyledBasicItem>
      <StyledBasicItem onClick={() => handleRouteToTeamsPage()}>{t("people.viewAllPeople")}</StyledBasicItem>
    </StyledBasicMenu>
  );
};
