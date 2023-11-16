import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";

import { routeConstantsCleavedApp } from "../../router";
import { isMenuItemActive, NavigationButtonLabel, NavigationButton } from "@cleaved/ui";

export const MainNavigationLinks: FunctionComponent = () => {
  return (
    <>
      <Link getProps={isMenuItemActive} to={`/${routeConstantsCleavedApp.home.route}`} title="Home">
        <NavigationButton>
          <NavigationButtonLabel>Home</NavigationButtonLabel>
        </NavigationButton>
      </Link>

      <Link getProps={isMenuItemActive} to={`/${routeConstantsCleavedApp.organizations.route}`} title="Organizations">
        <NavigationButton>
          <NavigationButtonLabel>Organizations</NavigationButtonLabel>
        </NavigationButton>
      </Link>
    </>
  );
};
