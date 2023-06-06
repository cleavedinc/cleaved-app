import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { authTokenContext } from "../contexts";
import { OrganizationSeekMembersQuery } from "../generated-types/graphql";
import { ORGANIZATION_SEEK_MEMBERS_QUERY } from "../gql-queries";

type OrganizationSeekMembersCustomType = OrganizationSeekMembersQuery["organizationSeekMembers"];

type UseOrganizationSeekMembersType = {
  organizationSeekMembersData: OrganizationSeekMembersCustomType | undefined;
  organizationSeekMembersDataLoading: boolean;
  organizationSeekMembersDataRefetch: (() => void) | undefined;
};

export const useOrganizationSeekMembers = (
  seekKey?: string | null,
  pageSize?: number | null
): UseOrganizationSeekMembersType => {
  const { isLoggedIn } = useLoginGuard();
  const { preferredOrgId } = useContext(authTokenContext);

  const { data, loading, refetch } = useQuery<OrganizationSeekMembersQuery>(ORGANIZATION_SEEK_MEMBERS_QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    onCompleted: (data1) => {
      console.log("data1", data1);
    },
    onError: (error) => {
      console.log("error", error);

      logQueryError(error);
    },
    skip: !isLoggedIn || !preferredOrgId,
    variables: { organizationId: preferredOrgId, seekKey, pageSize },
  });

  return {
    organizationSeekMembersData: data?.organizationSeekMembers,
    organizationSeekMembersDataLoading: loading,
    organizationSeekMembersDataRefetch: refetch,
  };
};
