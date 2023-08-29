import React, { FunctionComponent, useContext, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";

import { logError, RollbarLogLevels, logQueryError } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import { routeConstantsCleavedApp } from "../../../router";

import { GOOGLE_SSO_MUTATION } from "../gql";

export const GoogleLoginWrapper: FunctionComponent = () => {
  const { logOut, setAuthorizationTokens, setPreferredOrgIdOnContext } = useContext(authTokenContext);

  const [getCleavedLogin, { loading, error, called, data }] = useMutation(GOOGLE_SSO_MUTATION, {});

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

    if (data?.googleSSO?.authorizationToken && data?.googleSSO?.refreshToken && data?.googleSSO?.preferredOrgId) {
      setAuthorizationTokens(data.googleSSO.authorizationToken, data.googleSSO.refreshToken);
      setPreferredOrgIdOnContext(data.googleSSO.preferredOrgId);
      navigate(`/${data.googleSSO.preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    }
  }, [loading, error, called, data, setAuthorizationTokens, setPreferredOrgIdOnContext, logOut]);

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
