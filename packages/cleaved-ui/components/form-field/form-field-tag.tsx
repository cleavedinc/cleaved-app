import React, { FunctionComponent, ReactNode } from "react";

type FormFieldTagProps = {
  children: ReactNode;
};

export const FormFieldTag: FunctionComponent<FormFieldTagProps> = ({ children }) => {
  if (!children) {
    return null;
  }
  return <em>{children}</em>;
};
