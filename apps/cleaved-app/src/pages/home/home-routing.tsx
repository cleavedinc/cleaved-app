import React, { FunctionComponent, useEffect } from "react";
import { navigate } from "@reach/router";

import { routeConstantsCleavedApp } from "../../router";
import { useOrganizationMemberships } from "../../hooks";

export const HomeRouting: FunctionComponent = () => {
  const data = useOrganizationMemberships();

  useEffect(() => {
    if (
      data.organizationMembershipsData &&
      data.organizationMembershipsData[0] &&
      data.organizationMembershipsData[0].id
    ) {
      navigate(`/${data.organizationMembershipsData[0].id}${routeConstantsCleavedApp.home.route}`);
    } else if (!data.organizationMembershipsDataLoading) {
      navigate(
        `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route}`
      );
    }
  }, [data]);

  return <></>;
};
