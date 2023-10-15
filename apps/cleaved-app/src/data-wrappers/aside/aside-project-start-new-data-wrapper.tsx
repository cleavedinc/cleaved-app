import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import newProjectHelperImage from "../../media/helper-info/new-project-helper-image.svg";

export const AsideProjectStartNewDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.projectStartNewImageAlt")}
        helperInfoImageUrl={newProjectHelperImage}
        helperInfoText={t("helperInformationBoxes.projectText")}
        helperInfoTextHeader={t("helperInformationBoxes.projectHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
