import React, { FunctionComponent, useContext, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";

import { logError, RollbarLogLevels, logQueryError } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import { routeConstantsCleavedApp } from "../../../router";

import { CLEAVED_ADMIN_SSO_MUTATION } from "../gql";

export const GoogleLoginWrapper: FunctionComponent = () => {
  const { logOut, setAuthorizationTokens } = useContext(authTokenContext);

  const [getCleavedLogin, { loading, error, called, data }] = useMutation(CLEAVED_ADMIN_SSO_MUTATION, {});

  useEffect(() => {
    if (loading || !called) {
      return;
    }

    if (error) {
      logQueryError(error);
      logOut();
      googleLogout();
      return;
    }

    if (data?.cleavedAdminSSO) {
      if (data.cleavedAdminSSO.authorizationToken && data.cleavedAdminSSO.refreshToken) {
        setAuthorizationTokens(data.cleavedAdminSSO.authorizationToken, data.cleavedAdminSSO.refreshToken);
      }

      navigate(routeConstantsCleavedApp.homeRouting.route);
    }
  }, [loading, error, called, data, setAuthorizationTokens, logOut]);

  return (
    <GoogleLogin
      text="signin_with"
      onError={() => {
        logError(RollbarLogLevels.error, "Error: Google login failed");
      }}
      onSuccess={(credentialResponse) => {
        if (credentialResponse && credentialResponse.credential) {
          getCleavedLogin({ variables: { token: credentialResponse.credential } });
        }
      }}
      // ux_mode={"redirect"}
    />
  );
};
