import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { COLORS, FONT_SIZES, mediaQueries, SPACING } from "../../theme";

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
  margin: ${SPACING.SMALL} 0;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  position: relative;

  :hover {
    background-color: ${COLORS.GRAY_50};
  }

  &.active {
    &::before {
      width: 100%;
    }
  }
`;

export const NavigationButtonLabel = styled.label`
  color: ${COLORS.BLACK};
  cursor: inherit;
  font-size: ${FONT_SIZES.XSMALL};

  ${mediaQueries.SM} {
    font-size: ${FONT_SIZES.SMALL};
  }
`;

export const NavigationButton: FunctionComponent<NavigationButtonProps> = ({ children, isActive }) => (
  <NavigationButtonContainer className={isActive ? "active" : ""}>{children}</NavigationButtonContainer>
);
