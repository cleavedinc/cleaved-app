import React from "react";
import styled from "styled-components";
import { MdCelebration } from "react-icons/md";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme";

export type CelebrationProps = BaseIconType;

export const CelebrationComponent = ({ className }: CelebrationProps): JSX.Element => (
  <MdCelebration className={className} />
);

export const CelebrationIcon = styled(CelebrationComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
