import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import peopleHelperImage from "../../media/helper-info/people-helper-image.svg";

export const AsidePeopleListDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.peopleAlt")}
        helperInfoImageUrl={peopleHelperImage}
        helperInfoText={t("helperInformationBoxes.peopleText")}
        helperInfoTextHeader={t("helperInformationBoxes.peopleHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
