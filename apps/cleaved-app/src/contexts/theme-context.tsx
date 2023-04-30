import React, { FunctionComponent, ReactNode, createContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { PostProjectSeekQuery } from "../generated-types/graphql";
import { POST_PROJECT_SEEK_QUERY } from "../gql-queries";

import { useLoginGuard, useRouteParams } from "../hooks";

type ThemeContextProviderType = {
  children: ReactNode;
};

type ThemeContextType = {
  setThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  setThemeMode: () => {},
});

export const ThemeContextProvider: FunctionComponent<ThemeContextProviderType> = ({ children }) => {
  const setThemeMode = () => {
    console.log("MADE IT HERE");
  };

  const output: ThemeContextType = {
    setThemeMode,
  };

  return <ThemeContext.Provider value={output}>{children}</ThemeContext.Provider>;
};
