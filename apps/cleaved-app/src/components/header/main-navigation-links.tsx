import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";

import { routeConstantsCleavedApp } from "../../router";
import { isMenuItemActive, NavigationButtonLabel, NavigationButton } from "@cleaved/ui";

type MainNavigationLinksProps = {
  preferredOrgId: string | null;
};

export const MainNavigationLinks: FunctionComponent<MainNavigationLinksProps> = (props) => {
  const { preferredOrgId } = props;

  return (
    <>
      <Link
        getProps={isMenuItemActive}
        to={`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`}
        title={routeConstantsCleavedApp.home.name}
      >
        <NavigationButton>
          <NavigationButtonLabel>{routeConstantsCleavedApp.home.name}</NavigationButtonLabel>
        </NavigationButton>
      </Link>

      <Link
        getProps={isMenuItemActive}
        to={`/${preferredOrgId}${routeConstantsCleavedApp.projectList.route}`}
        title={routeConstantsCleavedApp.projectList.name}
      >
        <NavigationButton>
          <NavigationButtonLabel>{routeConstantsCleavedApp.projectList.name}</NavigationButtonLabel>
        </NavigationButton>
      </Link>

      <Link
        getProps={isMenuItemActive}
        to={`/${preferredOrgId}${routeConstantsCleavedApp.teamsList.route}`}
        title={routeConstantsCleavedApp.teamsList.name}
      >
        <NavigationButton>
          <NavigationButtonLabel>{routeConstantsCleavedApp.teamsList.name}</NavigationButtonLabel>
        </NavigationButton>
      </Link>
    </>
  );
};
