import { css } from "styled-components";

import { BORDERS } from "../../theme";

export const buttonSecondaryBase = css`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  color: ${({ theme }) => theme.colors.baseText_color};

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
    color: ${({ theme }) => theme.colors.baseText_color};
  }
`;
