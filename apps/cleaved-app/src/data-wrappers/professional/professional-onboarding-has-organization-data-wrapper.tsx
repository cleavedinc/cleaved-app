import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, H1, SPACING } from "@cleaved/ui";

import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

import getInvited from "../../media/helper-info/get-invited.svg";

const StyledBox = styled(Box)`
  margin-bottom: 0;
`;

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledMessage = styled.div`
  margin-bottom: ${SPACING.LARGE};
`;

const StyledMessageImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const StyledNavigateBackToOnboardingWrapper = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-style: italic;
  margin-top: ${SPACING.XXLARGE};
  text-align: center;
`;

const StyledProfessionalOnboardingHasOrganizationWrapper = styled.div``;

export const ProfessionalOnboardingHasOrganizationDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  const organizationGetInviteImageAlt = t("professionalOnboardingHasOrganization.hasOrganizationGetInviteImageAlt")
    ? t("professionalOnboardingHasOrganization.hasOrganizationGetInviteImageAlt")
    : "";

  return (
    <StyledProfessionalOnboardingHasOrganizationWrapper>
      <StyledBox>
        <StyledH1>{t("professionalOnboardingHasOrganization.hasOrganizationHeader")}</StyledH1>

        <StyledMessage>{t("professionalOnboardingHasOrganization.hasOrganizationMessage")}</StyledMessage>

        <StyledMessageImage src={getInvited} alt={organizationGetInviteImageAlt} />

        <StyledNavigateBackToOnboardingWrapper>
          {t("professionalOnboardingHasOrganization.goBackToOnboardingText")}
          <Link
            to={`${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route}`}
          >
            {t("professionalOnboardingHasOrganization.goBackToOnboardingLink")}
          </Link>
        </StyledNavigateBackToOnboardingWrapper>
      </StyledBox>
    </StyledProfessionalOnboardingHasOrganizationWrapper>
  );
};
