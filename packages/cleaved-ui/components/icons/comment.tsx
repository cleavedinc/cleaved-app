import React from "react";
import styled from "styled-components";
import { FiMessageSquare } from "react-icons/fi";
import { BaseIconType } from "./types";

export type CommentIconProps = BaseIconType;

export const CommentIconComponent = ({ className }: CommentIconProps): JSX.Element => (
  <FiMessageSquare className={className} />
);

export const CommentIcon = styled(CommentIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
