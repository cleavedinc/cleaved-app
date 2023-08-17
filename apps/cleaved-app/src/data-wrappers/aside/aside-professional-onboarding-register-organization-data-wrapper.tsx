import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import organizationSingleBuilding from "../../media/helper-info/organization-single-building.svg";

export const AsideProfessionalOnboardingRegisterOrganizationDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("professionalOnboarding.registerOrganizationHelperInfoImageAlt")}
        helperInfoImageUrl={organizationSingleBuilding}
        helperInfoText={t("professionalOnboarding.registerOrganizationHelperInfoText")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
