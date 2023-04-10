import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { useTranslator } from "../../hooks";

export const AsideTermsOfServiceAgreementDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      <AsideHelperInfoHeaderTextImageBox
        helperInfoImageAltText={t("termsOfService.acceptTermsImageAlt")}
        helperInfoImageUrl={"/helper-info/terms-helper-image.svg"}
        helperInfoText={t("termsOfService.acceptTermsText")}
        helperInfoTextHeader={t("termsOfService.acceptTermsHeader")}
      />
    </StickUnderHeaderDesktopOnly>
  );
};
