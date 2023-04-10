import Cookies from "js-cookie";

export const DeleteCookie = (name: string): void => {
  return Cookies.remove(name);
};
