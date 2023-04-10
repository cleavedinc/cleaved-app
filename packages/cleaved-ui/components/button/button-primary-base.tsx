import { css } from "styled-components";
import { COLORS } from "../../theme";

export const buttonPrimaryBase = css`
  background-color: ${COLORS.BLUE_500};
  border: none;
  color: ${COLORS.WHITE};

  &:hover:not([disabled]) {
    background-color: ${COLORS.BLUE_500_HOVER};
    color: ${COLORS.WHITE};
  }
`;
