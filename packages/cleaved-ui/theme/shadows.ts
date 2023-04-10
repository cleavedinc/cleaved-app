import { COLORS } from "./colors";

export type ThemeShadows = {
  LIGHT: string;
  LIGHT_EVEN: string;
  LIGHT_BOTTOM: string;
  LIGHT_INSET: string;
  MEDIUM: string;
  MEDIUM_EVEN: string;
  LARGE_LEFT_BOTTOM: string;
};

export const SHADOWS: ThemeShadows = {
  LIGHT: "0 3px 10px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)",
  LIGHT_EVEN: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  LIGHT_INSET: `inset 0px -1px 0px ${COLORS.GRAY_100}`,
  LIGHT_BOTTOM: "0px 1px 3px rgba(52, 83, 170, 0.2)", // e.g. form elements: textbox, select
  MEDIUM: `0px 0px 6px 3px ${COLORS.GRAY_100}`,
  MEDIUM_EVEN: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  LARGE_LEFT_BOTTOM: "0px 20px 30px rgba(0, 0, 0, 0.2)",
};
