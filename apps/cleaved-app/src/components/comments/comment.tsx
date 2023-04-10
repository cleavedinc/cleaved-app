import React, { Dispatch, FunctionComponent } from "react";
import styled from "styled-components";

import dayjs from "dayjs";

import { getTimeSinceDate } from "@cleaved/helpers";
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  RADIUS,
  removeDefaultButtonStyles,
  SPACING,
  SPACING_PX,
  StyledTooltipDark,
} from "@cleaved/ui";

import { AccountPublicView, ProjectPost } from "../../generated-types/graphql";
import { useNavigateToProfessionalProfile, useTranslator } from "../../hooks";
import { ReactionTypesAndTotalCount } from "../reactions";
import { SeparatorDot } from "../separators";

import { CommentReactions } from "./comment-reactions";

type CommentProps = {
  account: AccountPublicView;
  commentLevel: number;
  postProjectRepliesDataRefetch?: () => void;
  reply: ProjectPost;
  setIsCommentRepliesVisible: Dispatch<React.SetStateAction<boolean>>;
};

const StyledCommentDateTime = styled.div`
  color: ${COLORS.GRAY_500};
  margin-left: auto;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledCommentFooterWrapper = styled.div`
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledCommentBody = styled.div`
  background-color: ${COLORS.GRAY_50};
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
  color: ${COLORS.GRAY_500};
  &:hover {
    text-decoration: underline;
  }
`;

const StyledPipeSeparator = styled.div`
  color: ${COLORS.GRAY_500};
  margin: 0 ${SPACING.SMALL};
`;

const PostCommentHeaderDataWrapper = styled.div`
  flex-direction: column;
`;

const PostCommentHeaderWrapper = styled.div`
  align-items: center;
  color: ${COLORS.GRAY_500};
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
  padding-right: ${SPACING.LARGE};
`;

const PostCommentProfessionalName = styled.a`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
    text-decoration: underline;
  }
`;

export const Comment: FunctionComponent<CommentProps> = (props) => {
  const { account, commentLevel, postProjectRepliesDataRefetch, reply, setIsCommentRepliesVisible } = props;
  const { t } = useTranslator();
  const { professionalProfilePath } = useNavigateToProfessionalProfile(account?.professionals[0]?.id);

  return (
    <StyledCommentWrapper>
      <StyledCommentBody>
        <PostCommentHeaderWrapper>
          <PostCommentHeaderDataWrapper>
            <PostCommentProfessionalName href={professionalProfilePath}>
              {account?.firstName} {account?.lastName}
            </PostCommentProfessionalName>
            {account?.professionals[0]?.jobTitle && <div>{account?.professionals[0]?.jobTitle}</div>}
          </PostCommentHeaderDataWrapper>
        </PostCommentHeaderWrapper>

        <StyledCommentBodyText>{reply.body}</StyledCommentBodyText>
      </StyledCommentBody>

      <StyledCommentFooterWrapper>
        <CommentReactions
          activeReaction={reply.myReaction}
          postId={reply.id}
          postProjectRepliesDataRefetch={postProjectRepliesDataRefetch}
        />

        <SeparatorDot />

        <ReactionTypesAndTotalCount
          reactionsExpressed={reply.reactionsExpressed}
          reactionTotalCount={reply.reactionTotalCount}
        />

        {commentLevel <= 1 && (
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
