import { useContext } from "react";
import { navigate } from "@reach/router";

import { authTokenContext } from "../contexts";
import { routeConstantsCleavedApp } from "../router";

type NavigateToProfessionalProfileType = {
  navigateToProfessionalProfile: () => void;
  professionalProfilePath: string;
};

export const useNavigateToProfessionalProfile = (
  professionalId: string | undefined
): NavigateToProfessionalProfileType => {
  const { preferredOrgId } = useContext(authTokenContext);

  const professionalProfilePath = `/${preferredOrgId}${routeConstantsCleavedApp.professional.route}/${professionalId}`;

  const navigateToProfessionalProfile = () => {
    navigate(professionalProfilePath);
  };

  return { navigateToProfessionalProfile, professionalProfilePath };
};
