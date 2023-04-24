import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { COLORS, CelebrationIcon, FavoriteIcon, RADIUS, SPACING, ThumbUpIcon } from "@cleaved/ui";

import { PostReactionType } from "../../generated-types/graphql";

import { celebrateIconColor, likeIconColor, loveIconColor } from "./reaction-colors";

type ReactionTypesAndtotalCountProps = {
  reactionsExpressed: PostReactionType[];
  reactionTotalCount: string;
};

const styledReactionBase = css`
  align-items: center;
  border: 1px solid ${COLORS.WHITE};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 16px;
  justify-content: center;
  width: 16px;
`;

const StyledReactionLike = styled.div`
  ${styledReactionBase}
  background-color: ${likeIconColor};
  z-index: 40;
`;

const StyledReactionLove = styled.div`
  ${styledReactionBase}
  background-color: ${loveIconColor};
  z-index: 30;

  :not(:first-child) {
    margin-left: -5px;
  }
`;

const StyledReactionCelebrate = styled.div`
  ${styledReactionBase}
  background-color: ${celebrateIconColor};
  z-index: 20;

  :not(:first-child) {
    margin-left: -5px;
  }
`;

const StyledReaction = styled.div``;

const StyledReactionWrapper = styled.div`
  display: flex;
  margin: ${SPACING.SMALL};
`;

const StyledReactionsCount = styled.div`
  color: ${COLORS.GRAY_500};
  margin-left: 3px;
`;

const handleReactionTypes = (reactionIndex: number, reactionType: PostReactionType) => {
  switch (reactionType) {
    case PostReactionType.Like:
      return (
        <StyledReactionLike key={reactionIndex}>
          <ThumbUpIcon color={COLORS.WHITE} iconSize="9px" />
        </StyledReactionLike>
      );
      break;
    case PostReactionType.Love:
      return (
        <StyledReactionLove key={reactionIndex}>
          <FavoriteIcon color={COLORS.WHITE} iconSize="9px" />
        </StyledReactionLove>
      );
      break;
    case PostReactionType.Celebrate:
      return (
        <StyledReactionCelebrate key={reactionIndex}>
          <CelebrationIcon color={COLORS.WHITE} iconSize="9px" />
        </StyledReactionCelebrate>
      );
      break;
    default:
  }
  return false;
};

export const ReactionTypesAndTotalCount: FunctionComponent<ReactionTypesAndtotalCountProps> = (props) => {
  const { reactionsExpressed, reactionTotalCount } = props;

  return (
    <StyledReactionWrapper>
      <StyledReaction>
        {reactionsExpressed?.map((reaction, index) => handleReactionTypes(index, reaction))}
      </StyledReaction>

      {reactionTotalCount && reactionTotalCount !== "0" && (
        <StyledReactionsCount>{reactionTotalCount}</StyledReactionsCount>
      )}
    </StyledReactionWrapper>
  );
};
