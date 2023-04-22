import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { StickyHeader, NavigationLinksWrapper, NavigationWrapper } from "@cleaved/ui";

import { MainNavigationLinks } from "./main-navigation-links";

type HeaderMobileBottomBarProps = {
  className?: string;
};

const StyledStickyHeader = styled(StickyHeader)`
  bottom: 0;
  flex: 0 1 auto;
  left: 0;
  position: fixed;
  right: 0;
  top: initial;
`;

const MainNavigationLinksWrapper = styled(NavigationLinksWrapper)`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderMobileBottomBar: FunctionComponent<HeaderMobileBottomBarProps> = (props) => {
  const { className } = props;

  return (
    <StyledStickyHeader className={className} hasBoxShadow>
      <NavigationWrapper>
        <MainNavigationLinksWrapper>
          <MainNavigationLinks />
        </MainNavigationLinksWrapper>
      </NavigationWrapper>
    </StyledStickyHeader>
  );
};
