import React, { FunctionComponent, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { StyledTooltipWhite } from "@cleaved/ui";

import { StyledPostProjectFooterButtonButton } from "../../components";
import { PostsContext } from "../../contexts";
import { PostProjectSetReactionMutation, PostReactionType } from "../../generated-types/graphql";
import { POST_PROJECT_SET_REACTION } from "../../gql-mutations";
import { useRouteParams } from "../../hooks";

import { ActivePostReaction } from "./active-post-reaction";
import { handleSetPostReaction } from "./handle-set-post-reaction";
import { ReactionSelections } from "./reaction-selections";

type PostReactionsProps = {
  myReaction: PostReactionType;
  postId: string;
};

const StyledTooltipWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
`;

export const PostReactions: FunctionComponent<PostReactionsProps> = (props) => {
  const { myReaction, postId } = props;
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;

  const [postProjectSetReaction] = useMutation<PostProjectSetReactionMutation>(POST_PROJECT_SET_REACTION, {
    onError: (error) => {
      logQueryError(error);
    },
    onCompleted: () => {
      if (postProjectSeekRefetch) {
        postProjectSeekRefetch();
      }
    },
  });

  return (
    <StyledTooltipWrapper>
      <StyledTooltipWhite
        allowHTML
        delay={[500, 300]}
        interactive
        tooltip={<ReactionSelections postId={postId} postProjectSetReaction={postProjectSetReaction} />}
      >
        <StyledPostProjectFooterButtonButton
          onClick={() => handleSetPostReaction(myReaction, organizationId, postId, postProjectSetReaction)}
          type="button"
        >
          <ActivePostReaction myReaction={myReaction} />
        </StyledPostProjectFooterButtonButton>
      </StyledTooltipWhite>
    </StyledTooltipWrapper>
  );
};
