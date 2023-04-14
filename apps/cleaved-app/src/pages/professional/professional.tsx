import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { AsideProfessionalDataWrapper } from "../../data-wrappers";

export const Professional: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapperMaxWidth>
        <AsideProfessionalDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
