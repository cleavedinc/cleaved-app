import { css } from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS, SPACING } from "@cleaved/ui";

export const inputFieldStyles = css`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
  outline: none;
  padding: ${SPACING.MEDIUM_SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;
