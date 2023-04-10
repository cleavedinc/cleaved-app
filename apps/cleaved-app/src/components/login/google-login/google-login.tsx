import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useMutation } from "@apollo/react-hooks";

import { logError, RollbarLogLevels, logQueryError } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import { GOOGLE_SSO_MUTATION } from "../gql";
import { useJoinOrganizationWithShareLink, useRouteParams } from "../../../hooks";
import { routeConstantsCleavedApp } from "../../../router";

import { GoogleSsoMutation } from "../../../generated-types/graphql";

export const GoogleLoginWrapper: FunctionComponent = () => {
  const { logOut, setAuthorizationTokens, setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const { joinOrganizationWithShareLink } = useJoinOrganizationWithShareLink();
  const routeParams = useRouteParams();
  const shareLink = routeParams.shareLink;

  const [getCleavedLogin] = useMutation(GOOGLE_SSO_MUTATION, {
    onCompleted: (data: GoogleSsoMutation) => {
      setAuthorizationTokens(data.googleSSO.authorizationToken, data.googleSSO.refreshToken);
      setPreferredOrgIdOnContext(data.googleSSO.preferredOrgId);

      // if there is a share link, link the account to the organization
      if (shareLink) {
        joinOrganizationWithShareLink();
      }

      if (data.googleSSO.preferredOrgId !== null) {
        // if has an orgIg, send to home
        navigate(`/${data.googleSSO.preferredOrgId}${routeConstantsCleavedApp.home.route}`);
      } else {
        // if no orgId, send to onboarding screen
        navigate(routeConstantsCleavedApp.professionalOnboarding.route);
      }
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
      }}
    />
  );
};
