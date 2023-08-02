import styled from "styled-components";

import { FONT_SIZES, SPACING_PX } from "../../theme";

export const StyledFormFieldError = styled.span.attrs(() => ({
  "data-error": true,
}))`
  color: ${({ theme }) => theme.colors.baseAlert_color};
  font-size: ${FONT_SIZES.XSMALL};
  min-height: ${SPACING_PX.THREE};
`;
