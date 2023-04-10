import { isBrowser } from "../../cookie-storage";

import { RollbarTypes, RollbarLogLevel } from "../types";

// Rollbar is added to the client pages through GTM
declare let window: Window & { Rollbar: RollbarTypes };

/**
 * @description
 * Logs Errors
 * @param logLevel critical, error, warning, info, debug
 * @param errorMessage Descriptive error message
 * @param exception Optional param - Can include caught exceptions or custom json data (ex. { postId: 123 }). It will appear as "message.extra.postId" in the Occurrences tab
 **/
export const logError = (logLevel: RollbarLogLevel, errorMessage: string, exception?: any): void => {
  if (isBrowser && window.Rollbar) {
    window.Rollbar[logLevel](errorMessage, exception);
  }
};
