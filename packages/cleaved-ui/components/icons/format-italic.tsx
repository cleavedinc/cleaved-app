import React from "react";
import styled from "styled-components";
import { MdFormatItalic } from "react-icons/md";
import { BaseIconType } from "./types";

export type FormatItalicProps = BaseIconType;

export const FormatItalicComponent = ({ className }: FormatItalicProps): JSX.Element => (
  <MdFormatItalic className={className} />
);

export const FormatItalicIcon = styled(FormatItalicComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
