import { Link } from "@reach/router";
import styled from "styled-components";

import { FONT_SIZES } from "@cleaved/ui";

export const StyledRouterButtonLink = styled(Link)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  outline: inherit;
  padding: 0;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.baseLink_colorHover};
  }
`;
