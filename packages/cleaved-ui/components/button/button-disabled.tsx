import styled from "styled-components";
import { COLORS } from "../../theme";

import { buttonBase } from "./button-base";

export const ButtonDisabled = styled.button`
  ${buttonBase}
  background-color: ${COLORS.GRAY_100};
  border: none;
  color: ${COLORS.GRAY_100};
  cursor: not-allowed;
  pointer-events: none;
`;
