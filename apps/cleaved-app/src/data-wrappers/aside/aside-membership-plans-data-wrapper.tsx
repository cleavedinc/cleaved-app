import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import membershipPlansHelperImage from "../../media/helper-info/membership-plans.svg";

export const AsideMembershipPlansDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.membershipPlansAlt")}
        helperInfoImageUrl={membershipPlansHelperImage}
        helperInfoText={t("helperInformationBoxes.membershipPlansText")}
        helperInfoTextHeader={t("helperInformationBoxes.membershipPlansHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
