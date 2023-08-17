import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import peopleTwoProfessionalsHoldingProjectElements from "../../media/helper-info/people-two-professionals-holding-project-elements.svg";

export const AsideProfessionalOnboardingInviteUsersDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("professionalOnboarding.invitePeopleHelperInfoImageAlt")}
        helperInfoImageUrl={peopleTwoProfessionalsHoldingProjectElements}
        helperInfoText={t("professionalOnboarding.invitePeopleHelperInfoText")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
