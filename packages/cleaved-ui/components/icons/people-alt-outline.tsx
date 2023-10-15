import React from "react";
import styled from "styled-components";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BaseIconType } from "./types";

export type PeopleAltOutlineProps = BaseIconType;

export const PeopleAltOutlineComponent = ({ className }: PeopleAltOutlineProps): JSX.Element => (
  <MdOutlinePeopleAlt className={className} />
);

export const PeopleAltOutlineIcon = styled(PeopleAltOutlineComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
