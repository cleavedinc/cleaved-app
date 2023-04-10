import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { SPACING_PX } from "@cleaved/ui";

const StyledDot = styled.div`
  margin: 0 ${SPACING_PX.ONE};
`;

export const SeparatorDot: FunctionComponent = () => {
  return <StyledDot>·</StyledDot>;
};
