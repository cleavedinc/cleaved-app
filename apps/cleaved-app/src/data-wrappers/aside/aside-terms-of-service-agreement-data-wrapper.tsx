import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

import termsHelperImage from "../../media/helper-info/terms-helper-image.svg";

export const AsideTermsOfServiceAgreementDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("termsOfService.acceptTermsImageAlt")}
        helperInfoImageUrl={termsHelperImage}
        helperInfoText={t("termsOfService.acceptTermsText")}
        helperInfoTextHeader={t("termsOfService.acceptTermsHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
