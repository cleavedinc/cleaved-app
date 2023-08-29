import { useContext } from "react";
import amplitude from "amplitude-js";
import { ProductEngagementContext } from "../contexts/product-engagement-context";

import { logError, RollbarLogLevels } from "@cleaved/helpers";

type ProductEngagementType = (
  event: string,
  data?: any, // eslint-disable-line
  callback?: amplitude.Callback | undefined,
  errorCallback?: amplitude.Callback | undefined,
  outOfSession?: boolean | undefined
) => void;

export const useProductEngagementLogEvent = (): ProductEngagementType => {
  const context = useContext(ProductEngagementContext);

  if (context === undefined) {
    logError(RollbarLogLevels.error, "ProductEngagementContext is not defined");
  }

  return (
    event: string,
    data?: any, // eslint-disable-line
    callback?: amplitude.Callback | undefined,
    errorCallback?: amplitude.Callback | undefined,
    outOfSession?: boolean | undefined
  ) => {
    context.context.logEvent(event, data, callback, errorCallback, outOfSession);
  };
};
