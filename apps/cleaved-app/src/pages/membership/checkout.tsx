import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { CheckoutDataWrapper } from "../../data-wrappers";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Checkout: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <CheckoutDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
