import { css } from "styled-components";
import { COLORS, FONT_SIZES, RADIUS, SPACING } from "../../theme";

export const buttonBase = css`
  align-items: center;
  border-radius: ${RADIUS.MEDIUM};
  cursor: pointer;
  display: inline-flex;
  font-size: ${FONT_SIZES.SMALL};
  justify-content: center;
  min-height: 40px;
  padding: ${SPACING.SMALL} ${SPACING.LARGE};

  :disabled {
    background-color: ${COLORS.GRAY_100};
    color: ${COLORS.BLACK};
    cursor: not-allowed;
  }
`;
