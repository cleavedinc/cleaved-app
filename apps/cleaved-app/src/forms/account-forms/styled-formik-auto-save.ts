import styled from "styled-components";

import { COLORS, FONT_SIZES } from "@cleaved/ui";
import { FormikAutoSave } from "@cleaved/helpers";

export const StyledFormikAutoSave = styled(FormikAutoSave)`
  font-size: ${FONT_SIZES.SMALL};
  color: ${COLORS.GREEN_500};
`;
