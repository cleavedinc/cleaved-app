import styled from "styled-components";
import { BORDERS, COLORS } from "../../theme";

import { buttonBase } from "./button-base";

export const ButtonSecondary = styled.button`
  ${buttonBase}
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};

  &:hover:not([disabled]) {
    background-color: ${COLORS.GRAY_50};
  }
`;
