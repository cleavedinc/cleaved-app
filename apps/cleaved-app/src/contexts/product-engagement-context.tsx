import React, { FunctionComponent, ReactNode, createContext } from "react";
import amplitude from "amplitude-js";

type ProductEngagementContextProviderType = {
  children: ReactNode;
};

type ProductEngagementContextType = {
  context: amplitude.AmplitudeClient;
};

export const ProductEngagementContext = createContext<ProductEngagementContextType>({
  context: amplitude.getInstance(),
});

export const ProductEngagementContextProvider: FunctionComponent<ProductEngagementContextProviderType> = ({
  children,
}) => {
  const localDevelopmentAmplitudeAPIKey = "a2f344672df634b57ddd17188b6da8b7";
  const productionAmplitudeAPIKey = "cf64e20a4ee03c3eec95b78f6b7527d7";
  const amplitudeAPIKey =
    process.env.NODE_ENV === "production" ? productionAmplitudeAPIKey : localDevelopmentAmplitudeAPIKey;

  amplitude.getInstance().init(amplitudeAPIKey);

  const output: ProductEngagementContextType = {
    context: amplitude.getInstance(),
  };

  return <ProductEngagementContext.Provider value={output}>{children}</ProductEngagementContext.Provider>;
};
