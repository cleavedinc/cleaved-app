import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { HeaderLoggedOut } from "../../components";
import { ProfessionalOnboardingHasOrganizationDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingHasOrganization: FunctionComponent = () => {
  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <MainColumnMaxWidthWrapper>
          <ProfessionalOnboardingHasOrganizationDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
