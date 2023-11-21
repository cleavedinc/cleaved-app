import React from "react";
import styled from "styled-components";
import { MdStrikethroughS } from "react-icons/md";
import { BaseIconType } from "./types";

export type FormatStrikethroughSProps = BaseIconType;

export const FormatStrikethroughSComponent = ({ className }: FormatStrikethroughSProps): JSX.Element => (
  <MdStrikethroughS className={className} />
);

export const FormatStrikethroughSIcon = styled(FormatStrikethroughSComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
