import React, { FunctionComponent, ReactNode, useContext, useEffect } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";

import { LoginGuard } from "../components";
import { authTokenContext } from "../contexts";

type PageProtectorProps = RouteComponentProps & {
  isNotProtected?: boolean;
  renderedPage: ReactNode;
};

export const PageProtector: FunctionComponent<PageProtectorProps> = ({ isNotProtected, renderedPage }) => {
  const { logOut, refreshLogin, loggedIn, loading } = useContext(authTokenContext);
  const location = useLocation();

  useEffect(() => {
    if (!isNotProtected) {
      refreshLogin();
    }
  }, [isNotProtected]); // eslint-disable-line

  useEffect(() => {
    if (!isNotProtected && !loggedIn && !loading) {
      logOut();
    }
  }, [isNotProtected, loggedIn, loading]); // eslint-disable-line

  // Log new page view
  useEffect(() => {}, [location]); // eslint-disable-line

  if (isNotProtected) {
    return <>{renderedPage}</>;
  }

  return <LoginGuard>{renderedPage}</LoginGuard>;
};
