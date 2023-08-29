import React, { FunctionComponent, useContext, useEffect } from "react";
import { navigate } from "@reach/router";

import { authTokenContext } from "../../contexts";
import { routeConstantsCleavedApp } from "../../router";

export const HomeRouting: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);

  useEffect(() => {
    if (!preferredOrgId) {
      navigate(
        `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route}`
      );
    }

    if (preferredOrgId) {
      navigate(`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    }
  }, [preferredOrgId]);

  return <></>;
};
