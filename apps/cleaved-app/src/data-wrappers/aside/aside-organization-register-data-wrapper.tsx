import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

export const AsideOrganizationRegisterDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.organizationRegisterAlt")}
        helperInfoImageUrl={"/helper-info/organizations-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.organizationRegisterText")}
        helperInfoTextHeader={t("helperInformationBoxes.organizationRegisterHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
