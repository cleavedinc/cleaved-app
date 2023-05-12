import { css } from "styled-components";

import { RADIUS } from "../../theme";

export const scrollbarThumb = css`
  border-radius: ${RADIUS.MEDIUM};
  box-shadow: inset 0 0 50px ${({ theme }) => theme.colors.baseIcon_color};
`;
