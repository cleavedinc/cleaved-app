import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { BORDERS, mediaQueries } from "@cleaved/ui";

import { HeaderMobileBottomBar } from "./header-mobile-bottom-bar";
import { HeaderMobileTopBar } from "./header-mobile-top-bar";
import { HeaderDesktop } from "./header-desktop";

const StyledHeaderMobileBottomBar = styled(HeaderMobileBottomBar)`
  border-top: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: block;

  ${mediaQueries.SM} {
    display: none;
  }
`;

const StyledHeaderMobileTopBar = styled(HeaderMobileTopBar)`
  display: block;

  ${mediaQueries.SM} {
    display: none;
  }
`;

const StyledHeaderDesktop = styled(HeaderDesktop)`
  display: none;

  ${mediaQueries.SM} {
    display: block;
  }
`;

export const Header: FunctionComponent = () => {
  return (
    <>
      <StyledHeaderMobileTopBar />
      <StyledHeaderMobileBottomBar />
      <StyledHeaderDesktop />
    </>
  );
};
