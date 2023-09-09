import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { removeDefaultButtonStyles, SPACING, StyledTooltipWhite } from "@cleaved/ui";

import { PostProjectSetReactionMutation, PostReactionType } from "../../generated-types/graphql";
import { POST_PROJECT_SET_REACTION } from "../../gql-mutations";
import { useRouteParams } from "../../hooks";

import { ActiveCommentReaction, handleSetPostReaction, ReactionSelections } from "../reactions";

type CommentReactionsProps = {
  activeReaction: PostReactionType;
  postId: string;
  postProjectRepliesDataRefetch?: () => void;
};

type StyledCommentFooterButtonButtonProps = Pick<CommentReactionsProps, "activeReaction">;

const StyledCommentFooterButtonButton = styled.button<StyledCommentFooterButtonButtonProps>`
  ${removeDefaultButtonStyles}
  margin-right: ${SPACING.SMALL};

  &:hover {
    text-decoration: underline;
  }
`;

const StyledTooltipWrapper = styled.div`
  display: flex;
`;

export const CommentReactions: FunctionComponent<CommentReactionsProps> = (props) => {
  const { activeReaction, postId, postProjectRepliesDataRefetch } = props;
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;

  const [setPostProjectSetReaction] = useMutation<PostProjectSetReactionMutation>(POST_PROJECT_SET_REACTION, {
    onError: (error) => {
      logQueryError(error);
    },
    onCompleted: () => {
      if (postProjectRepliesDataRefetch) {
        postProjectRepliesDataRefetch();
      }
    },
  });

  return (
    <StyledTooltipWrapper>
      <StyledTooltipWhite
        allowHTML
        delay={[500, 300]}
        interactive
        tooltip={<ReactionSelections postId={postId} postProjectSetReaction={setPostProjectSetReaction} />}
      >
        <StyledCommentFooterButtonButton
          activeReaction={activeReaction}
          onClick={() => handleSetPostReaction(activeReaction, organizationId, postId, setPostProjectSetReaction)}
          type="button"
        >
          <ActiveCommentReaction activeReaction={activeReaction} />
        </StyledCommentFooterButtonButton>
      </StyledTooltipWhite>
    </StyledTooltipWrapper>
  );
};
