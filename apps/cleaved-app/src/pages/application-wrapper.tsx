import React, { FunctionComponent } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ApolloProvider } from "@apollo/client";
import TagManager from "react-gtm-module";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { logError, RollbarLogLevels } from "@cleaved/helpers";

import { apolloClient } from "../client";
import { AuthTokenContextProvider, ProductEngagementContextProvider, ThemeContextProvider } from "../contexts";
import { useTranslator } from "../hooks";
import { UIProvider } from "../providers";

import { Application } from "./application";

// GTM
const localDevelopGTMId = "GTM-PF2PGRP";
const productionGTMId = "GTM-N36S8X7";
const tagManagerArgs = {
  gtmId: process.env.NODE_ENV === "production" ? productionGTMId : localDevelopGTMId,
};
TagManager.initialize(tagManagerArgs);

// // Amplitude
// const localDevelopmentAmplitudeAPIKey = "a2f344672df634b57ddd17188b6da8b7";
// const productionAmplitudeAPIKey = "cf64e20a4ee03c3eec95b78f6b7527d7";
// const amplitudeAPIKey =
//   process.env.NODE_ENV === "production" ? productionAmplitudeAPIKey : localDevelopmentAmplitudeAPIKey;
// amplitude.init(amplitudeAPIKey);

export const ApplicationWrapper: FunctionComponent = () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID as string;
  const { t } = useTranslator();

  // amplitude.track("Page View");

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
            <ThemeContextProvider>
              <UIProvider>
                <ProductEngagementContextProvider>
                  <Application />
                </ProductEngagementContextProvider>
              </UIProvider>
            </ThemeContextProvider>
          </AuthTokenContextProvider>
        </ApolloProvider>
      </GoogleOAuthProvider>
    </ErrorBoundary>
  );
};
