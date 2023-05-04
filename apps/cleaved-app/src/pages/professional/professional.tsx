import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideProfessionalDataWrapper } from "../../data-wrappers";

export const Professional: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <AsideProfessionalDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
