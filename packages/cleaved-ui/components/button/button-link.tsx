import styled from "styled-components";
import { COLORS, FONT_SIZES } from "../../theme";

export const ButtonLink = styled.button`
  background: none;
  border: none;
  color: ${COLORS.BLUE_500};
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  outline: inherit;
  padding: 0;

  &:hover,
  &:focus {
    color: ${COLORS.BLUE_500_HOVER};
  }
`;
