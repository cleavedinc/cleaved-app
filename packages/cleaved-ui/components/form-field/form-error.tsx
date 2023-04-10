import React, { FunctionComponent, ReactNode } from "react";

type FormErrorProps = {
  children: ReactNode;
};

export const FormError: FunctionComponent<FormErrorProps> = (props) => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return <div data-error="true">{children}</div>;
};
