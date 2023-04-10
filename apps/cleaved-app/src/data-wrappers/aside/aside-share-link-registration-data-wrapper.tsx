import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

export const AsideSharelinkRegistrationDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.professionalShareLinkRegistrationAlt")}
        helperInfoImageUrl={"/helper-info/professional-share-link-registration-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.professionalShareLinkRegistrationText")}
        helperInfoTextHeader={t("helperInformationBoxes.professionalShareLinkRegistrationHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
