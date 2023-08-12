import styled from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS, SPACING } from "../../theme";

import { Tooltip } from "./tooltip";

export const StyledTooltipWhite = styled(Tooltip)`
  color: ${({ theme }) => theme.colors.baseText_color};
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.PILL};
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
`;
