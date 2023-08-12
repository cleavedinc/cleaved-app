import React, { FunctionComponent, useContext } from "react";

import { routeConstantsCleavedApp } from "../../router";
import { Logo } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

export const HeaderLogo: FunctionComponent = () => {
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);

  return (
    <Logo
      companyName={t("companyName")}
      height="15px"
      isLogoTextVisible={true}
      margin={`0 0.3rem 0 0`}
      url={`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`}
      width="15px"
    />
  );
};
