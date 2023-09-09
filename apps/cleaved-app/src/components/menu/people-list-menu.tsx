import React, { FunctionComponent, useContext } from "react";
import styled, { useTheme } from "styled-components";
import { navigate } from "@reach/router";

import {
  CircleEditButtonSmall,
  EllipsisHorizontalIcon,
  FONT_SIZES,
  PeopleAltOutlineIcon,
  PersonAddOutlineIcon,
} from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { basicItemIconBase, StyledBasicItem, StyledBasicMenu } from "./components";

import "@szhsin/react-menu/dist/index.css";

const StyledPeopleAltOutlineIcon = styled(PeopleAltOutlineIcon)`
  ${basicItemIconBase};
`;

const StyledPersonAddOutlineIcon = styled(PersonAddOutlineIcon)`
  ${basicItemIconBase};
`;

export const PeopleListMenu: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const theme = useTheme();
  const { t } = useTranslator();

  const handleRouteToPeoplePage = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.peopleList.route}`);
  };

  const handleRouteToAddNewUser = () => {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`);
  };

  const editPeopleListButton = t("people.peopleListMenu") ? t("people.peopleListMenu") : undefined;

  return (
    <StyledBasicMenu
      arrow={true}
      menuButton={
        <CircleEditButtonSmall type="button" aria-label={editPeopleListButton}>
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToAddNewUser()}>
        <StyledPersonAddOutlineIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        {t("people.addPerson")}
      </StyledBasicItem>
      <StyledBasicItem onClick={() => handleRouteToPeoplePage()}>
        <StyledPeopleAltOutlineIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        {t("people.viewAllPeople")}
      </StyledBasicItem>
    </StyledBasicMenu>
  );
};
