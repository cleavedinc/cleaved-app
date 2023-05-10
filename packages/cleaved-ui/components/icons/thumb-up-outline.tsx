import React from "react";
import styled from "styled-components";
import { MdThumbUpOffAlt } from "react-icons/md";
import { BaseIconType } from "./types";

export type ThumbUpOutlineProps = BaseIconType;

export const ThumbUpOutlineComponent = ({ className }: ThumbUpOutlineProps): JSX.Element => (
  <MdThumbUpOffAlt className={className} />
);

export const ThumbUpOutlineIcon = styled(ThumbUpOutlineComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
