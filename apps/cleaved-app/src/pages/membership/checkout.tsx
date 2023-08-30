import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { CheckoutDataWrapper } from "../../data-wrappers";

export const Checkout: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <CheckoutDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
