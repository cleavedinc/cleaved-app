import React from "react";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { BaseIconType } from "./types";

export type TrashProps = BaseIconType;

export const TrashIconComponent = ({ className }: TrashProps): JSX.Element => <FiTrash2 className={className} />;

export const TrashIcon = styled(TrashIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
