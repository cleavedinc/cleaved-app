import React from "react";
import styled from "styled-components";
import { MdFormatBold } from "react-icons/md";
import { BaseIconType } from "./types";

export type FormatBoldProps = BaseIconType;

export const FormatBoldComponent = ({ className }: FormatBoldProps): JSX.Element => (
  <MdFormatBold className={className} />
);

export const FormatBoldIcon = styled(FormatBoldComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
