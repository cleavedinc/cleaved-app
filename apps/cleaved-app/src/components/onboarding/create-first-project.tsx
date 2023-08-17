import React, { FunctionComponent } from "react";
import { navigate } from "@reach/router";

import { OnboardingProjectStartNewForm } from "../../forms";
import { useProjectsInOrganizationSeek, useTranslator } from "../../hooks";

import { routeConstantsCleavedApp } from "../../router";

import { StyledBox, StyledH1, StyledButtonPrimaryWrapper, StyledNextStepButton } from "./components";

export const CreateFirstProject: FunctionComponent = () => {
  const {
    projectsInOrganizationSeekData,
    projectsInOrganizationSeekDataLoading,
    projectsInOrganizationSeekDataRefetch,
  } = useProjectsInOrganizationSeek();
  const { t } = useTranslator();

  const handleRouteToNextOnboardingStep = () => {
    navigate(
      `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingInviteUsers.route}`
    );
  };

  return (
    <>
      <StyledBox>
        <StyledH1>{t("professionalOnboarding.startNewProjectFormHeader")}</StyledH1>

        <OnboardingProjectStartNewForm projectsInOrgSeekRefetch={projectsInOrganizationSeekDataRefetch} />
      </StyledBox>

      <StyledButtonPrimaryWrapper>
        <StyledNextStepButton
          onClick={() => handleRouteToNextOnboardingStep()}
          type="button"
          disabled={
            !projectsInOrganizationSeekDataLoading &&
            projectsInOrganizationSeekData &&
            projectsInOrganizationSeekData?.length === 0
          }
        >
          {t("professionalOnboarding.navigateForwardStep")}
        </StyledNextStepButton>
      </StyledButtonPrimaryWrapper>
    </>
  );
};
