import React from "react";
import styled from "styled-components";
import { BsFilePost } from "react-icons/bs";
import { BaseIconType } from "./types";

export type FilePostProps = BaseIconType;

export const FilePostComponent = ({ className }: FilePostProps): JSX.Element => <BsFilePost className={className} />;

export const FilePost = styled(FilePostComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
