/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactNode, useState, createContext, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
import { useMutation } from "@apollo/react-hooks";
import { navigate } from "@reach/router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { DeleteCookie, GetCookie, logQueryError, SetCookie } from "@cleaved/helpers";

import { apolloClient } from "../client";
import { RefreshLogInMutation } from "../generated-types/graphql";

import { REFRESH_LOGIN_MUTATION } from "../components/login/gql";

type AuthTokenContextProviderType = {
  children: ReactNode;
};

type AuthTokenContextType = {
  logOut: () => void;
  loggedIn: boolean;
  setAuthorizationTokens: (cat: string, crt: string) => void;
  refreshLogin: (action?: () => void | null | undefined) => Promise<void>;
  loading: boolean;
  preferredOrgId: string;
  setPreferredOrgIdOnContext: (orgId: string | null | undefined) => void;
};

// extending dayjs with utc plugin to format correctly for cookie expiration
dayjs.extend(utc);

export const authTokenContext = createContext<AuthTokenContextType>({
  logOut: () => {},
  loggedIn: false,
  setAuthorizationTokens: () => {},
  refreshLogin: async () => {},
  loading: true,
  preferredOrgId: "",
  setPreferredOrgIdOnContext: () => {},
});

export const AuthTokenContextProvider: FunctionComponent<AuthTokenContextProviderType> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstLoginComplete, setFirstLoginComplete] = useState(false);
  const [preferredOrgId, setPreferredOrgId] = useState<string>("");
  const [refreshInProgress, setRefreshInProgress] = useState(false);

  const logOut = () => {
    setLoggedIn(false);
    DeleteCookie("_CRT_");
    navigate(`/login`);
    // clear apollo cache to ensure new user gets fresh data
    apolloClient.resetStore();
    apolloClient.cache.reset();
    googleLogout();
  };

  const setOrgId = (orgIdArg: string | null | undefined) => {
    const orgIdCheck = orgIdArg ? orgIdArg : "";
    setPreferredOrgId(orgIdCheck);
  };

  const saveAuthorizationTokens = (catToken: string, crtToken: string) => {
    const oneYearFromNow: string = dayjs().add(1, "year").utc().format();

    (window as unknown as { _cleaved_cat_token: null | string | undefined })._cleaved_cat_token = catToken ?? "";

    SetCookie("_CRT_", crtToken, {
      domain: process.env.DOMAIN,
      expires: new Date(oneYearFromNow),
      secure: process.env.NODE_ENV === "production",
    });
    setLoggedIn(true);
    setFirstLoginComplete(true);
  };

  const [getRefreshLogIn, { data: refreshData, loading: refreshLoading }] = useMutation(REFRESH_LOGIN_MUTATION, {
    onError: (error) => {
      setFirstLoginComplete(true);
      logQueryError(error);
      logOut();
    },
  });

  const refreshOnComplete = (r: RefreshLogInMutation, postLoginRefreshAction?: () => void | null | undefined) => {
    saveAuthorizationTokens(r.refreshLogIn.authorizationToken, r.refreshLogIn.refreshToken);
    setOrgId(r.refreshLogIn.preferredOrgId);

    if (postLoginRefreshAction) {
      postLoginRefreshAction();
    }
  };

  useEffect(() => {
    if (loggedIn) {
      const ival = setInterval(() => {
        const intervalCrt = GetCookie("_CRT_");

        if (intervalCrt) {
          getRefreshLogIn({
            variables: { refreshToken: intervalCrt },
            onCompleted: (r: RefreshLogInMutation) =>
              saveAuthorizationTokens(r.refreshLogIn.authorizationToken, r.refreshLogIn.refreshToken),
          });
        }
      }, 30000);

      return () => {
        clearInterval(ival);
      };
    }
  }, [loggedIn]);

  const output: AuthTokenContextType = {
    logOut,
    loggedIn,
    preferredOrgId,
    setPreferredOrgIdOnContext: (orgId: string | null | undefined) => {
      setOrgId(orgId);
    },
    setAuthorizationTokens: saveAuthorizationTokens,
    loading: refreshLoading || !firstLoginComplete,
    refreshLogin: async (postLoginRefreshAction?: () => void | null | undefined) => {
      if (!refreshInProgress) {
        setRefreshInProgress(true);
        const crt = GetCookie("_CRT_");
        getRefreshLogIn({
          variables: { refreshToken: crt ? crt : "" },
          onCompleted: (r: RefreshLogInMutation) => {
            refreshOnComplete(r, postLoginRefreshAction);
            setRefreshInProgress(false);
          },
        });
      } else {
        // console.log("double tap refresh");
      }
    },
  };

  return <authTokenContext.Provider value={output}>{children}</authTokenContext.Provider>;
};
