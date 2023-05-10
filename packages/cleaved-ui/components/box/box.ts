import styled from "styled-components";

import { SPACING } from "../../theme";

import { boxBase } from "./box-base";

export const Box = styled.div`
  ${boxBase}
  margin-bottom: ${SPACING.MEDIUM};
  padding: ${SPACING.MEDIUM};
`;
