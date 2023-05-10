import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";
import { isMenuItemActive, NavigationButtonLabel, NavigationButton } from "@cleaved/ui";

export const MainNavigationLinks: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  const homeLinkName = t("menuLinkNames.home") ? t("menuLinkNames.home") : "";
  const projectListLinkName = t("menuLinkNames.projectList") ? t("menuLinkNames.projectList") : "";
  const teamsListLinkName = t("menuLinkNames.teamsList") ? t("menuLinkNames.teamsList") : "";

  return (
    <>
      <Link
        getProps={isMenuItemActive}
        to={`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`}
        title={homeLinkName}
      >
        <NavigationButton>
          <NavigationButtonLabel>{homeLinkName}</NavigationButtonLabel>
        </NavigationButton>
      </Link>

      <Link
        getProps={isMenuItemActive}
        to={`/${preferredOrgId}${routeConstantsCleavedApp.projectList.route}`}
        title={projectListLinkName}
      >
        <NavigationButton>
          <NavigationButtonLabel>{projectListLinkName}</NavigationButtonLabel>
        </NavigationButton>
      </Link>

      <Link
        getProps={isMenuItemActive}
        to={`/${preferredOrgId}${routeConstantsCleavedApp.teamsList.route}`}
        title={teamsListLinkName}
      >
        <NavigationButton>
          <NavigationButtonLabel>{teamsListLinkName}</NavigationButtonLabel>
        </NavigationButton>
      </Link>
    </>
  );
};
