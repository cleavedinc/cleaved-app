import React from "react";
import styled from "styled-components";
import { MdFormatUnderlined } from "react-icons/md";
import { BaseIconType } from "./types";

export type FormatUnderlinedProps = BaseIconType;

export const FormatUnderlinedComponent = ({ className }: FormatUnderlinedProps): JSX.Element => (
  <MdFormatUnderlined className={className} />
);

export const FormatUnderlinedIcon = styled(FormatUnderlinedComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
