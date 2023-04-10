import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme";

export type PlusProps = BaseIconType;

export const PlusComponent = ({ className }: PlusProps): JSX.Element => <FiPlus className={className} />;

export const PlusIcon = styled(PlusComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
