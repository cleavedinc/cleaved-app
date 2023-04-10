import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { StickyHeader, NavigationLinksWrapper, NavigationWrapper } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";

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
  const { preferredOrgId } = useContext(authTokenContext);

  return (
    <StyledStickyHeader className={className} hasBoxShadow>
      <NavigationWrapper>
        <MainNavigationLinksWrapper>
          <MainNavigationLinks preferredOrgId={preferredOrgId} />
        </MainNavigationLinksWrapper>
      </NavigationWrapper>
    </StyledStickyHeader>
  );
};
