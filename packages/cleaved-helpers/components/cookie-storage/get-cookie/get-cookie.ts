import Cookies from "js-cookie";

export const GetCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};
