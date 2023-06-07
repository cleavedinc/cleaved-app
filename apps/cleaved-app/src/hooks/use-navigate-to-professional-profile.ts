import { useContext } from "react";
import { navigate } from "@reach/router";

import { authTokenContext } from "../contexts";
import { routeConstantsCleavedApp } from "../router";

type NavigateToProfileType = {
  navigateToProfile: () => void;
  profilePath: string;
};

export const useNavigateToProfile = (accountId: string | undefined): NavigateToProfileType => {
  const { preferredOrgId } = useContext(authTokenContext);
  const profilePath = `/${preferredOrgId}${routeConstantsCleavedApp.account.route}/${accountId}`;

  const navigateToProfile = () => {
    navigate(profilePath);
  };

  return { navigateToProfile, profilePath };
};
