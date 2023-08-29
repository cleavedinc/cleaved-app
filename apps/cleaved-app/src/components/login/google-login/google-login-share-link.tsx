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

  const [getCleavedLoginWithSharelink, { loading, error, called, data }] = useMutation<
    GoogleSsoWithShareLinkMutation,
    GoogleSsoWithShareLinkMutationVariables
  >(GOOGLE_SSO_WITH_SHARE_LINK_MUTATION, {});

  useEffect(() => {
    if (loading || !called) {
      return;
    }

    if (!loading && error && error?.graphQLErrors[0]?.extensions?.code === "SINGLE_ORG_JOIN_LIMIT") {
      alertError(t("loginPage.errorSingleOrgJoinLimit"));
      return;
    }

    if (error) {
      logError(RollbarLogLevels.error, "Single org join limit was hit", error);
      logOut();
      googleLogout();
      return;
    }

    if (data?.googleSSOWithShareLink) {
      if (data.googleSSOWithShareLink.authorizationToken && data.googleSSOWithShareLink.refreshToken) {
        setAuthorizationTokens(
          data.googleSSOWithShareLink.authorizationToken,
          data.googleSSOWithShareLink.refreshToken
        );
      }

      if (data?.googleSSOWithShareLink?.preferredOrgId) {
        setPreferredOrgIdOnContext(data.googleSSOWithShareLink.preferredOrgId);
      }

      navigate(routeConstantsCleavedApp.homeRouting.route);
    }
  }, [loading, error, called, data, setAuthorizationTokens, setPreferredOrgIdOnContext, logOut, t]);

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
