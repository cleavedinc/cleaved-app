import React, { FunctionComponent, ReactNode, useContext, useEffect } from "react";

import { LoginGuard } from "../components";
import { authTokenContext } from "../contexts";
import { RouteComponentProps } from "@reach/router";

type PageProtectorProps = RouteComponentProps & {
  isNotProtected?: boolean;
  renderedPage: ReactNode;
};

export const PageProtector: FunctionComponent<PageProtectorProps> = ({ isNotProtected, renderedPage }) => {
  const { logOut, refreshLogin, loggedIn, loading } = useContext(authTokenContext);
  useEffect(() => {
    if (!isNotProtected) {
      refreshLogin();
    }
  }, [isNotProtected]); // eslint-disable-line

  useEffect(() => {
    console.log(isNotProtected, loggedIn, loading);
    if (!isNotProtected && !loggedIn && !loading) {
      logOut();
    }
  }, [isNotProtected, loggedIn, loading]); // eslint-disable-line

  if (isNotProtected) {
    return <>{renderedPage}</>;
  }

  return <LoginGuard>{renderedPage}</LoginGuard>;
};
