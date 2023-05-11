import { css } from "styled-components";

import { FONT_SIZES, SPACING } from "../../theme";

export const blockquoteBefore = css`
  color: ${({ theme }) => theme.borders.primary_color};
  content: '"';
  font-size: ${FONT_SIZES.XXXXLARGE};
  line-height: 0;
  margin-right: ${SPACING.SMALL};
  vertical-align: -0.4em;
`;
