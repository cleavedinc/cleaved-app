import styled from "styled-components";

import { FONT_SIZES } from "@cleaved/ui";
import { FormikAutoSave } from "@cleaved/helpers";

export const StyledFormikAutoSave = styled(FormikAutoSave)`
  font-size: ${FONT_SIZES.SMALL};
  color: ${({ theme }) => theme.colors.baseApproved_color};
`;
