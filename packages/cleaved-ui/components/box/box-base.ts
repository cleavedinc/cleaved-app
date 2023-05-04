import { css } from "styled-components";
import { BORDERS, RADIUS } from "../../theme";

export const boxBase = css`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
`;
