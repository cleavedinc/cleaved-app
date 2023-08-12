import React from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { BaseIconType } from "./types";

export type EditProps = BaseIconType;

export const EditComponent = ({ className }: EditProps): JSX.Element => <MdEdit className={className} />;

export const EditIcon = styled(EditComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
