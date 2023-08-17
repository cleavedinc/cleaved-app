import React, { FunctionComponent, ReactNode, createContext, useState } from "react";

type PostFormContextProviderType = {
  children: ReactNode;
};

type PostFormContextType = {
  projectPostFormIsDirty: boolean;
  projectPostFormImageUploadIsDirty: boolean;
  setProjectPostFormIsDirty: (isDirty: boolean) => void;
  setProjectPostFormImageUploadIsDirty: (isDirty: boolean) => void;
};

export const PostFormContext = createContext<PostFormContextType>({
  projectPostFormIsDirty: false,
  projectPostFormImageUploadIsDirty: false,
  setProjectPostFormIsDirty: () => {},
  setProjectPostFormImageUploadIsDirty: () => {},
});

export const PostFormContextProvider: FunctionComponent<PostFormContextProviderType> = ({ children }) => {
  const [projectPostFormIsDirty, setProjectPostFormIsDirty] = useState(false);
  const [projectPostFormImageUploadIsDirty, setProjectPostFormImageUploadIsDirty] = useState(false);

  const setProjectPostFormIsDirtyOnContext = (isDirtyArg: boolean) => {
    setProjectPostFormIsDirty(isDirtyArg);
  };

  const setProjectPostFormImageUploadIsDirtyOnContext = (isDirtyArg: boolean) => {
    setProjectPostFormImageUploadIsDirty(isDirtyArg);
  };

  const output: PostFormContextType = {
    projectPostFormIsDirty,
    projectPostFormImageUploadIsDirty,
    setProjectPostFormIsDirty: setProjectPostFormIsDirtyOnContext,
    setProjectPostFormImageUploadIsDirty: setProjectPostFormImageUploadIsDirtyOnContext,
  };

  return <PostFormContext.Provider value={output}>{children}</PostFormContext.Provider>;
};
