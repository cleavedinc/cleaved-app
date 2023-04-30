import { css } from "styled-components";
import { FONT_SIZES, RADIUS, SPACING } from "../../theme";

export const buttonBase = css`
  align-items: center;
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;
  display: inline-flex;
  font-size: ${FONT_SIZES.SMALL};
  justify-content: center;
  min-height: 40px;
  padding: ${SPACING.SMALL} ${SPACING.LARGE};

  :disabled {
    background-color: ${({ theme }) => theme.colors.baseBordersAndShadows_color};
    cursor: not-allowed;
  }
`;
