import React from "react";
import styled from "styled-components";
import { FiImage } from "react-icons/fi";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme/colors";

export type ImageIconProps = BaseIconType;

export const ImageIconComponent = ({ className }: ImageIconProps): JSX.Element => <FiImage className={className} />;

export const ImageIcon = styled(ImageIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
