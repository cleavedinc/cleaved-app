import React, { FunctionComponent, ReactNode, createContext, useEffect, useState } from "react";

type ThemeContextProviderType = {
  children: ReactNode;
};

type ThemeContextType = {
  isDarkTheme: boolean;
  setThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  setThemeMode: () => {},
});

export const ThemeContextProvider: FunctionComponent<ThemeContextProviderType> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const output: ThemeContextType = {
    isDarkTheme,
    setThemeMode: toggleTheme,
  };

  return <ThemeContext.Provider value={output}>{children}</ThemeContext.Provider>;
};
