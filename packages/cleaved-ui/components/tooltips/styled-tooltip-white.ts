import styled from "styled-components";

import { COLORS, RADIUS } from "../../theme";

import { Tooltip } from "./tooltip";

export const StyledTooltipWhite = styled(Tooltip)`
  color: ${COLORS.BLACK};
  background-color: ${COLORS.WHITE};
  border-radius: ${RADIUS.PILL};
  padding: 3px 10px;
`;
