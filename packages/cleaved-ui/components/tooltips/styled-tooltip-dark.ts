import styled from "styled-components";

import { FONT_SIZES, RADIUS, SPACING } from "../../theme";

import { Tooltip } from "./tooltip";

export const StyledTooltipDark = styled(Tooltip)`
  color: ${({ theme }) => theme.colors.baseTextAlt_color};
  background-color: ${({ theme }) => theme.colors.baseLogo};
  border-radius: ${RADIUS.PILL};
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
`;
