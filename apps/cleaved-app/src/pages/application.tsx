import React, { FunctionComponent, useContext, useEffect, useState } from "react";

import { AlertContainer } from "@cleaved/helpers";
import { Header, HeaderLoggedOut } from "../components";
import { authTokenContext } from "../contexts";
import { ApplicationRouter, routeConstantsCleavedApp } from "../router";

export const Application: FunctionComponent = () => {
  const { loading, loggedIn, refreshLogin } = useContext(authTokenContext);
  const [hasAuthRefreshed, setHasAuthRefreshed] = useState<boolean>(false);

  const currentPath = window.location.pathname;
  const matcher = new RegExp(`${routeConstantsCleavedApp.professionalOnboarding.route}/.*`);
  const isOnboardingPages = matcher.test(currentPath);

  useEffect(() => {
    if (!loading && !loggedIn && !hasAuthRefreshed) {
      setHasAuthRefreshed(true);
      refreshLogin();
    }
  }, [hasAuthRefreshed, loading, loggedIn]); // eslint-disable-line

  return (
    <>
      {!isOnboardingPages && loggedIn ? <Header /> : <HeaderLoggedOut />}

      <ApplicationRouter />
      <AlertContainer />
    </>
  );
};
