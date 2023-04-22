import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import {
  COLORS,
  CelebrationIcon,
  FavoriteIcon,
  removeDefaultButtonStyles,
  SPACING_PX,
  ThumbUpIcon,
  StyledTooltipDark,
} from "@cleaved/ui";

import { PostReactionType } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";

import { celebrateIconColor, likeIconColor, loveIconColor } from "./reaction-colors";

type PostReactionsProps = {
  postId: string;
  postProjectSetReaction: (arg: any) => void; // eslint-disable-line
};

const reactionButtonStyles = css`
  align-items: center;
  display: flex;
`;

const StyledReactionIcons = styled.button`
  ${reactionButtonStyles}
  ${removeDefaultButtonStyles}
`;

const StyledPostReactionsWrapper = styled.div`
  display: flex;
  background-color: ${COLORS.WHITE};
  margin: 0 ${SPACING_PX.ONE};
  gap: ${SPACING_PX.THREE};
`;

export const ReactionSelections: FunctionComponent<PostReactionsProps> = (props) => {
  const { postId, postProjectSetReaction } = props;
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const { t } = useTranslator();

  const reactionLikePost = () => {
    postProjectSetReaction({
      variables: {
        organizationId,
        postId,
        reactionType: PostReactionType.Like,
      },
    });
  };

  const reactionLovePost = () => {
    postProjectSetReaction({
      variables: {
        organizationId,
        postId,
        reactionType: PostReactionType.Love,
      },
    });
  };

  const reactionCelebratePost = () => {
    postProjectSetReaction({
      variables: {
        organizationId,
        postId,
        reactionType: PostReactionType.Celebrate,
      },
    });
  };

  return (
    <StyledPostReactionsWrapper>
      <StyledTooltipDark tooltip={t("reactions.like")}>
        <StyledReactionIcons onClick={() => reactionLikePost()} type="button">
          <ThumbUpIcon color={likeIconColor} iconSize="26px" />
        </StyledReactionIcons>
      </StyledTooltipDark>

      <StyledTooltipDark tooltip={t("reactions.love")}>
        <StyledReactionIcons onClick={() => reactionLovePost()} type="button">
          <FavoriteIcon color={loveIconColor} iconSize="26px" />
        </StyledReactionIcons>
      </StyledTooltipDark>

      <StyledTooltipDark tooltip={t("reactions.celebrate")}>
        <StyledReactionIcons onClick={() => reactionCelebratePost()} type="button">
          <CelebrationIcon color={celebrateIconColor} iconSize="26px" />
        </StyledReactionIcons>
      </StyledTooltipDark>
    </StyledPostReactionsWrapper>
  );
};
