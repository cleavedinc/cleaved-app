import React, { FunctionComponent, ReactNode, useContext, useEffect } from "react";
import { RouteComponentProps, useLocation } from "@reach/router";

import { LoginGuard } from "../components";
import { authTokenContext } from "../contexts";
import { useProductEngagementLogEvent } from "../hooks";

type PageProtectorProps = RouteComponentProps & {
  isNotProtected?: boolean;
  renderedPage: ReactNode;
};

export const PageProtector: FunctionComponent<PageProtectorProps> = ({ isNotProtected, renderedPage }) => {
  const { logOut, refreshLogin, loggedIn, loading } = useContext(authTokenContext);
  const location = useLocation();
  const logEvent = useProductEngagementLogEvent();

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
  useEffect(() => {
    logEvent("PAGE_VIEW");
  }, [location]);

  if (isNotProtected) {
    return <>{renderedPage}</>;
  }

  return <LoginGuard>{renderedPage}</LoginGuard>;
};
