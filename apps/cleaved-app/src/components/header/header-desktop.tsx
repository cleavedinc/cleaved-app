import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { FeedbackFish } from "@feedback-fish/react";

import { routeConstantsCleavedApp } from "../../router";
import {
  BORDERS,
  ButtonSecondary,
  Logo,
  isMenuItemActive,
  NavigationButtonLabel,
  NavigationButton,
  NavigationButtonWrapper,
  OnOutsideClick,
  SPACING,
  NavigationLinksWrapper,
  NavigationWrapper,
  DropdownMenu,
} from "@cleaved/ui";

import { HeaderAvatar } from "../../components";
import { authTokenContext } from "../../contexts";
import { useFindMyAccount, useTranslator } from "../../hooks";

import { MainNavigationLinks } from "./main-navigation-links";
import { StyledStickyHeader } from "./styled-sticky-header";

type HeaderDesktopProps = {
  className?: string;
};

const StyledFeedbackButton = styled(ButtonSecondary)`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  margin-right: ${SPACING.MEDIUM};
`;

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

const MainNavigationLinksWrapper = styled(NavigationLinksWrapper)`
  align-items: center;
  display: flex;
  margin-left: 50px;
`;

const StyledLogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledDropdownMenuNavigationButton = styled(NavigationButton)`
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};

  &:last-child:after {
    border-bottom: none;
  }
`;

export const HeaderDesktop: FunctionComponent<HeaderDesktopProps> = (props) => {
  const { className } = props;
  const { t } = useTranslator();
  const [isAccountMenuActive, setIsAccountMenuActive] = useState(false);
  const onAccountMenuClick = () => setIsAccountMenuActive(!isAccountMenuActive);
  const handleCloseMenu = () => setIsAccountMenuActive(false);
  const { logOut, preferredOrgId } = useContext(authTokenContext);
  const accountQuery = useFindMyAccount();
  const currentUserEmail = accountQuery.data?.findMyAccount.emailAddress;

  const handleLogout = () => {
    logOut();
    handleCloseMenu();
  };

  const accountLinkName = t("menuLinkNames.account") ? t("menuLinkNames.account") : "";

  return (
    <StyledStickyHeader className={className} hasBoxShadow>
      <NavigationWrapper>
        <StyledLogoWrapper>
          <Logo
            companyName={t("companyName")}
            height="15px"
            isLogoTextVisible={true}
            margin={`0 0.3rem 0 0`}
            url={`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`}
            width="15px"
          />
        </StyledLogoWrapper>

        <MainNavigationLinksWrapper>
          <MainNavigationLinks />
        </MainNavigationLinksWrapper>

        <NavigationButtonWrapper>
          <FeedbackFish projectId="eb621b958df978" userId={currentUserEmail}>
            <StyledFeedbackButton>{t("buttonLabels.giveFeedback")}</StyledFeedbackButton>
          </FeedbackFish>

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
                      to={`/${preferredOrgId}${routeConstantsCleavedApp.accountPersonalInformation.route}`}
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
    </StyledStickyHeader>
  );
};
