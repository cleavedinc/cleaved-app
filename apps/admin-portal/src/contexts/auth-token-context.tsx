/* eslint-disable react-hooks/exhaustive-deps */
import React, { FunctionComponent, ReactNode, useState, createContext, useEffect, useCallback } from "react";
import { googleLogout } from "@react-oauth/google";
import { useMutation } from "@apollo/react-hooks";
import { navigate } from "@reach/router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { DeleteCookie, GetCookie, logQueryError, SetCookie } from "@cleaved/helpers";

import { apolloClient } from "../client";
import { CleavedAdminRefreshLoginMutation } from "../generated-types/graphql";
import { CLEAVED_ADMIN_REFRESH_LOGIN_MUTATION } from "../components/login/gql";

type AuthTokenContextProviderType = {
  children: ReactNode;
};

type RefreshRequest = {
  refreshRequested: boolean;
  refreshAction: (() => void) | null | undefined;
};

type AuthTokenContextType = {
  logOut: () => void;
  loggedIn: boolean;
  setAuthorizationTokens: (cat: string, crt: string) => void;
  refreshLogin: (action?: () => void | null | undefined) => Promise<void>;
  loading: boolean;
  saveAccessToken: (catToken: string, callback?: any) => void; // eslint-disable-line
};

// extending dayjs with utc plugin to format correctly for cookie expiration
dayjs.extend(utc);

export const authTokenContext = createContext<AuthTokenContextType>({
  logOut: () => {},
  loggedIn: false,
  setAuthorizationTokens: () => {},
  refreshLogin: async () => {},
  loading: true,
  saveAccessToken: () => {},
});

export const AuthTokenContextProvider: FunctionComponent<AuthTokenContextProviderType> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstLoginComplete, setFirstLoginComplete] = useState(false);
  const [refreshInProgress, setRefreshInProgress] = useState(false);
  const [refreshRequested, setRefreshRequested] = useState<RefreshRequest>({
    refreshRequested: false,
    refreshAction: null,
  });

  const logOut = useCallback(() => {
    setLoggedIn(false);
    DeleteCookie("_CRT_");
    // clear apollo cache to ensure new user gets fresh data
    apolloClient.resetStore();
    apolloClient.cache.reset();
    googleLogout();
    navigate(`/login`);
  }, [setLoggedIn, DeleteCookie, navigate, apolloClient, googleLogout]);

  const saveAccessToken = (catToken: string, callback?: () => void) => {
    (window as unknown as { _cleaved_cat_token: null | string | undefined })._cleaved_cat_token = catToken ?? "";

    if (callback) {
      callback();
    }
  };

  const saveAuthorizationTokens = useCallback(
    (catToken: string, crtToken: string) => {
      const oneYearFromNow: string = dayjs().add(1, "year").utc().format();

      saveAccessToken(catToken);

      SetCookie("_CRT_", crtToken, {
        expires: new Date(oneYearFromNow),
        secure: process.env.NODE_ENV === "production",
      });
      setLoggedIn(true);
      setFirstLoginComplete(true);
    },
    [SetCookie, setLoggedIn, setFirstLoginComplete]
  );

  const [getRefreshLogIn, { loading: refreshLoading }] = useMutation(CLEAVED_ADMIN_REFRESH_LOGIN_MUTATION, {
    onError: (error) => {
      setFirstLoginComplete(true);
      logQueryError(error);
      logOut();
    },
  });

  const refreshOnComplete = useCallback(
    (r: CleavedAdminRefreshLoginMutation, postLoginRefreshAction?: (() => void) | null | undefined) => {
      saveAuthorizationTokens(r.cleavedAdminRefreshLogin.authorizationToken, r.cleavedAdminRefreshLogin.refreshToken);

      if (postLoginRefreshAction) {
        postLoginRefreshAction();
      }
    },
    [saveAuthorizationTokens]
  );

  useEffect(() => {
    if (loggedIn) {
      const ival = setInterval(() => {
        const intervalCrt = GetCookie("_CRT_");

        if (intervalCrt) {
          getRefreshLogIn({
            variables: { refreshToken: intervalCrt },
            onCompleted: (r: CleavedAdminRefreshLoginMutation) =>
              saveAuthorizationTokens(
                r.cleavedAdminRefreshLogin.authorizationToken,
                r.cleavedAdminRefreshLogin.refreshToken
              ),
          });
        }
      }, 30000);

      return () => {
        clearInterval(ival);
      };
    }
  }, [loggedIn]);

  useEffect(() => {
    setRefreshInProgress(true);
    const refreshAction = refreshRequested.refreshAction;
    const crt = GetCookie("_CRT_");

    if (crt) {
      console.log("HAS CRT");
      getRefreshLogIn({
        variables: { refreshToken: crt },
        onCompleted: (r: CleavedAdminRefreshLoginMutation) => {
          refreshOnComplete(r, refreshAction);
          setRefreshInProgress(false);
        },
        onError: () => {
          setRefreshInProgress(false);
        },
      });
      setRefreshRequested({ refreshRequested: false, refreshAction: null });
    } else {
      console.log("ROUTE TO LOGIN PAGE");

      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (!refreshInProgress && refreshRequested.refreshRequested) {
      setRefreshInProgress(true);
      const refreshAction = refreshRequested.refreshAction;
      const crt = GetCookie("_CRT_");
      if (crt) {
        getRefreshLogIn({
          variables: { refreshToken: crt },
          onCompleted: (r: CleavedAdminRefreshLoginMutation) => {
            refreshOnComplete(r, refreshAction);
            setRefreshInProgress(false);
          },
          onError: () => {
            setRefreshInProgress(false);
          },
        });
        setRefreshRequested({ refreshRequested: false, refreshAction: null });
      }
    }
  }, [refreshRequested, refreshInProgress]);

  const output: AuthTokenContextType = {
    logOut,
    loggedIn,
    saveAccessToken,
    setAuthorizationTokens: saveAuthorizationTokens,
    loading: false || !firstLoginComplete,
    refreshLogin: async (postLoginRefreshAction?: (() => void) | null | undefined) => {
      setRefreshRequested({ refreshRequested: true, refreshAction: postLoginRefreshAction });
    },
  };

  return <authTokenContext.Provider value={output}>{children}</authTokenContext.Provider>;
};
