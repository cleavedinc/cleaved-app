import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import { routeConstantsCleavedApp } from "../../router";
import {
  BORDERS,
  Logo,
  isMenuItemActive,
  NavigationButtonLabel,
  NavigationButton,
  NavigationButtonWrapper,
  OnOutsideClick,
  SPACING,
  NavigationWrapper,
  DropdownMenu,
} from "@cleaved/ui";

import { HeaderAvatar } from "../../components";
import { useTranslator } from "../../hooks";

import { StyledStickyHeader } from "./styled-sticky-header";
import { authTokenContext } from "../../contexts";

type HeaderMobileTopBarProps = {
  className?: string;
};

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
  cursor: pointer;
  padding: ${SPACING.MEDIUM};
  text-align: center;
  width: 100%;
`;

const StyledHeaderMobileTopBarStickyHeader = styled(StyledStickyHeader)`
  padding: ${SPACING.SMALL};
`;

const StyledLogoWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

const StyledDropdownMenuNavigationButton = styled(NavigationButton)`
  border-bottom: ${BORDERS.BORDER_PRIMARY};

  &:last-child:after {
    border-bottom: none;
  }
`;

export const HeaderMobileTopBar: FunctionComponent<HeaderMobileTopBarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslator();
  const [isAccountMenuActive, setIsAccountMenuActive] = useState(false);
  const onAccountMenuClick = () => setIsAccountMenuActive(!isAccountMenuActive);
  const handleCloseMenu = () => setIsAccountMenuActive(false);
  const { logOut, preferredOrgId } = useContext(authTokenContext);

  const handleLogout = () => {
    logOut();
    handleCloseMenu();
  };

  const accountLinkName = t("menuLinkNames.account") ? t("menuLinkNames.account") : "";

  return (
    <StyledHeaderMobileTopBarStickyHeader className={className} hasBoxShadow>
      <NavigationWrapper>
        <StyledLogoWrapper>
          <Logo
            companyName={t("companyName")}
            height="30px"
            isLogoTextVisible
            margin={`0 ${SPACING.SMALL} 0 0`}
            url={`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`}
            width="30px"
          />
        </StyledLogoWrapper>

        <NavigationButtonWrapper>
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
                      to={`/${preferredOrgId}${routeConstantsCleavedApp.account.route}`}
                    >
                      <NavigationButtonLabel>{accountLinkName}</NavigationButtonLabel>
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
        </NavigationButtonWrapper>
      </NavigationWrapper>
    </StyledHeaderMobileTopBarStickyHeader>
  );
};
