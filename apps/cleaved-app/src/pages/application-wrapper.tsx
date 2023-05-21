import React, { FunctionComponent } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ApolloProvider } from "@apollo/client";
import TagManager from "react-gtm-module";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { logError, RollbarLogLevels } from "@cleaved/helpers";

import { apolloClient } from "../client";
import { AuthTokenContextProvider, AccountContextProvider, ThemeContextProvider } from "../contexts";
import { useTranslator } from "../hooks";
import { UIProvider } from "../providers";

import { Application } from "./application";

// Staging GTM Id
const localDevelopGTMId = "GTM-PF2PGRP";
const productionGTMId = "GTM-N36S8X7";

const tagManagerArgs = {
  gtmId: process.env.NODE_ENV === "production" ? productionGTMId : localDevelopGTMId,
};

TagManager.initialize(tagManagerArgs);

export const ApplicationWrapper: FunctionComponent = () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
  const { t } = useTranslator();

  window.dataLayer.push({
    event: "pageview",
  });

  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <div role="alert">
        <p>{t("errorMessages.somethingWentWrongSorryAboutThat")}</p>
        <pre>{error?.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          {t("tryAgain")}
        </button>
      </div>
    );
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, componentStack) => {
        logError(RollbarLogLevels.error, error.message, componentStack);
      }}
    >
      <GoogleOAuthProvider clientId={googleClientId}>
        <ApolloProvider client={apolloClient}>
          <AuthTokenContextProvider>
            <AccountContextProvider>
              <ThemeContextProvider>
                <UIProvider>
                  <Application />
                </UIProvider>
              </ThemeContextProvider>
            </AccountContextProvider>
          </AuthTokenContextProvider>
        </ApolloProvider>
      </GoogleOAuthProvider>
    </ErrorBoundary>
  );
};
