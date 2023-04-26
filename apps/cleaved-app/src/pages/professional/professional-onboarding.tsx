import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { AsideProfessionalOnboardingDataWrapper, ProfessionalOnboardingDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboarding: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProfessionalOnboardingDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <ProfessionalOnboardingDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
