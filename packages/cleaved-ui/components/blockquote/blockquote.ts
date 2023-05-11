import { css } from "styled-components";

import { BORDERS, RADIUS, SPACING } from "../../theme";

export const blockquote = css`
  background-color: ${({ theme }) => theme.colors.body_backgroundColor};
  border-left: ${BORDERS.SOLID_5PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.SMALL};
  color: ${({ theme }) => theme.colors.baseText_color};
  margin-bottom: ${SPACING.MEDIUM};
  padding: ${SPACING.MEDIUM};
`;
