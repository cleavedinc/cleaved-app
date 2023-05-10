import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProfessionalOnboardingHasOrganizationDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingHasOrganization: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <ProfessionalOnboardingHasOrganizationDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
