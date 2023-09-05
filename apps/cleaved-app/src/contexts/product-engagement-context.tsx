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
  const amplitudeAPIKey = process.env.AMPLITUDE_API_KEY || "";
  amplitude.getInstance().init(amplitudeAPIKey);

  const output: ProductEngagementContextType = {
    context: amplitude.getInstance(),
  };

  return <ProductEngagementContext.Provider value={output}>{children}</ProductEngagementContext.Provider>;
};
