import { useQuery } from "@apollo/react-hooks";

import { logQueryError } from "@cleaved/helpers";
import { useLoginGuard } from "./use-login-guard";

import { FindMyProfessionalByIdQuery } from "../generated-types/graphql";
import { FIND_MY_PROFESSIONAL_BY_ID } from "../gql-queries";
import { useRouteParams } from "../hooks";

type FindMyProfessionalByIdCustomType = FindMyProfessionalByIdQuery["findProfessionalById"];

type UseFindMyProfessionalByIdType = {
  findMyProfessionalByIdData: FindMyProfessionalByIdCustomType | undefined;
  findMyProfessionalByIdDataLoading: boolean;
  findMyProfessionalByIdDataRefetch: (() => void) | undefined;
};

export const useFindMyProfessionalById = (): UseFindMyProfessionalByIdType => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const professionalId = routeParams.professionalId;

  const { data, loading, refetch } = useQuery<FindMyProfessionalByIdQuery>(FIND_MY_PROFESSIONAL_BY_ID, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !professionalId,
    variables: { id: professionalId },
  });

  return {
    findMyProfessionalByIdData: data?.findProfessionalById,
    findMyProfessionalByIdDataLoading: loading,
    findMyProfessionalByIdDataRefetch: refetch,
  };
};
