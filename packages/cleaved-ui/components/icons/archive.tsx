import React from "react";
import styled from "styled-components";
import { FiArchive } from "react-icons/fi";
import { BaseIconType } from "./types";

export type ArchiveProps = BaseIconType;

export const ArchiveComponent = ({ className }: ArchiveProps): JSX.Element => <FiArchive className={className} />;

export const ArchiveIcon = styled(ArchiveComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
