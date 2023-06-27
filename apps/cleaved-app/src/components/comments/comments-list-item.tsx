import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

import { SPACING } from "@cleaved/ui";

import { PostCommentAvatar } from "../../components";
import { CommentForm } from "../../forms";
import { OrgPermissionLevel, PostProjectRepliesQuery } from "../../generated-types/graphql";
import { useFindMyAccount } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { Comment } from "../comments/comment";
import { CommentsList } from "../comments/comments-list";

type CommentsListItemProps = {
  commentLevel: number;
  postProjectRepliesDataRefetch?: () => void;
  postReply: PostProjectRepliesQuery["postProjectReplies"][0];
};

const StyledCommentWrapper = styled.div`
  display: flex;
`;

const StyledCommentAndRepliesWrapper = styled.div``;

const StyledPostCommentFormWrapper = styled.div`
  display: flex;
  margin: ${SPACING.SMALL} 0 ${SPACING.SMALL} 50px;
`;

const StyledRepliesListWrapper = styled.div`
  margin-left: 50px;
`;

export const CommentsListItem: FunctionComponent<CommentsListItemProps> = (props) => {
  const { commentLevel, postProjectRepliesDataRefetch, postReply } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const accountQuery = useFindMyAccount();
  const [isCommentRepliesVisible, setIsCommentRepliesVisible] = useState(false);
  const [triggerGetReplies, setTriggerGetReplies] = useState(0);

  return (
    <StyledCommentAndRepliesWrapper key={postReply.id}>
      <StyledCommentWrapper>
        <PostCommentAvatar account={postReply.account} />

        <Comment
          account={postReply.account}
          commentLevel={commentLevel}
          postProjectRepliesDataRefetch={postProjectRepliesDataRefetch}
          reply={postReply}
          setIsCommentRepliesVisible={setIsCommentRepliesVisible}
        />
      </StyledCommentWrapper>

      {/* recurrsive list of replies */}
      {postReply.initialReplies && (
        <StyledRepliesListWrapper>
          <CommentsList
            commentLevel={commentLevel + 1}
            commentRepliesCount={postReply.repliesCount}
            parentPostId={postReply.id}
            triggerGetComments={triggerGetReplies}
          />
        </StyledRepliesListWrapper>
      )}

      {hasPermission && isCommentRepliesVisible && (
        <StyledPostCommentFormWrapper>
          <PostCommentAvatar account={accountQuery.data?.findMyAccount} />
          <CommentForm
            postOrPostReplyId={postReply.id}
            onCommentPostedTriggerGetComments={() => setTriggerGetReplies(triggerGetReplies + 1)}
            setIsCommentRepliesVisible={setIsCommentRepliesVisible}
          />
        </StyledPostCommentFormWrapper>
      )}
    </StyledCommentAndRepliesWrapper>
  );
};
