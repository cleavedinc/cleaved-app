import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { ButtonLink, Logo, NavigationButtonWrapper, NavigationWrapper } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
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
  const { logOut, loggedIn } = useContext(authTokenContext);

  return (
    <StyledLoggedoutStickyHeader>
      <StyledNavigationWrapper>
        <StyledLogoWrapper>
          <Logo
            companyName="Admin Portal"
            height="15px"
            logoTextVisible="true"
            margin={`0 0.3rem 0 0`}
            url={"/"}
            width="15px"
          />
        </StyledLogoWrapper>

        {loggedIn ? (
          <NavigationButtonWrapper>
            <StyledButtonLink type="button" onClick={() => logOut()}>
              Log out
            </StyledButtonLink>
          </NavigationButtonWrapper>
        ) : (
          <NavigationButtonWrapper>
            <StyledLoginLink title="Log in" to={routeConstantsCleavedApp.login.route}>
              Log in
            </StyledLoginLink>
          </NavigationButtonWrapper>
        )}
      </StyledNavigationWrapper>
    </StyledLoggedoutStickyHeader>
  );
};
