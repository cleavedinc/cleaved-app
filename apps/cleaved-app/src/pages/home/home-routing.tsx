import React, { FunctionComponent, useEffect } from "react";
import { navigate } from "@reach/router";

import { routeConstantsCleavedApp } from "../../router";
import { useOrganizationMemberships } from "../../hooks";

export const HomeRouting: FunctionComponent = () => {
  const { organizationMembershipsDataLoading, organizationMembershipsData, organizationMembershipsError } =
    useOrganizationMemberships();

  useEffect(() => {
    console.log("Home Route");

    if (organizationMembershipsError) {
      return;
    }

    if (organizationMembershipsData && organizationMembershipsData[0] && organizationMembershipsData[0].id) {
      navigate(`/${organizationMembershipsData[0].id}${routeConstantsCleavedApp.home.route}`);
    } else if (!organizationMembershipsDataLoading) {
      navigate(
        `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route}`
      );
    }
  }, [organizationMembershipsDataLoading, organizationMembershipsData, organizationMembershipsError]);

  return <></>;
};
