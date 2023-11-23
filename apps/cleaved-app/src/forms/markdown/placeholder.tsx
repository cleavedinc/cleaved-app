import React, { FunctionComponent } from "react";
import styled from "styled-components";

type PlaceholderProps = {
  placeholderText: string | undefined;
};

const StyledPlaceholder = styled.div`
  color: ${({ theme }) => theme.colors.basePlaceholderText_color};
  display: inline-block;
  font-style: initial;
  left: 8px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  text-overflow: ellipsis;
  top: 8px;
  user-select: none;
`;

export const Placeholder: FunctionComponent<PlaceholderProps> = (props) => {
  const { placeholderText } = props;
  return <StyledPlaceholder>{placeholderText}</StyledPlaceholder>;
};
