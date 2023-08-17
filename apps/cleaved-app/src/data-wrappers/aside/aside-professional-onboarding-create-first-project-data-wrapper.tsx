import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import projectWhiteboardTwoPeople from "../../media/helper-info/project-whiteboard-two-people.svg";

export const AsideProfessionalOnboardingCreateFirstProjectDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("professionalOnboarding.startNewProjectHelperInfoImageAlt")}
        helperInfoImageUrl={projectWhiteboardTwoPeople}
        helperInfoText={t("professionalOnboarding.startNewProjectHelperInfoText")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
