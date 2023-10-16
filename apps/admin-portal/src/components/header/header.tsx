import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { mediaQueries } from "@cleaved/ui";

import { HeaderDesktop } from "./header-desktop";

const StyledHeaderDesktop = styled(HeaderDesktop)`
  display: none;

  ${mediaQueries.SM} {
    display: block;
  }
`;

export const Header: FunctionComponent = () => {
  return (
    <>
      <StyledHeaderDesktop />
    </>
  );
};
