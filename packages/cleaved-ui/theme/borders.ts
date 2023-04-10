import { COLORS } from "./colors";

export type ThemeBorders = {
  BORDER_BLUE500_2PX: string;
  BORDER_PRIMARY: string;
};

export const BORDERS: ThemeBorders = {
  BORDER_BLUE500_2PX: `2px solid ${COLORS.BLUE_500}`, // header navigation active state
  BORDER_PRIMARY: `1px solid ${COLORS.GRAY_100}`,
};
