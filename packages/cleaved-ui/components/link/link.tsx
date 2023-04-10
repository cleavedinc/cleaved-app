import styled from "styled-components";

import { COLORS } from "../../theme";

export const Link = styled.a`
  color: ${COLORS.BLUE_500};
  cursor: pointer;

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
  }
`;
