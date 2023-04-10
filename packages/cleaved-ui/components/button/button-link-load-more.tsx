import styled from "styled-components";
import { COLORS, FONT_SIZES, RADIUS } from "../../theme";

export const ButtonLinkLoadMore = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  outline: inherit;
  padding: 5px;

  &:hover,
  &:focus {
    background-color: ${COLORS.GRAY_50};
    border-radius: ${RADIUS.SMALL};
  }
`;
