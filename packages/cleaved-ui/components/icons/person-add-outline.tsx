import React from "react";
import styled from "styled-components";
import { MdOutlinePersonAdd } from "react-icons/md";
import { BaseIconType } from "./types";

export type PersonAddOutlineProps = BaseIconType;

export const PersonAddOutlineComponent = ({ className }: PersonAddOutlineProps): JSX.Element => (
  <MdOutlinePersonAdd className={className} />
);

export const PersonAddOutlineIcon = styled(PersonAddOutlineComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
