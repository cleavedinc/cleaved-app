import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProgressBar, RegisterOrganization } from "../../components";
import { AsideProfessionalOnboardingRegisterOrganizationDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingRegisterOrganization: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProfessionalOnboardingRegisterOrganizationDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProgressBar activeStep={1} />

        <RegisterOrganization />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
