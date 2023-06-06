import React, { FunctionComponent, useContext } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useMutation } from "@apollo/react-hooks";

import { logError, RollbarLogLevels, logQueryError } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import { GOOGLE_SSO_WITH_SHARE_LINK_MUTATION } from "../gql";

import { GoogleSsoMutation } from "../../../generated-types/graphql";

type GoogleLoginShareLinkWrapperProps = {
  shareLink: string;
  triggerCallback?: () => void;
};

export const GoogleLoginShareLinkWrapper: FunctionComponent<GoogleLoginShareLinkWrapperProps> = (props) => {
  const { shareLink, triggerCallback } = props;
  const { logOut, setAuthorizationTokens, setPreferredOrgIdOnContext } = useContext(authTokenContext);

  const [getCleavedLoginWithSharelink] = useMutation(GOOGLE_SSO_WITH_SHARE_LINK_MUTATION, {
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
          getCleavedLoginWithSharelink({ variables: { token: credentialResponse.credential, shareLink: shareLink } });
        }

        if (triggerCallback) {
          triggerCallback();
        }
      }}
    />
  );
};
