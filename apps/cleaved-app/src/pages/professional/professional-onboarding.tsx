import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideProfessionalOnboardingDataWrapper, ProfessionalOnboardingDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboarding: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProfessionalOnboardingDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProfessionalOnboardingDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
