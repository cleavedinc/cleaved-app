import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BaseIconType } from "./types";
import { COLORS } from "../../theme/colors";

export type SearchIconProps = BaseIconType;

export const SearchIconComponent = ({ className }: SearchIconProps): JSX.Element => <FiSearch className={className} />;

export const SearchIcon = styled(SearchIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
`;
