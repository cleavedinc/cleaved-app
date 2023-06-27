import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import professionalShareLinkRegistrationHelperImage from "../../media/helper-info/professional-share-link-registration-helper-image.svg";

export const AsideSharelinkRegistrationDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.professionalShareLinkRegistrationAlt")}
        helperInfoImageUrl={professionalShareLinkRegistrationHelperImage}
        helperInfoText={t("helperInformationBoxes.professionalShareLinkRegistrationText")}
        helperInfoTextHeader={t("helperInformationBoxes.professionalShareLinkRegistrationHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
