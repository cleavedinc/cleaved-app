import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { NavigationButtonWrapper, SPACING, NavigationWrapper } from "@cleaved/ui";

import { StyledStickyHeader } from "./styled-sticky-header";
import { HeaderAccountDropdownMenu } from "./header-account-dropdown-menu";
import { HeaderLogo } from "./header-logo";

type HeaderMobileTopBarProps = {
  className?: string;
};

const StyledHeaderMobileTopBarStickyHeader = styled(StyledStickyHeader)`
  height: 36px;
  padding: 0 ${SPACING.MEDIUM};
`;

const StyledLogoWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

export const HeaderMobileTopBar: FunctionComponent<HeaderMobileTopBarProps> = (props) => {
  const { className } = props;

  return (
    <StyledHeaderMobileTopBarStickyHeader className={className} hasBoxShadow>
      <NavigationWrapper>
        <StyledLogoWrapper>
          <HeaderLogo />
        </StyledLogoWrapper>

        <NavigationButtonWrapper>
          <HeaderAccountDropdownMenu />
        </NavigationButtonWrapper>
      </NavigationWrapper>
    </StyledHeaderMobileTopBarStickyHeader>
  );
};
