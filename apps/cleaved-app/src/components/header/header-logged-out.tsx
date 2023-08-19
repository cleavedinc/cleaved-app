import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { ButtonLink, Logo, SPACING, NavigationButtonWrapper, NavigationWrapper } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { StyledStickyHeader } from "./styled-sticky-header";

const StyledButtonLink = styled(ButtonLink)`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
`;

const StyledLoginLink = styled(Link)`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
`;

const StyledLogoWrapper = styled.div`
  display: flex;
`;

const StyledLoggedoutStickyHeader = styled(StyledStickyHeader)``;

const StyledNavigationWrapper = styled(NavigationWrapper)`
  min-height: 35px;
`;

export const HeaderLoggedOut: FunctionComponent = () => {
  const { t } = useTranslator();
  const { logOut, loggedIn } = useContext(authTokenContext);

  const signUpLogIn = t("buttonLabels.signUpLogIn") ? t("buttonLabels.signUpLogIn") : "";

  return (
    <StyledLoggedoutStickyHeader hasBoxShadow>
      <StyledNavigationWrapper>
        <StyledLogoWrapper>
          <Logo
            companyName={t("companyName")}
            height="15px"
            isLogoTextVisible
            margin={`0 0.3rem 0 0`}
            url={"/"}
            width="15px"
          />
        </StyledLogoWrapper>

        {loggedIn ? (
          <NavigationButtonWrapper>
            <StyledButtonLink type="button" onClick={() => logOut()}>
              {t("buttonLabels.logOut")}
            </StyledButtonLink>
          </NavigationButtonWrapper>
        ) : (
          <NavigationButtonWrapper>
            <StyledLoginLink title={signUpLogIn} to={routeConstantsCleavedApp.login.route}>
              {signUpLogIn}
            </StyledLoginLink>
          </NavigationButtonWrapper>
        )}
      </StyledNavigationWrapper>
    </StyledLoggedoutStickyHeader>
  );
};
