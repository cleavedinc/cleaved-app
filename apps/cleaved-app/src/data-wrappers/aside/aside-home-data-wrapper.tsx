import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import decisionsHelperImage from "../../media/helper-info/decisions-helper-image.svg";

export const AsideHomeDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      {/* Something like this is also on the main home page, but only shows for mobile width */}
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.collaborativeTimelineAlt")}
        helperInfoImageUrl={decisionsHelperImage}
        helperInfoText={t("helperInformationBoxes.collaborativeTimelineText")}
        helperInfoTextHeader={t("helperInformationBoxes.collaborativeTimelineHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
