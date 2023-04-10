import styled from "styled-components";

import { COLORS, FONT_SIZES, SPACING_PX } from "../../theme";

export const StyledFormFieldError = styled.span.attrs(() => ({
  "data-error": true,
}))`
  color: ${COLORS.RED_500};
  font-size: ${FONT_SIZES.XSMALL};
  min-height: ${SPACING_PX.THREE};
`;
