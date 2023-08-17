import React, { FunctionComponent } from "react";

import { OnboardingProjectStartNewForm } from "../../forms";
import { useProjectsInOrganizationSeek, useTranslator } from "../../hooks";

import projectWhiteboardTwoPeople from "../../media/helper-info/project-whiteboard-two-people.svg";

import { StyledBox, StyledH1, StyledHelperInfoHeaderTextImageRightBox } from "./components";

export const CreateFirstProject: FunctionComponent = () => {
  const {
    projectsInOrganizationSeekData,
    projectsInOrganizationSeekDataLoading,
    projectsInOrganizationSeekDataRefetch,
  } = useProjectsInOrganizationSeek();
  const { t } = useTranslator();

  return (
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
      </StyledBox>

      {!projectsInOrganizationSeekDataLoading &&
        projectsInOrganizationSeekData &&
        projectsInOrganizationSeekData?.length <= 0 && (
          <StyledHelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("professionalOnboarding.startNewProjectHelperInfoImageAlt")}
            helperInfoImageUrl={projectWhiteboardTwoPeople}
            helperInfoText={t("professionalOnboarding.startNewProjectHelperInfoText")}
            width={"150px"}
          />
        )}
    </>
  );
};
