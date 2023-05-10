import styled from "styled-components";

import { RADIUS } from "../../theme";

import { Tooltip } from "./tooltip";

export const StyledTooltipDark = styled(Tooltip)`
  color: ${({ theme }) => theme.colors.baseTextAlt_color};
  background-color: ${({ theme }) => theme.colors.baseLogo};
  border-radius: ${RADIUS.PILL};
  padding: 3px 10px;
`;
