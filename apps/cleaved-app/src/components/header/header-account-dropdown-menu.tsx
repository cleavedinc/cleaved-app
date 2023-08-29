import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { routeConstantsCleavedApp } from "../../router";
import {
  BORDERS,
  isMenuItemActive,
  NavigationButtonLabel,
  NavigationButton,
  OnOutsideClick,
  SPACING,
  DropdownMenu,
} from "@cleaved/ui";

import { HeaderAvatar } from "../../components";
import { authTokenContext } from "../../contexts";
import { useFindMyAccount, useNavigateToProfile, useTranslator } from "../../hooks";

const StyledMenuUnorderedList = styled.ul`
  li {
    padding: 0;

    &::before {
      display: none;
    }

    & > a {
      padding: ${SPACING.MEDIUM};
      text-align: center;
      width: 100%;
    }
  }
`;

const StyledLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  cursor: pointer;
  padding: ${SPACING.MEDIUM};
  text-align: center;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledDropdownMenuNavigationButton = styled(NavigationButton)`
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};

  &:last-child:after {
    border-bottom: none;
  }
`;

export const HeaderAccountDropdownMenu: FunctionComponent = () => {
  const { t } = useTranslator();
  const { findMyAccountData } = useFindMyAccount();
  const accountId = findMyAccountData?.id;
  const { profilePath } = useNavigateToProfile(accountId);
  const [isAccountMenuActive, setIsAccountMenuActive] = useState(false);
  const onAccountMenuClick = () => setIsAccountMenuActive(!isAccountMenuActive);
  const handleCloseMenu = () => setIsAccountMenuActive(false);
  const { logOut, preferredOrgId } = useContext(authTokenContext);

  const handleLogout = () => {
    logOut();
    handleCloseMenu();
  };

  const accountLinkName = t("menuLinkNames.account") ? t("menuLinkNames.account") : "";
  const profileLinkName = t("menuLinkNames.profile") ? t("menuLinkNames.profile") : "";

  return (
    <OnOutsideClick
      onOutsideClick={() => {
        setIsAccountMenuActive(false);
      }}
    >
      <>
        <HeaderAvatar onClick={onAccountMenuClick} />

        <DropdownMenu className={`${isAccountMenuActive ? "active" : ""}`}>
          <StyledMenuUnorderedList>
            <StyledDropdownMenuNavigationButton>
              <Link
                getProps={isMenuItemActive}
                onClick={handleCloseMenu}
                title={accountLinkName}
                to={`/${preferredOrgId}${routeConstantsCleavedApp.accountProfessionalInformation.route}`}
              >
                <NavigationButtonLabel>{accountLinkName}</NavigationButtonLabel>
              </Link>
            </StyledDropdownMenuNavigationButton>

            <StyledDropdownMenuNavigationButton>
              <Link getProps={isMenuItemActive} onClick={handleCloseMenu} title={profileLinkName} to={profilePath}>
                <NavigationButtonLabel>{profileLinkName}</NavigationButtonLabel>
              </Link>
            </StyledDropdownMenuNavigationButton>

            <StyledDropdownMenuNavigationButton>
              <StyledLogoutButton type="button" onClick={handleLogout}>
                {t("buttonLabels.logOut")}
              </StyledLogoutButton>
            </StyledDropdownMenuNavigationButton>
          </StyledMenuUnorderedList>
        </DropdownMenu>
      </>
    </OnOutsideClick>
  );
};
