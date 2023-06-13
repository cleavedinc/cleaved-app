import React, { FunctionComponent, useContext } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";

import { logError, RollbarLogLevels, logQueryError } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import { GoogleSsoMutation } from "../../../generated-types/graphql";
import { useRouteParams } from "../../../hooks";
import { routeConstantsCleavedApp } from "../../../router";

import { GOOGLE_SSO_WITH_SHARE_LINK_MUTATION } from "../gql";

export const GoogleLoginShareLinkWrapper: FunctionComponent = () => {
  const { logOut, setAuthorizationTokens, setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const routeParams = useRouteParams();
  const shareLink = routeParams.shareLink;

  const [getCleavedLoginWithSharelink] = useMutation(GOOGLE_SSO_WITH_SHARE_LINK_MUTATION, {
    onCompleted: (data: GoogleSsoMutation) => {
      setAuthorizationTokens(data.googleSSO.authorizationToken, data.googleSSO.refreshToken);
      setPreferredOrgIdOnContext(data.googleSSO.preferredOrgId);
      navigate(`/${data.googleSSO.preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    },
    onError: (error) => {
      logQueryError(error);
      logOut();
      googleLogout();
    },
  });

  return (
    <GoogleLogin
      text="signin_with"
      onError={() => {
        logError(RollbarLogLevels.error, "Error: Google login failed");
      }}
      onSuccess={(credentialResponse) => {
        if (credentialResponse && credentialResponse.credential) {
          getCleavedLoginWithSharelink({ variables: { token: credentialResponse.credential, shareLink: shareLink } });
        }
      }}
    />
  );
};