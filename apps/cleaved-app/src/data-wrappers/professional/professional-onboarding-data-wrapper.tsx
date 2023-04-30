import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { debounce } from "ts-debounce";
import styled, { useTheme } from "styled-components";

import { alertCopied, logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  Box,
  ButtonPrimary,
  ButtonSecondary,
  CheckIcon,
  CopyIcon,
  FONT_SIZES,
  H1,
  LinkButtonPrimary,
  mediaQueries,
  RADIUS,
  SPACING,
} from "@cleaved/ui";

import { HelperInfoHeaderTextImageRightBox } from "../../components";
import { authTokenContext } from "../../contexts";
import { OnboardingOrganizationRegisterForm, OnboardingProjectStartNewForm } from "../../forms";
import { OrgPermissionLevel, OrganizationShareLinksQuery } from "../../generated-types/graphql";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { useLoginGuard, useProjectsInOrganizationSeek, useTermsAccepted, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";
import { ORGANIZATION_SHARE_LINKS_QUERY } from "../../gql-queries";

const StyledBox = styled(Box)`
  margin-bottom: 0;
`;

const StyledButtonPrimary = styled(ButtonPrimary)``;

const StyledButtonPrimaryWrapper = styled.div`
  display: flex;
  margin-bottom: ${SPACING.XLARGE};
`;

const StyledFinishOnboardingButton = styled(ButtonPrimary)`
  margin-left: auto;
`;

const StyledHasOrganizationSkipOnboarding = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-style: italic;
  margin-top: ${SPACING.XXLARGE};
  text-align: center;
`;

const StyledHelperInfoHeaderTextImageRightBox = styled(HelperInfoHeaderTextImageRightBox)`
  margin-bottom: ${SPACING.MEDIUM};
  padding-left: 0;
  padding-right: 0;
`;

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledShareLinkIcon = styled(CopyIcon)`
  cursor: pointer;
  margin-right: ${SPACING.SMALL};
`;

const StyledShareLinkInputReadOnly = styled.input`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;
  display: flex;
  margin-right: ${SPACING.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;

const StyledShareLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};
`;

// PROGRESS BAR STEPS STYLES
const StyledMainProgressContainer = styled.div`
  margin: 0 auto ${SPACING.XXXLARGE};
  width: 100%;
`;

type StyledStepContainerProps = {
  width: string;
};

const StyledStepContainer = styled.div<StyledStepContainerProps>`
  display: flex;
  justify-content: space-between;
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.baseBordersAndShadows_color};
    height: 3px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  :after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.baseLink_color};
    height: 3px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StyledStepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

type StyledStepProps = {
  step: string;
};

const StyledStep = styled.div<StyledStepProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border: 2px solid
    ${({ step }) =>
      step === "completed"
        ? ({ theme }) => theme.colors.baseLink_color
        : ({ theme }) => theme.colors.baseBordersAndShadows_color};
  color: ${({ step }) =>
    step === "completed" ? ({ theme }) => theme.colors.baseLink_color : ({ theme }) => theme.colors.baseSubText_color};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledStepCount = styled.span`
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledStepsLabelContainer = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type StyledStepLabelProps = {
  step: string;
};

const StyledStepLabel = styled.span<StyledStepLabelProps>`
  font-size: ${FONT_SIZES.SMALL};
  color: ${({ step }) =>
    step === "completed" ? ({ theme }) => theme.colors.baseLink_color : ({ theme }) => theme.colors.baseIcon_color};

  overflow-wrap: normal;
`;

const StyledProgressButtonSecondary = styled(ButtonSecondary)``;

type StyledCelebrateStepCompletionImageProps = {
  height?: string;
  heightMobile?: string;
  width?: string;
  widthMobile?: string;
};

const StyledCelebrateStepCompletionImage = styled.img<StyledCelebrateStepCompletionImageProps>`
  object-fit: cover;
  height: ${(props) => (props.heightMobile ? props.heightMobile : "100%")};
  width: ${(props) => (props.widthMobile ? props.widthMobile : "100%")};

  ${mediaQueries.SM} {
    margin-left: auto;
    height: ${(props) => (props.height ? props.height : "100%")};
    width: ${(props) => (props.width ? props.width : "100%")};
  }
`;
// END PROGRESS BAR STEPS STYLES

export const ProfessionalOnboardingDataWrapper: FunctionComponent = () => {
  const { isLoggedIn } = useLoginGuard();
  const { termsAccepted, termsAcceptedIsLoading } = useTermsAccepted();
  const {
    projectsInOrganizationSeekData,
    projectsInOrganizationSeekDataLoading,
    projectsInOrganizationSeekDataRefetch,
  } = useProjectsInOrganizationSeek();
  const { preferredOrgId } = useContext(authTokenContext);
  const [activeStep, setActiveStep] = useState(1);
  const theme = useTheme();
  const { t } = useTranslator();

  const progressBarSteps = [
    {
      label: "Org",
      step: 1,
    },
    {
      label: "Project",
      step: 2,
    },
    {
      label: "People",
      step: 3,
    },
  ];

  const totalSteps = progressBarSteps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  const {
    data: organizationShareLinksArray,
    loading,
    refetch,
  } = useQuery<OrganizationShareLinksQuery>(ORGANIZATION_SHARE_LINKS_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || termsAcceptedIsLoading || !termsAccepted || !preferredOrgId,
    variables: { organizationId: preferredOrgId },
  });

  const [generateOrganizationShareLink] = useMutation(GENERATE_ORGANIZATION_SHARE_LINK_MUTATION, {
    onCompleted: () => {
      if (refetch) {
        refetch();
      }
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  const shareLinkArray = organizationShareLinksArray?.organizationShareLinks;
  const shareLinkObject = shareLinkArray?.find((x) => x.permission === OrgPermissionLevel.Updater);
  const shareLinkUrl = `${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${shareLinkObject?.shareLink}`;

  const handleCompleteonboardingFlow = () => {
    navigate(
      `${preferredOrgId}${routeConstantsCleavedApp.project.route}/${projectsInOrganizationSeekData?.[0].id}${routeConstantsCleavedApp.projectBoard.route}`
    );
  };

  const handleAlertCopied = debounce(
    (message: string) => {
      alertCopied(message);
    },
    1000,
    { isImmediate: true }
  );

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const registerOrganizationCelebrateImageAlt = t("professionalOnboarding.registerOrganizationCelebrateImageAlt")
    ? t("professionalOnboarding.registerOrganizationCelebrateImageAlt")
    : "";

  const startNewProjectCelebrateImageAlt = t("professionalOnboarding.startNewProjectCelebrateImageAlt")
    ? t("professionalOnboarding.startNewProjectCelebrateImageAlt")
    : "";

  useEffect(() => {
    // if no TOS have been accepted, navigate to the TOS page
    if (!termsAcceptedIsLoading && !termsAccepted) {
      navigate(routeConstantsCleavedApp.termsOfServiceAgreement.route);
    }

    // Set the active step based on where the user is with their onboarding
    if (!preferredOrgId) {
      setActiveStep(1);
    } else if (preferredOrgId && projectsInOrganizationSeekData && projectsInOrganizationSeekData?.length === 0) {
      setActiveStep(2);
    } else if (preferredOrgId && projectsInOrganizationSeekData && projectsInOrganizationSeekData?.length > 0) {
      setActiveStep(3);
    }
  }, [preferredOrgId, projectsInOrganizationSeekData, termsAccepted, termsAcceptedIsLoading]); // eslint-disable-line

  const isNextStepButtonDisabled =
    (activeStep === 1 && !preferredOrgId) ||
    (activeStep === 2 && projectsInOrganizationSeekData && projectsInOrganizationSeekData?.length === 0);

  const isCompleteOnboardingButtonDisabled =
    (activeStep === 1 && !preferredOrgId) ||
    (activeStep === 2 && projectsInOrganizationSeekData && projectsInOrganizationSeekData?.length === 0) ||
    (activeStep === 3 && shareLinkObject?.permission !== OrgPermissionLevel.Updater);

  return (
    <>
      {/* Progress progressBarSteps */}
      <StyledMainProgressContainer>
        <StyledStepContainer width={width}>
          {progressBarSteps.map(({ step, label }) => (
            <StyledStepWrapper key={step}>
              <StyledStep step={activeStep >= step ? "completed" : "incomplete"}>
                {activeStep > step ? (
                  <CheckIcon color={theme.colors.baseLink_color} iconSize={FONT_SIZES.SMALL} />
                ) : (
                  <StyledStepCount>{step}</StyledStepCount>
                )}
              </StyledStep>

              <StyledStepsLabelContainer>
                <StyledStepLabel key={step} step={activeStep >= step ? "completed" : "incomplete"}>
                  {label}
                </StyledStepLabel>
              </StyledStepsLabelContainer>
            </StyledStepWrapper>
          ))}
        </StyledStepContainer>
      </StyledMainProgressContainer>
      {/* Progress progressBarSteps */}

      {/* Create an organization */}
      {activeStep === 1 && (
        <>
          <StyledBox>
            <StyledH1>
              {!preferredOrgId
                ? t("professionalOnboarding.registerOrganizationFormHeader")
                : t("professionalOnboarding.registerOrganizationFormHeaderOrgCreated")}
            </StyledH1>

            {!preferredOrgId && <OnboardingOrganizationRegisterForm />}

            {preferredOrgId && (
              <StyledCelebrateStepCompletionImage
                alt={registerOrganizationCelebrateImageAlt}
                src={"/helper-info/celebrate-high-five-fireworks.svg"}
                width={"500px"}
              />
            )}

            <StyledHasOrganizationSkipOnboarding>
              {t("professionalOnboarding.alreadyHasOrganizationText")}
              <Link to={routeConstantsCleavedApp.professionalOnboardingHasOrganization.route}>
                {t("professionalOnboarding.alreadyHasOrganizationLink")}
              </Link>
            </StyledHasOrganizationSkipOnboarding>
          </StyledBox>

          <StyledHelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("professionalOnboarding.registerOrganizationHelperInfoImageAlt")}
            helperInfoImageUrl={"/helper-info/organization-single-building.svg"}
            helperInfoText={t("professionalOnboarding.registerOrganizationHelperInfoText")}
            width={"150px"}
          />
        </>
      )}

      {/* Create your first project */}
      {activeStep === 2 && (
        <>
          <StyledBox>
            <StyledH1>
              {!projectsInOrganizationSeekDataLoading &&
              projectsInOrganizationSeekData &&
              projectsInOrganizationSeekData?.length <= 0
                ? t("professionalOnboarding.startNewProjectFormHeader")
                : t("professionalOnboarding.startNewProjectFormHeaderProjectCreated")}
            </StyledH1>

            {!projectsInOrganizationSeekDataLoading &&
              projectsInOrganizationSeekData &&
              projectsInOrganizationSeekData?.length <= 0 && (
                <OnboardingProjectStartNewForm projectsInOrgSeekRefetch={projectsInOrganizationSeekDataRefetch} />
              )}

            {!projectsInOrganizationSeekDataLoading &&
              projectsInOrganizationSeekData &&
              projectsInOrganizationSeekData?.length > 0 && (
                <StyledCelebrateStepCompletionImage
                  alt={startNewProjectCelebrateImageAlt}
                  src={"/helper-info/celebrate-high-five-fireworks-2.svg"}
                  width={"500px"}
                />
              )}
          </StyledBox>

          <StyledHelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("professionalOnboarding.startNewProjectHelperInfoImageAlt")}
            helperInfoImageUrl={"/helper-info/project-whiteboard-two-people.svg"}
            helperInfoText={t("professionalOnboarding.startNewProjectHelperInfoText")}
            width={"150px"}
          />
        </>
      )}

      {/* Invite your coworkers and friends */}
      {activeStep === 3 && (
        <>
          <StyledBox>
            <StyledH1>{t("professionalOnboarding.invitePeopleFormHeader")}</StyledH1>

            {!loading && shareLinkArray && shareLinkArray?.length === 0 && (
              <StyledButtonPrimary
                onClick={() =>
                  generateOrganizationShareLink({
                    variables: {
                      organizationId: preferredOrgId,
                      permission: OrgPermissionLevel.Updater,
                    },
                  })
                }
                type="button"
              >
                {t("shareLinks.createWriteShareLink")}
              </StyledButtonPrimary>
            )}

            {!loading &&
              shareLinkArray &&
              shareLinkArray?.length > 0 &&
              shareLinkArray.map((shareLink) => {
                return (
                  <span key={shareLink.id}>
                    <CopyToClipboard
                      text={shareLinkUrl}
                      onCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
                    >
                      <StyledShareLinkWrapper>
                        <StyledShareLinkIcon />
                        <StyledShareLinkInputReadOnly value={shareLinkUrl} readOnly />
                      </StyledShareLinkWrapper>
                    </CopyToClipboard>
                  </span>
                );
              })}

            {!loading && shareLinkArray && shareLinkArray?.length > 0 && (
              <LinkButtonPrimary
                href={`mailto:?subject=${t("professionalOnboarding.mailtoLinkEmailSubjectText")}&body=${t(
                  "professionalOnboarding.mailtoLinkEmailBodyText"
                )} ${shareLinkUrl}`}
              >
                {t("professionalOnboarding.mailtoLink")}
              </LinkButtonPrimary>
            )}
          </StyledBox>

          <StyledHelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("professionalOnboarding.invitePeopleHelperInfoImageAlt")}
            helperInfoImageUrl={"/helper-info/people-two-professionals-holding-project-elements.svg"}
            helperInfoText={t("professionalOnboarding.invitePeopleHelperInfoText")}
            width={"150px"}
          />
        </>
      )}

      <StyledButtonPrimaryWrapper>
        {!loading && activeStep !== 1 && (
          <StyledProgressButtonSecondary onClick={prevStep} disabled={activeStep === 1}>
            {t("professionalOnboarding.navigateBackwardStep")}
          </StyledProgressButtonSecondary>
        )}

        {!loading && activeStep !== 1 && activeStep !== 2 && (
          <StyledFinishOnboardingButton
            disabled={isCompleteOnboardingButtonDisabled}
            onClick={() => handleCompleteonboardingFlow()}
            type="button"
          >
            {t("professionalOnboarding.finishOnboarding")}
          </StyledFinishOnboardingButton>
        )}

        {!loading && activeStep !== 3 && (
          <StyledFinishOnboardingButton onClick={nextStep} disabled={isNextStepButtonDisabled} type="button">
            {t("professionalOnboarding.navigateForwardStep")}
          </StyledFinishOnboardingButton>
        )}
      </StyledButtonPrimaryWrapper>
    </>
  );
};
