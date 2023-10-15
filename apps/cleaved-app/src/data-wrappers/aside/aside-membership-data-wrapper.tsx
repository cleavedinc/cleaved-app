import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import membershipPlansHelperImage from "../../media/helper-info/membership-plans.svg";

export const AsideMembershipDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.membershipAlt")}
        helperInfoImageUrl={membershipPlansHelperImage}
        helperInfoText={t("helperInformationBoxes.membershipText")}
        helperInfoTextHeader={t("helperInformationBoxes.membershipHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
