import React from "react";
import styled from "styled-components";
import { MdThumbUp } from "react-icons/md";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme";

export type ThumbUpProps = BaseIconType;

export const ThumbUpComponent = ({ className }: ThumbUpProps): JSX.Element => <MdThumbUp className={className} />;

export const ThumbUpIcon = styled(ThumbUpComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
