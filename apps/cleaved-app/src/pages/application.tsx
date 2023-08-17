import React, { FunctionComponent, useContext, useEffect, useState } from "react";

import { AlertContainer } from "@cleaved/helpers";
import { Header, HeaderLoggedOut } from "../components";
import { authTokenContext } from "../contexts";
import { useTermsAccepted } from "../hooks";
import { ApplicationRouter, routeConstantsCleavedApp } from "../router";

export const Application: FunctionComponent = () => {
  const { loading, loggedIn, refreshLogin } = useContext(authTokenContext);
  const { termsAccepted, termsAcceptedIsLoading } = useTermsAccepted();
  const [hasAuthRefreshed, setHasAuthRefreshed] = useState<boolean>(false);

  const currentPath = window.location.pathname;

  useEffect(() => {
    if (!loading && !loggedIn && !hasAuthRefreshed) {
      setHasAuthRefreshed(true);
      refreshLogin();
    }
  }, [hasAuthRefreshed, loading, loggedIn]); // eslint-disable-line

  return (
    <>
      {!termsAcceptedIsLoading &&
      loggedIn &&
      termsAccepted &&
      currentPath !== routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route &&
      currentPath !== routeConstantsCleavedApp.professionalOnboardingHasOrganization.route ? (
        <Header />
      ) : (
        <HeaderLoggedOut />
      )}

      <ApplicationRouter />
      <AlertContainer />
    </>
  );
};
