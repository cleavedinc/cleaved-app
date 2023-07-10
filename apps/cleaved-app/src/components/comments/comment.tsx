import React, { Dispatch, FunctionComponent } from "react";
import styled from "styled-components";

import dayjs from "dayjs";

import { getTimeSinceDate } from "@cleaved/helpers";
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  RADIUS,
  removeDefaultButtonStyles,
  SPACING,
  SPACING_PX,
  StyledTooltipDark,
} from "@cleaved/ui";

import { OrgPermissionLevel, PostProjectRepliesQuery } from "../../generated-types/graphql";
import { useNavigateToProfile, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { ReactionTypesAndTotalCount } from "../reactions";
import { SeparatorDot } from "../separators";

import { CommentReactions } from "./comment-reactions";

type CommentProps = {
  account: PostProjectRepliesQuery["postProjectReplies"][0]["account"];
  commentLevel: number;
  postProjectRepliesDataRefetch?: () => void;
  reply: PostProjectRepliesQuery["postProjectReplies"][0];
  setIsCommentRepliesVisible: Dispatch<React.SetStateAction<boolean>>;
};

const StyledCommentDateTime = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  margin-left: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledCommentFooterWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  min-height: 16px;
`;

const StyledCommentBody = styled.div`
  background-color: ${({ theme }) => theme.colors.body_backgroundColor};
  border-radius: ${RADIUS.MEDIUM};
  margin-bottom: ${SPACING_PX.ONE};
  padding: ${SPACING.MEDIUM};
`;

const StyledCommentBodyText = styled.div`
  white-space: pre-line;
`;

const StyledCommentWrapper = styled.div`
  flex-basis: 100%;
  margin-bottom: ${SPACING_PX.THREE};
  overflow-wrap: anywhere;
`;

const StyledCommentReplyButton = styled.button`
  ${removeDefaultButtonStyles}
  color: ${({ theme }) => theme.colors.baseSubText_color};

  &:hover {
    text-decoration: underline;
  }
`;

const StyledPipeSeparator = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  margin: 0 ${SPACING.SMALL};
`;

const PostCommentHeaderDataWrapper = styled.div`
  flex-direction: column;
`;

const PostCommentHeaderWrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.baseSubText_color};
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
  padding-right: ${SPACING.LARGE};
`;

const PostCommentProfessionalName = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${({ theme }) => theme.colors.baseTextLink_colorHover};
    text-decoration: underline;
  }
`;

const StyledReactReactionTypesAndTotalCountWrapper = styled.div`
  margin: 0 ${SPACING.SMALL} 0 ${SPACING.SMALL};
`;

export const Comment: FunctionComponent<CommentProps> = (props) => {
  const { account, commentLevel, postProjectRepliesDataRefetch, reply, setIsCommentRepliesVisible } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { profilePath } = useNavigateToProfile(account?.id);
  const { t } = useTranslator();

  return (
    <StyledCommentWrapper>
      <StyledCommentBody>
        <PostCommentHeaderWrapper>
          <PostCommentHeaderDataWrapper>
            <PostCommentProfessionalName href={profilePath}>
              {account?.firstName} {account?.lastName}
            </PostCommentProfessionalName>
            {account?.jobTitle && <div>{account?.jobTitle}</div>}
          </PostCommentHeaderDataWrapper>
        </PostCommentHeaderWrapper>

        <StyledCommentBodyText>{reply.body}</StyledCommentBodyText>
      </StyledCommentBody>

      <StyledCommentFooterWrapper>
        {hasPermission && (
          <CommentReactions
            activeReaction={reply.myReaction}
            postId={reply.id}
            postProjectRepliesDataRefetch={postProjectRepliesDataRefetch}
          />
        )}

        {reply.reactionTotalCount !== "0" && (
          <>
            {hasPermission && <SeparatorDot />}
            <StyledReactReactionTypesAndTotalCountWrapper>
              <ReactionTypesAndTotalCount
                reactionsExpressed={reply.reactionsExpressed}
                reactionTotalCount={reply.reactionTotalCount}
              />
            </StyledReactReactionTypesAndTotalCountWrapper>
          </>
        )}

        {hasPermission && commentLevel <= 1 && (
          <>
            <StyledPipeSeparator>|</StyledPipeSeparator>
            <StyledCommentReplyButton type="button" onClick={() => setIsCommentRepliesVisible(true)}>
              {t("comment.reply")}
            </StyledCommentReplyButton>
          </>
        )}
        <StyledTooltipDark tooltip={dayjs(reply.date).format("MMMM DD, YYYY")}>
          <StyledCommentDateTime>{getTimeSinceDate(reply.date)}</StyledCommentDateTime>
        </StyledTooltipDark>
      </StyledCommentFooterWrapper>
    </StyledCommentWrapper>
  );
};
