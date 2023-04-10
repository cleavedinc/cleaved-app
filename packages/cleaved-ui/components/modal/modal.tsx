import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Portal } from "react-portal";

import { CircleEditButtonSmall } from "../button";
import { CloseIcon } from "../icons";
import { COLORS, FONT_SIZES, mediaQueries, RADIUS, SPACING } from "../../theme";
import { OnOutsideClick } from "../on-outside-click";
import { ScrollLock } from "../scroll-lock";

type ModalBackgroundProps = {
  backgroundColor?: string;
};

type ModalHeaderProps = ModalBackgroundProps & {
  hidden: boolean;
  title?: string;
  onCloseRequested?: () => void;
};

type ModalProps = ModalBackgroundProps & {
  children: ReactNode;
  forceOpen?: boolean;
  onCloseRequested?: () => void;
  open: boolean;
  title?: string;
  useOnOutsideClick?: boolean;
};

const StyledContentWrapper = styled.div`
  padding: 0 ${SPACING.MEDIUM};
  ${mediaQueries.SM} {
    padding: 0 ${SPACING.LARGE} ${SPACING.XLARGE};
  }
`;

const StyledModalCloseButton = styled(CircleEditButtonSmall)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 14;
  margin: 0 0 0 auto;
  padding: 0;
`;

const StyledModalContentWrapper = styled.div<ModalBackgroundProps>`
  background-color: ${COLORS.WHITE};
  height: 100%;
  max-height: 100%;
  min-width: auto;
  position: absolute;
  width: 100%;

  ${mediaQueries.SM} {
    border-radius: ${RADIUS.MEDIUM};
    height: auto;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0%);
    width: 550px;
  }
`;

const StyledModalHeaderWrapper = styled.div<ModalBackgroundProps>`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
  padding: ${SPACING.MEDIUM} ${SPACING.MEDIUM_LARGE} ${SPACING.MEDIUM} ${SPACING.LARGE};
  position: sticky;
  top: 0;
`;

const StyledModalTitle = styled.div`
  font-size: ${FONT_SIZES.XLARGE};
`;

const StyledModalWrapper = styled.div`
  align-items: center;
  background-color: ${COLORS.BLACK_ALPHA_6};
  bottom: 0;
  display: flex;
  flex: 1;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
`;

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({ hidden, onCloseRequested, title }) => {
  if (hidden) {
    return null;
  }

  return (
    <StyledModalHeaderWrapper>
      <StyledModalTitle>{title}</StyledModalTitle>
      <StyledModalCloseButton onClick={onCloseRequested}>
        <CloseIcon color={COLORS.GRAY_500} iconSize={FONT_SIZES.LARGE} />
      </StyledModalCloseButton>
    </StyledModalHeaderWrapper>
  );
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  forceOpen = false,
  onCloseRequested,
  open,
  title,
  useOnOutsideClick = true,
}) => {
  if (!open) {
    return null;
  }

  const content = (
    <>
      <ModalHeader hidden={forceOpen} onCloseRequested={onCloseRequested} title={title} />
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </>
  );

  return (
    <Portal>
      <StyledModalWrapper>
        <StyledModalContentWrapper>
          <ScrollLock>
            {useOnOutsideClick && onCloseRequested ? (
              <OnOutsideClick onOutsideClick={onCloseRequested}>{content}</OnOutsideClick>
            ) : (
              content
            )}
          </ScrollLock>
        </StyledModalContentWrapper>
      </StyledModalWrapper>
    </Portal>
  );
};
