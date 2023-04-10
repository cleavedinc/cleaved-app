import { isBrowser } from "../is-browser";

export const setSessionStorageItem = (key: string, value: string): void => {
  if (isBrowser) {
    window.sessionStorage.setItem(key, value);
  } else {
    throw new Error(
      `Server Error: setSessionStorageItem attempted to get key: ${key} and value: ${value} while on the server. This is client-side only`
    );
  }
};
