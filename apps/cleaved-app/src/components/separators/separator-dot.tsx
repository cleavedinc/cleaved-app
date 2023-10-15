import React, { FunctionComponent } from "react";
import styled from "styled-components";

type SeparatorDotProps = {
  className?: string;
};

const StyledDot = styled.div`
  margin: 0;
`;

export const SeparatorDot: FunctionComponent<SeparatorDotProps> = (props) => {
  const { className } = props;

  return <StyledDot className={className}>·</StyledDot>;
};
