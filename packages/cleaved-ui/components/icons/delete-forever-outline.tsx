import React from "react";
import styled from "styled-components";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BaseIconType } from "./types";

export type DeleteForeverOutlineProps = BaseIconType;

export const DeleteForeverOutlineIconComponent = ({ className }: DeleteForeverOutlineProps): JSX.Element => (
  <MdOutlineDeleteForever className={className} />
);

export const DeleteForeverOutlineIcon = styled(DeleteForeverOutlineIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
