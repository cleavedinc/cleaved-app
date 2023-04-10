import { useContext } from "react";
import { authTokenContext } from "../contexts/auth-token-context";

type LoginGuardType = {
  isLoggedIn: boolean;
};

export const useLoginGuard = (): LoginGuardType => {
  const { loggedIn } = useContext(authTokenContext);

  return {
    isLoggedIn: loggedIn,
  };
};
