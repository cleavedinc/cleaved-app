import styled from "styled-components";
import { FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHT, RADIUS, SPACING } from "../../theme";

export const ButtonActive = styled.button`
  background-color: ${({ theme }) => theme.colors.baseLink_color};
  border: none;
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseTextAlt_color};
  font-size: ${FONT_SIZES.XXSMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  line-height: ${LINE_HEIGHT.LARGE};
  outline: none;
  padding: ${SPACING.SMALL};
  text-transform: uppercase;
`;
