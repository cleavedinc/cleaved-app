import { COLORS } from "./colors";

export const themeLight = {
  borders: {
    baseLink_color: COLORS.BLUE_500,
    primary_color: COLORS.GRAY_100,
    white_color: COLORS.WHITE,
  },
  colors: {
    baseAlert_color: COLORS.RED_500,
    baseApproved_color: COLORS.GREEN_500,
    baseBordersAndShadows_color: COLORS.GRAY_100,
    baseBox_backgroundColor: COLORS.WHITE,
    baseButtonAndIcon_backgroundColorHover: COLORS.GRAY_50,
    baseButtonLink_color: COLORS.GRAY_500,
    baseDropdownMenu_backgroundColor: COLORS.WHITE,
    baseIcon_color: COLORS.GRAY_500,
    baseIconAlt_color: COLORS.WHITE,
    baseInput_backgroundColor: COLORS.WHITE,
    baseLink_color: COLORS.BLUE_500,
    baseLink_colorHover: COLORS.BLUE_500_HOVER,
    baseLogo: COLORS.GRAY_900,
    baseOverlay_backgroundColor: COLORS.BLACK_ALPHA_DARK,
    baseOverlayImage_backgroundColor: COLORS.BLACK_ALPHA_MEDIUM,
    basePlaceholderText_color: COLORS.GRAY_500,
    baseSubText_color: COLORS.GRAY_500,
    baseText_color: COLORS.BLACK,
    baseTextAlt_color: COLORS.WHITE,
    baseTextLink_color: COLORS.BLACK,
    baseTextLink_colorHover: COLORS.BLUE_500_HOVER,

    body_backgroundColor: COLORS.GRAY_50,

    iconlikeColor: COLORS.BLUE_500,
    iconLikeInactiveColor: COLORS.GRAY_500,
    iconLoveColor: COLORS.RED_500,
    iconCelebrateColor: COLORS.HONEY_YELLOW_500,

    helperInfoBoxWrapper_backgroundColor: COLORS.TAN_300,

    white_color: COLORS.WHITE,
  },
};

export type ThemeLightType = typeof themeLight;

// color: ${COLORS.WHITE};
// color: ${({ theme }) => theme.borders.white_color};

//   const theme = useTheme();
// theme.colors.baseIcon_color

// FINAL CHECK:
// COLORS
