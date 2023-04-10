import React from "react";
import styled from "styled-components";
import { MdCheck } from "react-icons/md";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme";

export type CheckProps = BaseIconType;

export const CheckComponent = ({ className }: CheckProps): JSX.Element => <MdCheck className={className} />;

export const CheckIcon = styled(CheckComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
