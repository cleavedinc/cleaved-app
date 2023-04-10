import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
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

export const MembersListMenu: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
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
        <CircleEditButtonSmall>
          <EllipsisHorizontalIcon />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToAddNewTeammate()}>{t("people.addPerson")}</StyledBasicItem>
      <StyledBasicItem onClick={() => handleRouteToTeamsPage()}>{t("people.viewAllPeople")}</StyledBasicItem>
    </StyledBasicMenu>
  );
};
