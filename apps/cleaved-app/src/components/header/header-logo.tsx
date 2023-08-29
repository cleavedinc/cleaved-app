import React, { FunctionComponent } from "react";

import { routeConstantsCleavedApp } from "../../router";
import { Logo } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

export const HeaderLogo: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <Logo
      companyName={t("companyName")}
      height="15px"
      isLogoTextVisible={true}
      margin={`0 0.3rem 0 0`}
      url={routeConstantsCleavedApp.homeRouting.route}
      width="15px"
    />
  );
};
