import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { FONT_SIZES, mediaQueries, SPACING } from "../../theme";

type NavigationButtonProps = {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
};

const NavigationButtonContainer = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  position: relative;

  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }

  &.active {
    &::before {
      width: 100%;
    }
  }
`;

export const NavigationButtonLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: inherit;
  font-size: ${FONT_SIZES.XSMALL};

  ${mediaQueries.SM} {
    font-size: ${FONT_SIZES.SMALL};
  }
`;

export const NavigationButton: FunctionComponent<NavigationButtonProps> = ({ children, isActive }) => (
  <NavigationButtonContainer className={isActive ? "active" : ""}>{children}</NavigationButtonContainer>
);
