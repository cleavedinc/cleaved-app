import styled from "styled-components";

import { SPACING } from "../../theme";

import { boxBase } from "./box-base";

export const BoxNoPadding = styled.div`
  ${boxBase}
  margin-bottom: ${SPACING.MEDIUM};
`;
