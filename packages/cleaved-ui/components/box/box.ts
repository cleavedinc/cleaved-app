import styled, { css } from "styled-components";
import { BORDERS, COLORS, RADIUS, SPACING } from "../../theme";

export const boxBase = css`
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};
  box-shadow: 0 1px 1px ${COLORS.GRAY_100};
  padding: ${SPACING.MEDIUM};
`;

export const Box = styled.div`
  ${boxBase}
  border-radius: ${RADIUS.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
`;
