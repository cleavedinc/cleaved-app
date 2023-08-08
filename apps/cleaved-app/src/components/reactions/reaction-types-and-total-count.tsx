import React, { FunctionComponent } from "react";
import styled, { css, useTheme } from "styled-components";

import { BORDERS, CelebrationIcon, FavoriteIcon, RADIUS, SPACING, ThumbUpIcon } from "@cleaved/ui";

import { PostReactionType } from "../../generated-types/graphql";

type ReactionTypesAndtotalCountProps = {
  reactionsExpressed: PostReactionType[];
  reactionTotalCount: string;
};

const styledReactionBase = css`
  align-items: center;
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.always_white_color};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 16px;
  justify-content: center;
  width: 16px;
`;

const StyledReactionLike = styled.div`
  ${styledReactionBase}
  background-color: ${({ theme }) => theme.colors.iconlikeColor};
  z-index: 40;
`;

const StyledReactionLove = styled.div`
  ${styledReactionBase}
  background-color: ${({ theme }) => theme.colors.iconLoveColor};
  z-index: 30;

  :not(:first-child) {
    margin-left: -5px;
  }
`;

const StyledReactionCelebrate = styled.div`
  ${styledReactionBase}
  background-color: ${({ theme }) => theme.colors.iconCelebrateColor};
  z-index: 20;

  :not(:first-child) {
    margin-left: -5px;
  }
`;

const StyledReaction = styled.div`
  display: flex;
`;

const StyledReactionWrapper = styled.div`
  display: flex;
`;

const StyledReactionsCount = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  margin-left: 3px;
`;

export const ReactionTypesAndTotalCount: FunctionComponent<ReactionTypesAndtotalCountProps> = (props) => {
  const { reactionsExpressed, reactionTotalCount } = props;
  const theme = useTheme();

  const handleReactionTypes = (reactionIndex: number, reactionType: PostReactionType) => {
    switch (reactionType) {
      case PostReactionType.Like:
        return (
          <StyledReactionLike key={reactionIndex}>
            <ThumbUpIcon color={theme.colors.always_white_color} iconSize="9px" />
          </StyledReactionLike>
        );
        break;
      case PostReactionType.Love:
        return (
          <StyledReactionLove key={reactionIndex}>
            <FavoriteIcon color={theme.colors.always_white_color} iconSize="9px" />
          </StyledReactionLove>
        );
        break;
      case PostReactionType.Celebrate:
        return (
          <StyledReactionCelebrate key={reactionIndex}>
            <CelebrationIcon color={theme.colors.always_white_color} iconSize="9px" />
          </StyledReactionCelebrate>
        );
        break;
      default:
    }
    return false;
  };

  return (
    <StyledReactionWrapper>
      <StyledReaction>
        {reactionsExpressed?.map((reaction, index) => handleReactionTypes(index, reaction))}
      </StyledReaction>

      <StyledReactionsCount>{reactionTotalCount}</StyledReactionsCount>
    </StyledReactionWrapper>
  );
};
