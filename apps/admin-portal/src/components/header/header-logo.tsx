import React, { FunctionComponent } from "react";

import { routeConstantsCleavedApp } from "../../router";
import { Logo } from "@cleaved/ui";

export const HeaderLogo: FunctionComponent = () => {
  return (
    <Logo
      companyName="Admin Portal - Cleaved"
      height="15px"
      logoTextVisible="true"
      margin={`0 0.3rem 0 0`}
      url={routeConstantsCleavedApp.homeRouting.route}
      width="15px"
    />
  );
};
