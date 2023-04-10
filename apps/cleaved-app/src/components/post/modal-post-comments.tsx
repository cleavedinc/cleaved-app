import React, { FunctionComponent, ReactNode, useContext } from "react";
import styled from "styled-components";
import { Portal } from "react-portal";

import {
  BORDERS,
  COLORS,
  FONT_SIZES,
  mediaQueries,
  OnOutsideClick,
  RADIUS,
  ScrollLock,
  SHADOWS,
  SPACING,
} from "@cleaved/ui";

import { PostCommentAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { CommentForm } from "../../forms";
import { useTranslator } from "../../hooks";

type ModalPostCommentsBackgroundProps = {
  backgroundColor?: string;
};

type ModalPostCommentsHeaderProps = ModalPostCommentsBackgroundProps & {
  hidden: boolean;
  title?: string;
};

type ModalPostCommentsProps = ModalPostCommentsBackgroundProps & {
  children: ReactNode;
  forceOpen?: boolean;
  onCommentPostedTriggerGetComments: () => void;
  onCloseRequested?: () => void;
  open: boolean;
  postOrPostReplyId: string;
  title?: string;
  useOnOutsideClick?: boolean;
};

const StyledCommentForm = styled(CommentForm)``;

const StyledContentWrapper = styled.div`
  min-height: 100px;
  max-height: 550px;
  overflow-y: auto;
  padding: 0 ${SPACING.MEDIUM};
`;

const StyledModalPostCommentsContentWrapper = styled.div<ModalPostCommentsBackgroundProps>`
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
    max-height: calc(100% - 80px);
    top: 5%;
    transform: translate(-50%, 0%);
    width: 550px;
  }
`;

const StyledModalPostCommentsHeaderWrapper = styled.div<ModalPostCommentsBackgroundProps>`
  align-items: center;
  border-bottom: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  justify-content: center;
  margin-bottom: ${SPACING.MEDIUM};
  padding: ${SPACING.MEDIUM_SMALL} ${SPACING.MEDIUM} ${SPACING.SMALL};
  position: sticky;
  top: 0;
`;

const StyledModalPostCommentsTitle = styled.div`
  font-size: ${FONT_SIZES.LARGE};
`;

const StyledModalPostCommentsWrapper = styled.div`
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

const StyledOnOutsideClick = styled(OnOutsideClick)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledPostCommentFormWrapper = styled.div`
  border-top: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  margin-top: auto;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
`;

const StyledScrollLock = styled(ScrollLock)`
  display: flex;
`;

const ModalPostCommentsHeader: FunctionComponent<ModalPostCommentsHeaderProps> = ({ hidden, title }) => {
  const { t } = useTranslator();

  if (hidden) {
    return null;
  }

  return (
    <StyledModalPostCommentsHeaderWrapper>
      <StyledModalPostCommentsTitle>{`${title}'s ${t("post.post")}`}</StyledModalPostCommentsTitle>
    </StyledModalPostCommentsHeaderWrapper>
  );
};

export const ModalPostComments: FunctionComponent<ModalPostCommentsProps> = ({
  children,
  forceOpen = false,
  onCloseRequested,
  onCommentPostedTriggerGetComments,
  open,
  postOrPostReplyId,
  title,
  useOnOutsideClick = true,
}) => {
  const { accountData } = useContext(AccountContext);

  if (!open) {
    return null;
  }

  const content = (
    <>
      <ModalPostCommentsHeader hidden={forceOpen} title={title} />
      <StyledContentWrapper>{children}</StyledContentWrapper>
      <StyledPostCommentFormWrapper>
        <PostCommentAvatar account={accountData} />

        <StyledCommentForm
          postOrPostReplyId={postOrPostReplyId}
          onCommentPostedTriggerGetComments={onCommentPostedTriggerGetComments}
        />
      </StyledPostCommentFormWrapper>
    </>
  );

  return (
    <Portal>
      <StyledModalPostCommentsWrapper>
        <StyledModalPostCommentsContentWrapper>
          <StyledScrollLock>
            {useOnOutsideClick && onCloseRequested ? (
              <StyledOnOutsideClick onOutsideClick={onCloseRequested}>{content}</StyledOnOutsideClick>
            ) : (
              content
            )}
          </StyledScrollLock>
        </StyledModalPostCommentsContentWrapper>
      </StyledModalPostCommentsWrapper>
    </Portal>
  );
};
