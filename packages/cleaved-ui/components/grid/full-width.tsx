import styled from "styled-components";

import { boxBase } from "../box";
import { SPACING } from "../../theme";

export const FullWidth = styled.section`
  ${boxBase}
  flex: 1;
  padding: ${SPACING.XLARGE} ${SPACING.LARGE} ${SPACING.XLARGE} ${SPACING.XLARGE};
`;
