import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth, RightColumnWrapper } from "@cleaved/ui";

import { AsideProfessionalDataWrapper, AsideProfessionalInformationDataWrapper } from "../../data-wrappers";

export const Professional: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProfessionalDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>Feedback posts timeline here</MainColumnWrapperMaxWidth>

      <RightColumnWrapper>
        <AsideProfessionalInformationDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
