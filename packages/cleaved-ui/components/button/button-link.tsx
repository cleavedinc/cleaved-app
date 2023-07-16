import styled from "styled-components";
import { FONT_SIZES } from "../../theme";

export const ButtonLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  outline: inherit;
  padding: 0;
`;
