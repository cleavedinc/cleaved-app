import React, { FunctionComponent } from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { ApolloProvider } from "@apollo/client";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import { logError, RollbarLogLevels } from "@cleaved/helpers";

// import { apolloClient } from "../client";
import { AuthTokenContextProvider, ThemeContextProvider } from "../contexts";
import { UIProvider } from "../providers";

import { Application } from "./application";

export const ApplicationWrapper: FunctionComponent = () => {
  // const googleClientId = process.env.GOOGLE_CLIENT_ID as string;

  const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
      <div role="alert">
        <p>Something went wrong - React error boundary</p>
        <pre>{error?.message}</pre>
        <button type="button" onClick={resetErrorBoundary}>
          try again
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
      {/* <GoogleOAuthProvider clientId={googleClientId}> */}
      {/* <ApolloProvider client={apolloClient}> */}
      {/* <AuthTokenContextProvider> */}
      <ThemeContextProvider>
        <UIProvider>
          <Application />
        </UIProvider>
      </ThemeContextProvider>
      {/* </AuthTokenContextProvider> */}
      {/* </ApolloProvider> */}
      {/* </GoogleOAuthProvider> */}
    </ErrorBoundary>
  );
};
