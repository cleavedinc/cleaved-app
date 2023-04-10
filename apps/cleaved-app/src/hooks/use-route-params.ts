import { useParams } from "@reach/router";

export const useRouteParams = () => {
  const params = useParams();

  return params;
};
