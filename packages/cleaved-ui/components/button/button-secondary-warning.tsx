import styled from "styled-components";
import { BORDERS } from "../../theme";

import { buttonBase } from "./button-base";

export const ButtonSecondaryWarning = styled.button`
  ${buttonBase}
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  color: ${({ theme }) => theme.colors.baseAlert_color};
`;
