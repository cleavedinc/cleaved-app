import React, { FunctionComponent, useContext } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useMutation } from "@apollo/react-hooks";

import { logError, RollbarLogLevels, logQueryError } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import { GOOGLE_SSO_MUTATION } from "../gql";

import { GoogleSsoMutation } from "../../../generated-types/graphql";

type GoogleLoginWrapperProps = {
  triggerCallback?: () => void;
};

export const GoogleLoginWrapper: FunctionComponent<GoogleLoginWrapperProps> = (props) => {
  const { triggerCallback } = props;
  const { logOut, setAuthorizationTokens, setPreferredOrgIdOnContext } = useContext(authTokenContext);

  const [getCleavedLogin] = useMutation(GOOGLE_SSO_MUTATION, {
    onCompleted: (data: GoogleSsoMutation) => {
      setAuthorizationTokens(data.googleSSO.authorizationToken, data.googleSSO.refreshToken);
      setPreferredOrgIdOnContext(data.googleSSO.preferredOrgId);
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
          getCleavedLogin({ variables: { token: credentialResponse.credential } });
        }

        if (triggerCallback) {
          triggerCallback();
        }
      }}
    />
  );
};
