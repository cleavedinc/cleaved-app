import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import projectHelperImage from "../../media/helper-info/project-helper-image.svg";

export const AsideProjectListDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.projectslistImageAlt")}
        helperInfoImageUrl={projectHelperImage}
        helperInfoText={t("helperInformationBoxes.projectslistText")}
        helperInfoTextHeader={t("helperInformationBoxes.projectslistHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
