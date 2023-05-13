import React from "react";
import styled from "styled-components";
import { FiMove } from "react-icons/fi";
import { BaseIconType } from "./types";

export type MoveIconProps = BaseIconType;

export const MoveIconComponent = ({ className }: MoveIconProps): JSX.Element => <FiMove className={className} />;

export const MoveIcon = styled(MoveIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
