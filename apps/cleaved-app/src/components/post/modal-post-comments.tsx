import React, { FunctionComponent, ReactNode, useContext } from "react";
import styled, { useTheme } from "styled-components";
import { Portal } from "react-portal";

import {
  BORDERS,
  CloseIcon,
  CircleEditButtonSmall,
  FONT_SIZES,
  mediaQueries,
  OnOutsideClick,
  RADIUS,
  ScrollLock,
  SPACING,
} from "@cleaved/ui";

import { PostCommentAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { CommentForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

type ModalPostCommentsBackgroundProps = {
  backgroundColor?: string;
};

type ModalPostCommentsHeaderProps = ModalPostCommentsBackgroundProps & {
  hidden: boolean;
  onCloseRequested?: () => void;
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

const StyledCircleEditButtonSmall = styled(CircleEditButtonSmall)`
  margin-left: auto;
`;

const StyledCommentForm = styled(CommentForm)``;

const StyledContentWrapper = styled.div`
  min-height: 100px;
  overflow-y: auto;
  padding: 0 ${SPACING.MEDIUM};

  ${mediaQueries.SM} {
    max-height: 550px;
  }
`;

const StyledModalPostCommentsContentWrapper = styled.div<ModalPostCommentsBackgroundProps>`
  background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
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
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
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
  background-color: ${({ theme }) => theme.colors.baseOverlay_backgroundColor};
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
  border-top: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
  margin-top: auto;
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
`;

const StyledScrollLock = styled(ScrollLock)`
  display: flex;
`;

const ModalPostCommentsHeader: FunctionComponent<ModalPostCommentsHeaderProps> = ({
  hidden,
  onCloseRequested,
  title,
}) => {
  const theme = useTheme();
  const { t } = useTranslator();

  if (hidden) {
    return null;
  }

  return (
    <StyledModalPostCommentsHeaderWrapper>
      <StyledModalPostCommentsTitle>{`${title}'s ${t("post.post")}`}</StyledModalPostCommentsTitle>
      <StyledCircleEditButtonSmall onClick={() => onCloseRequested && onCloseRequested()} type="button">
        <CloseIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
      </StyledCircleEditButtonSmall>
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
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { accountData } = useContext(AccountContext);

  if (!open) {
    return null;
  }

  const content = (
    <>
      <ModalPostCommentsHeader hidden={forceOpen} onCloseRequested={onCloseRequested} title={title} />
      <StyledContentWrapper>{children}</StyledContentWrapper>
      {hasPermission && (
        <StyledPostCommentFormWrapper>
          <PostCommentAvatar account={accountData} />

          <StyledCommentForm
            postOrPostReplyId={postOrPostReplyId}
            onCommentPostedTriggerGetComments={onCommentPostedTriggerGetComments}
          />
        </StyledPostCommentFormWrapper>
      )}
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
