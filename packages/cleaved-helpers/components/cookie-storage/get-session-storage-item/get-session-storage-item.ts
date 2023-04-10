import { isBrowser } from "../is-browser";

export const getSessionStorageItem = (key: string): string | null => {
  if (isBrowser) {
    return window.sessionStorage.getItem(key);
  }
  throw new Error(
    `Server Error: getSessionStorageItem attempted to get key: ${key} while on the server. This is client-side only`
  );
};
