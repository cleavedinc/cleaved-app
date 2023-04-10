import Cookies from "js-cookie";

export const SetCookie = (name: string, value: string, options?: Cookies.CookieAttributes): string | undefined => {
  return Cookies.set(name, value, options);
};
