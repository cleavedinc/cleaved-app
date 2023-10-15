import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import manageUpImage from "../../media/helper-info/manage-up-image.svg";

export const AsideAccountDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.manageUpAlt")}
        helperInfoImageUrl={manageUpImage}
        helperInfoText={t("helperInformationBoxes.manageUpText")}
        helperInfoTextHeader={t("helperInformationBoxes.manageUpHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
