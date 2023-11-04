import React, { FunctionComponent, ReactNode } from "react";
import { useLoginGuard } from "../../hooks";

type LoginGuardType = {
  children: ReactNode;
};

export const LoginGuard: FunctionComponent<LoginGuardType> = ({ children }) => {
  const { isLoggedIn } = useLoginGuard();

  if (!isLoggedIn) {
    console.log("HI THERE");
    return null;
  }

  return <>{children}</>;
};
