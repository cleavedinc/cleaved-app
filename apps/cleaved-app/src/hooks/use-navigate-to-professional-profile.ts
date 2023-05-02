import { navigate } from "@reach/router";

import { routeConstantsCleavedApp } from "../router";

type NavigateToProfileType = {
  navigateToProfile: () => void;
  profilePath: string;
};

export const useNavigateToProfile = (accountId: string | undefined): NavigateToProfileType => {
  const profilePath = `${routeConstantsCleavedApp.account.route}/${accountId}`;

  const navigateToProfile = () => {
    navigate(profilePath);
  };

  return { navigateToProfile, profilePath };
};
