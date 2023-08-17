import React, { FunctionComponent, useEffect } from "react";
import { navigate } from "@reach/router";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProgressBar, RegisterOrganization } from "../../components";
import { AsideProfessionalOnboardingRegisterOrganizationDataWrapper } from "../../data-wrappers";
import { useTermsAccepted } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

export const ProfessionalOnboardingRegisterOrganization: FunctionComponent = () => {
  const { termsAccepted, termsAcceptedIsLoading } = useTermsAccepted();

  useEffect(() => {
    // if no TOS have been accepted, navigate to the TOS page
    if (!termsAcceptedIsLoading && !termsAccepted) {
      navigate(routeConstantsCleavedApp.termsOfServiceAgreement.route);
    }
  }, [termsAccepted, termsAcceptedIsLoading]);

  if (termsAcceptedIsLoading || !termsAccepted) {
    return null;
  }

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
