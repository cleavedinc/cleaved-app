import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { ProfessionalOnboardingHasOrganizationDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingHasOrganization: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapperMaxWidth>
        <ProfessionalOnboardingHasOrganizationDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
