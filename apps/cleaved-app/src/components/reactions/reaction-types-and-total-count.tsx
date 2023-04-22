import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { COLORS, CelebrationIcon, FavoriteIcon, RADIUS, ThumbUpIcon } from "@cleaved/ui";

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

const StyledReactionWrapper = styled.div`
  display: flex;
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
    <>
      <StyledReactionWrapper>
        {reactionsExpressed?.map((reaction, index) => handleReactionTypes(index, reaction))}
      </StyledReactionWrapper>

      {reactionTotalCount && reactionTotalCount !== "0" && (
        <StyledReactionsCount>{reactionTotalCount}</StyledReactionsCount>
      )}
    </>
  );
};
