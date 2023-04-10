import { LinkGetProps } from "@reach/router";

type IsMenuItemActiveReturnType =
  | ""
  | {
      className: string;
    };

export const isMenuItemActive = (props: LinkGetProps): IsMenuItemActiveReturnType => {
  return props.isCurrent ? { className: "active" } : "";
};
