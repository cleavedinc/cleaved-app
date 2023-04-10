import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

export const AsideProfessionalOnboardingDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.professionalOnboardingAlt")}
        helperInfoImageUrl={"/helper-info/organizations-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.professionalOnboardingText")}
        helperInfoTextHeader={t("helperInformationBoxes.professionalOnboardingHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
