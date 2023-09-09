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

export const ApplicationWrapper: FunctionComponent = () => {
  const googleClientId = process.env.GOOGLE_CLIENT_ID as string;

  // GTM
  const tagManagerArgs = {
    gtmId: process.env.GOOGLE_TAG_MANAGER_ID || "",
  };
  TagManager.initialize(tagManagerArgs);

  const { t } = useTranslator();

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
