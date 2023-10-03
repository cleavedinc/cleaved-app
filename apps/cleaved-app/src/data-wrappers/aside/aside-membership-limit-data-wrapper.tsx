import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import membershipLimitHelperImage from "../../media/helper-info/fireworks-340w-100h.svg";

export const AsideMembershipLimitDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.membershipLimitAlt")}
        helperInfoImageUrl={membershipLimitHelperImage}
        helperInfoText={t("helperInformationBoxes.membershipLimitText")}
        helperInfoTextHeader={t("helperInformationBoxes.membershipLimitHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
