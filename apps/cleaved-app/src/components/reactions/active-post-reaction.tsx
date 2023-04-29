import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

import { CelebrationIcon, FavoriteIcon, SPACING_PX, ThumbUpIcon, ThumbUpOutlineIcon } from "@cleaved/ui";
import { PostReactionType } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";

type PostReactionProps = {
  myReaction: PostReactionType;
};

const StyledReactionText = styled.div`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledLikeText = styled.div`
  color: ${({ theme }) => theme.colors.iconlikeColor};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledLoveText = styled.div`
  color: ${({ theme }) => theme.colors.iconLoveColor};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledCelebrateText = styled.div`
  color: ${({ theme }) => theme.colors.iconCelebrateColor};
  margin-left: ${SPACING_PX.ONE};
`;

export const ActivePostReaction: FunctionComponent<PostReactionProps> = (props) => {
  const { myReaction } = props;
  const theme = useTheme();
  const { t } = useTranslator();

  // eslint-disable-next-line
  const handleReactionType = (reactionType: PostReactionType, t: any): React.ReactNode => {
    switch (reactionType) {
      case PostReactionType.Like:
        return (
          <>
            <ThumbUpIcon color={theme.colors.iconlikeColor} iconSize="19px" />
            <StyledLikeText>{t("reactions.like")}</StyledLikeText>
          </>
        );
        break;
      case PostReactionType.Love:
        return (
          <>
            <FavoriteIcon color={theme.colors.iconLoveColor} iconSize="19px" />
            <StyledLoveText>{t("reactions.love")}</StyledLoveText>
          </>
        );
        break;
      case PostReactionType.Celebrate:
        return (
          <>
            <CelebrationIcon color={theme.colors.iconCelebrateColor} iconSize="19px" />
            <StyledCelebrateText>{t("reactions.celebrate")}</StyledCelebrateText>
          </>
        );
        break;
      case PostReactionType.NoReaction:
      default:
        return (
          <>
            <ThumbUpOutlineIcon color={theme.colors.iconLikeInactiveColor} iconSize="19px" />
            <StyledReactionText>{t("reactions.noReaction")}</StyledReactionText>
          </>
        );
    }
  };

  return <>{handleReactionType(myReaction, t)}</>;
};
