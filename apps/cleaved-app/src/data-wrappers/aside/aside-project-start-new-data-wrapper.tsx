import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

export const AsideProjectStartNewDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.projectStartNewImageAlt")}
        helperInfoImageUrl={"/helper-info/new-project-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.projectStartNewText")}
        helperInfoTextHeader={t("helperInformationBoxes.projectStartNewHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
