import styled from "styled-components";

import { RADIUS } from "../../theme";

import { Tooltip } from "./tooltip";

export const StyledTooltipWhite = styled(Tooltip)`
  color: ${({ theme }) => theme.colors.baseText_color};
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  border-radius: ${RADIUS.PILL};
  padding: 3px 10px;
`;
