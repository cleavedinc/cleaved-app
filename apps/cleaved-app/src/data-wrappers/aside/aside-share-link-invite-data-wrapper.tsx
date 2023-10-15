import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import peopleHelperImage from "../../media/helper-info/people-helper-image.svg";

export const AsideSharelinkInviteDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("helperInformationBoxes.inviteProfessionalToOrganizationAlt")}
        helperInfoImageUrl={peopleHelperImage}
        helperInfoText={t("helperInformationBoxes.peopleText")}
        helperInfoTextHeader={t("helperInformationBoxes.peopleHeader")}
        width={"250px"}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
