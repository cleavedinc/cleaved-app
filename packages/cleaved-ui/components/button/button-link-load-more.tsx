import styled from "styled-components";
import { FONT_SIZES, RADIUS } from "../../theme";

export const ButtonLinkLoadMore = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  outline: inherit;
  padding: 5px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
    border-radius: ${RADIUS.SMALL};
  }
`;
