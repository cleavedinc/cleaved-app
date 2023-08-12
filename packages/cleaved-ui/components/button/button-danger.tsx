import styled from "styled-components";
import { BORDERS } from "../../theme";

import { buttonBase } from "./button-base";

export const ButtonDanger = styled.button`
  ${buttonBase}
  background-color: ${({ theme }) => theme.colors.always_red_color};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  color: ${({ theme }) => theme.colors.always_white_color};
`;
