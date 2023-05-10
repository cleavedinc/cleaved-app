import React from "react";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";
import { BaseIconType } from "./types";

export type UploadIconProps = BaseIconType;

export const UploadIconComponent = ({ className }: UploadIconProps): JSX.Element => <FiUpload className={className} />;

export const UploadIcon = styled(UploadIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
