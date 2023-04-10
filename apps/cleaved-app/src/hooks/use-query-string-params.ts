import { useLocation } from "@reach/router";
import { parse, ParsedQuery } from "query-string";

export const useQueryStringParams = (): ParsedQuery<string> | null => {
  const location = useLocation();
  const searchParams = parse(location.search);

  return searchParams || null;
};
