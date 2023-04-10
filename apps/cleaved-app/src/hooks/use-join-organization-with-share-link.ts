import { useMutation } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";

import { JOIN_ORGANIZATION_WITH_SHARE_LINK_MUTATION } from "../gql-mutations";
import { useRouteParams } from "../hooks";

export const useJoinOrganizationWithShareLink = () => {
  const routeParams = useRouteParams();
  const shareLink = routeParams.shareLink;

  const [joinOrganizationWithShareLink] = useMutation(JOIN_ORGANIZATION_WITH_SHARE_LINK_MUTATION, {
    variables: {
      shareLink: shareLink ? shareLink : "",
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  return { joinOrganizationWithShareLink };
};
