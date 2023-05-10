import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledDot = styled.div`
  margin: 0;
`;

export const SeparatorDot: FunctionComponent = () => {
  return <StyledDot>·</StyledDot>;
};
