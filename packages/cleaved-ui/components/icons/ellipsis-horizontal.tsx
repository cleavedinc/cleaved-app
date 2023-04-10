import React from "react";
import styled from "styled-components";
import { FiMoreHorizontal } from "react-icons/fi";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme";

export type EllipsisHorizontalProps = BaseIconType;

export const EllipsisHorizontalComponent = ({ className }: EllipsisHorizontalProps): JSX.Element => (
  <FiMoreHorizontal className={className} />
);

export const EllipsisHorizontalIcon = styled(EllipsisHorizontalComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
