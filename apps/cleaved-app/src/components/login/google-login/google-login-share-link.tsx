import React, { FunctionComponent, useContext, useEffect } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/react-hooks";

import { alertError, logError, RollbarLogLevels } from "@cleaved/helpers";

import { authTokenContext } from "../../../contexts";
import {
  GoogleSsoWithShareLinkMutation,
  GoogleSsoWithShareLinkMutationVariables,
} from "../../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../../hooks";
import { routeConstantsCleavedApp } from "../../../router";

import { GOOGLE_SSO_WITH_SHARE_LINK_MUTATION } from "../gql";

export const GoogleLoginShareLinkWrapper: FunctionComponent = () => {
  const { logOut, setAuthorizationTokens, setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const routeParams = useRouteParams();
  const shareLink = routeParams.shareLink;
  const { t } = useTranslator();

  const [getCleavedLoginWithSharelink, response] = useMutation<
    GoogleSsoWithShareLinkMutation,
    GoogleSsoWithShareLinkMutationVariables
  >(GOOGLE_SSO_WITH_SHARE_LINK_MUTATION, {
    onCompleted: (data) => {
      setAuthorizationTokens(data.googleSSOWithShareLink.authorizationToken, data.googleSSOWithShareLink.refreshToken);
      setPreferredOrgIdOnContext(data.googleSSOWithShareLink.preferredOrgId);
      navigate(`/${data.googleSSOWithShareLink.preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    },
  });

  useEffect(() => {
    // Alert user if they try to join multiple orgs
    if (
      !response.loading &&
      response.error &&
      response?.error?.graphQLErrors[0]?.extensions?.code === "SINGLE_ORG_JOIN_LIMIT"
    ) {
      alertError(t("loginPage.errorSingleOrgJoinLimit"));
      return;
    }

    // Log user out if there is any error with logging in
    if (!response.loading && response.error) {
      logError(RollbarLogLevels.error, "Single org join limit was hit", response && response?.error?.clientErrors);
      logOut();
      googleLogout();
    }
  }, [response]);

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
      // ux_mode={"redirect"}
    />
  );
};
