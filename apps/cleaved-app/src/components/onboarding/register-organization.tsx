import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { FONT_SIZES, SPACING } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { OnboardingOrganizationRegisterForm } from "../../forms";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import organizationSingleBuilding from "../../media/helper-info/organization-single-building.svg";

import { StyledBox, StyledH1, StyledHelperInfoHeaderTextImageRightBox } from "./components";

const StyledHasOrganizationSkipOnboarding = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-style: italic;
  margin-top: ${SPACING.XXLARGE};
  text-align: center;
`;

export const RegisterOrganization: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  return (
    <>
      <StyledBox>
        <StyledH1>
          {!preferredOrgId
            ? t("professionalOnboarding.registerOrganizationFormHeader")
            : t("professionalOnboarding.registerOrganizationFormHeaderOrgCreated")}
        </StyledH1>

        {!preferredOrgId && <OnboardingOrganizationRegisterForm />}

        {!preferredOrgId && (
          <StyledHasOrganizationSkipOnboarding>
            {t("professionalOnboarding.alreadyHasOrganizationText")}
            <Link to={routeConstantsCleavedApp.professionalOnboardingHasOrganization.route}>
              {t("professionalOnboarding.alreadyHasOrganizationLink")}
            </Link>
          </StyledHasOrganizationSkipOnboarding>
        )}
      </StyledBox>

      {!preferredOrgId && (
        <StyledHelperInfoHeaderTextImageRightBox
          backgroundColor={"transparent"}
          helperInfoImageAltText={t("professionalOnboarding.registerOrganizationHelperInfoImageAlt")}
          helperInfoImageUrl={organizationSingleBuilding}
          helperInfoText={t("professionalOnboarding.registerOrganizationHelperInfoText")}
          width={"150px"}
        />
      )}
    </>
  );
};
