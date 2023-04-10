import styled from "styled-components";

import { COLORS, RADIUS } from "../../theme";

import { Tooltip } from "./tooltip";

export const StyledTooltipDark = styled(Tooltip)`
  color: ${COLORS.WHITE};
  background-color: ${COLORS.GRAY_900};
  border-radius: ${RADIUS.PILL};
  padding: 3px 10px;
`;
