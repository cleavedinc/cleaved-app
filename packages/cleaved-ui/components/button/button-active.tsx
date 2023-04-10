import styled from "styled-components";
import { COLORS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHT, RADIUS, SPACING } from "../../theme";

export const ButtonActive = styled.button`
  background-color: ${COLORS.BLUE_500};
  border: none;
  border-radius: ${RADIUS.MEDIUM};
  color: ${COLORS.WHITE};
  font-size: ${FONT_SIZES.XXSMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  line-height: ${LINE_HEIGHT.LARGE};
  outline: none;
  padding: ${SPACING.SMALL};
  text-transform: uppercase;
`;
