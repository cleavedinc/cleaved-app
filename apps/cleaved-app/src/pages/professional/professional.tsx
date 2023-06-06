import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProfessionalDataWrapper } from "../../data-wrappers";

export const Professional: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <ProfessionalDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
