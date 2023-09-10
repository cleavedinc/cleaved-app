import React, { FunctionComponent, useContext } from "react";
import { Link, navigate } from "@reach/router";
import styled from "styled-components";

import { FONT_SIZES, SPACING } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { OnboardingOrganizationRegisterForm } from "../../forms";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import { StyledBox, StyledH1, StyledButtonPrimaryWrapper, StyledNextStepButton } from "./components";

const StyledHasOrganizationSkipOnboarding = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-style: italic;
  margin-top: ${SPACING.XXLARGE};
  text-align: center;
`;

export const RegisterOrganization: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  const handleRouteToNextOnboardingStep = () => {
    navigate(
      `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingCreateFirstProject.route}`
    );
  };

  return (
    <>
      <StyledBox>
        <StyledH1>
          {!preferredOrgId
            ? t("professionalOnboarding.registerOrganizationFormHeader")
            : t("professionalOnboarding.registerOrganizationFormHeaderOrgCreated")}
        </StyledH1>

        {!preferredOrgId && <OnboardingOrganizationRegisterForm />}

        <StyledHasOrganizationSkipOnboarding>
          {t("professionalOnboarding.alreadyHasOrganizationText")}
          <Link
            to={`${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingHasOrganization.route}`}
          >
            {t("professionalOnboarding.alreadyHasOrganizationLink")}
          </Link>
        </StyledHasOrganizationSkipOnboarding>
      </StyledBox>

      <StyledButtonPrimaryWrapper>
        <StyledNextStepButton
          onClick={() => handleRouteToNextOnboardingStep()}
          type="button"
          disabled={preferredOrgId === ""}
        >
          {t("professionalOnboarding.navigateForwardStep")}
        </StyledNextStepButton>
      </StyledButtonPrimaryWrapper>
    </>
  );
};
