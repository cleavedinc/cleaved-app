import styled, { css } from "styled-components";

import { FONT_SIZES, SPACING_PX } from "@cleaved/ui";

export const lableStyles = css`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING_PX.ONE};
`;

export const StyledProjectFormLabel = styled.label`
  ${lableStyles};
`;
