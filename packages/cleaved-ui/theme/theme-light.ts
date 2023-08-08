import { COLORS_BASE } from "./colors-base";
import { COLORS_LIGHT } from "./colors-light";

export const themeLight = {
  borders: {
    baseLink_color: COLORS_BASE.BLUE_500,
    primary_color: COLORS_LIGHT.GRAY_100,
    always_white_color: COLORS_LIGHT.WHITE,
  },
  colors: {
    always_white_color: COLORS_BASE.ALWAYS_WHITE,
    always_green_color: COLORS_BASE.ALWAYS_GREEN,

    baseAlert_color: COLORS_BASE.RED_500,
    baseApproved_color: COLORS_BASE.GREEN_500,
    baseBordersAndShadows_color: COLORS_LIGHT.GRAY_100,
    baseBox_backgroundColor: COLORS_LIGHT.WHITE,
    baseButtonAndIcon_backgroundColorHover: COLORS_LIGHT.GRAY_50,
    baseButtonLink_color: COLORS_LIGHT.GRAY_500,
    baseDropdownMenu_backgroundColor: COLORS_LIGHT.WHITE,
    baseIcon_color: COLORS_LIGHT.GRAY_500,
    baseIconAlt_color: COLORS_LIGHT.WHITE,
    baseInput_backgroundColor: COLORS_LIGHT.WHITE,
    baseLink_color: COLORS_BASE.BLUE_500,
    baseLink_colorHover: COLORS_BASE.BLUE_500_HOVER,
    baseLogo: COLORS_LIGHT.GRAY_900,
    baseOverlay_backgroundColor: COLORS_BASE.WHITE_ALPHA,
    baseOverlayImage_backgroundColor: COLORS_BASE.BLACK_ALPHA_MEDIUM,
    baseOverlayImageIcon_backgroundColor: COLORS_BASE.BLACK_ALPHA_LIGHT,
    basePlaceholderText_color: COLORS_LIGHT.GRAY_500,
    baseSubText_color: COLORS_LIGHT.GRAY_500,
    baseText_color: COLORS_LIGHT.BLACK,
    baseTextAlt_color: COLORS_LIGHT.WHITE,
    baseTextLink_color: COLORS_LIGHT.BLACK,
    baseTextLink_colorHover: COLORS_BASE.BLUE_500_HOVER,

    body_backgroundColor: COLORS_LIGHT.GRAY_50,

    iconlikeColor: COLORS_BASE.BLUE_500,
    iconLikeInactiveColor: COLORS_LIGHT.GRAY_500,
    iconLoveColor: COLORS_BASE.RED_500,
    iconCelebrateColor: COLORS_BASE.HONEY_YELLOW_500,

    helperInfoBoxWrapper_backgroundColor: COLORS_LIGHT.TAN_300,
  },
};

export type ThemeLightType = typeof themeLight;

// color: ${COLORS_LIGHT.WHITE};
// color: ${({ theme }) => theme.borders.always_white_color};

//   const theme = useTheme();
// theme.colors.baseIcon_color

// FINAL CHECK:
// COLORS_LIGHT
