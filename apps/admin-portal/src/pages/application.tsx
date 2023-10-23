import React, { FunctionComponent, useContext, useEffect, useState } from "react";

import { AlertContainer } from "@cleaved/helpers";
import { authTokenContext } from "../contexts";
import { ApplicationRouter } from "../router";

export const Application: FunctionComponent = () => {
  const { loading, loggedIn, refreshLogin } = useContext(authTokenContext);
  const [hasAuthRefreshed, setHasAuthRefreshed] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!loading && !loggedIn && !hasAuthRefreshed) {
  //     setHasAuthRefreshed(true);
  //     refreshLogin();
  //   }
  // }, [hasAuthRefreshed, loading, loggedIn, refreshLogin, setHasAuthRefreshed]);

  return (
    <>
      <ApplicationRouter />
      <AlertContainer />
    </>
  );
};
