import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { NavigationButtonWrapper, mediaQueries, NavigationLinksWrapper, NavigationWrapper } from "@cleaved/ui";

import { HeaderAccountDropdownMenu } from "./header-account-dropdown-menu";
import { HeaderLogo } from "./header-logo";
import { MainNavigationLinks } from "./main-navigation-links";
import { StyledStickyHeader } from "./styled-sticky-header";

type HeaderDesktopProps = {
  className?: string;
};

const MainNavigationLinksWrapper = styled(NavigationLinksWrapper)`
  align-items: center;
  display: flex;
  margin-left: 50px;
`;

const StyledHeaderWidthWrapper = styled.div`
  margin: auto;
  width: 100%;

  ${mediaQueries.LG} {
    max-width: 1450px;
  }
`;

const StyledLogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const HeaderDesktop: FunctionComponent<HeaderDesktopProps> = (props) => {
  const { className } = props;

  return (
    <StyledStickyHeader className={className}>
      <StyledHeaderWidthWrapper>
        <NavigationWrapper>
          <StyledLogoWrapper>
            <HeaderLogo />
          </StyledLogoWrapper>

          <MainNavigationLinksWrapper>
            <MainNavigationLinks />
          </MainNavigationLinksWrapper>

          <NavigationButtonWrapper>
            <HeaderAccountDropdownMenu />
          </NavigationButtonWrapper>
        </NavigationWrapper>
      </StyledHeaderWidthWrapper>
    </StyledStickyHeader>
  );
};
