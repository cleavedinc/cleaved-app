import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { HeaderLoggedOut, ProgressBar, RegisterOrganization } from "../../components";
import { AsideProfessionalOnboardingRegisterOrganizationDataWrapper } from "../../data-wrappers";
import { useTermsAccepted } from "../../hooks";

export const ProfessionalOnboardingRegisterOrganization: FunctionComponent = () => {
  // useTermsAccepted triggers tos check so apollo client can route to tos page (if needed)
  const { termsAcceptedData, termsAcceptedDataLoading } = useTermsAccepted();

  if (termsAcceptedDataLoading || !termsAcceptedData) {
    return;
  }

  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideProfessionalOnboardingRegisterOrganizationDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <ProgressBar activeStep={1} />

          <RegisterOrganization />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
