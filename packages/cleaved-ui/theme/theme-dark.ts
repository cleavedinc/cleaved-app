import { COLORS_DARK } from "./colors-dark";

export const themeDark = {
  borders: {
    baseLink_color: COLORS_DARK.BLUE_500,
    primary_color: COLORS_DARK.GRAY_100,
    white_color: COLORS_DARK.WHITE,
  },
  colors: {
    baseAlert_color: COLORS_DARK.RED_500,
    baseApproved_color: COLORS_DARK.GREEN_500,
    baseBordersAndShadows_color: COLORS_DARK.GRAY_100,
    baseBox_backgroundColor: COLORS_DARK.WHITE,
    baseButtonAndIcon_backgroundColorHover: COLORS_DARK.GRAY_50,
    baseButtonLink_color: COLORS_DARK.GRAY_500,
    baseDropdownMenu_backgroundColor: COLORS_DARK.WHITE,
    baseIcon_color: COLORS_DARK.GRAY_500,
    baseIconAlt_color: COLORS_DARK.WHITE,
    baseInput_backgroundColor: COLORS_DARK.WHITE,
    baseLink_color: COLORS_DARK.BLUE_500,
    baseLink_colorHover: COLORS_DARK.BLUE_500_HOVER,
    baseLogo: COLORS_DARK.GRAY_900,
    baseOverlay_backgroundColor: COLORS_DARK.BLACK_ALPHA_6,
    basePlaceholderText_color: COLORS_DARK.GRAY_500,
    baseSubText_color: COLORS_DARK.GRAY_500,
    baseText_color: COLORS_DARK.BLACK,
    baseTextAlt_color: COLORS_DARK.WHITE,
    baseTextLink_color: COLORS_DARK.BLACK,
    baseTextLink_colorHover: COLORS_DARK.BLUE_500_HOVER,

    body_backgroundColor: COLORS_DARK.GRAY_50,

    iconlikeColor: COLORS_DARK.BLUE_500,
    iconLikeInactiveColor: COLORS_DARK.GRAY_500,
    iconLoveColor: COLORS_DARK.RED_500,
    iconCelebrateColor: COLORS_DARK.HONEY_YELLOW_500,

    helperInfoBoxWrapper_backgroundColor: COLORS_DARK.TAN_300,
  },
};

export type ThemeDarkType = typeof themeDark;

// ${({ theme }) => theme.colors.baseOverlay_backgroundColor}
