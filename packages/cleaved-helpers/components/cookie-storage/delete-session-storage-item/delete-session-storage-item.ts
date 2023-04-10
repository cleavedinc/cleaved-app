import { isBrowser } from "../is-browser";

export const deleteSessionStorageItem = (key: string): void => {
  if (isBrowser) {
    window.sessionStorage.removeItem(key);
  } else {
    throw new Error(
      `Server Error: deleteSessionStorageItem attempted to get key: ${key} while on the server. This is client-side only`
    );
  }
};
