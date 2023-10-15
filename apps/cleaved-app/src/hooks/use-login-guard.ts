import { useContext } from "react";
import { authTokenContext } from "../contexts/auth-token-context";

type LoginGuardType = {
  isLoggedIn: boolean;
  loading: boolean;
};

export const useLoginGuard = (): LoginGuardType => {
  const { loggedIn, loading } = useContext(authTokenContext);

  return {
    isLoggedIn: loggedIn,
    loading,
  };
};
