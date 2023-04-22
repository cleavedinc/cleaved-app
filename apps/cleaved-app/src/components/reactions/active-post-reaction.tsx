import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { CelebrationIcon, COLORS, FavoriteIcon, SPACING_PX, ThumbUpIcon, ThumbUpOutlineIcon } from "@cleaved/ui";
import { PostReactionType } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";

import { celebrateIconColor, likeIconColor, likeIconInactiveColor, loveIconColor } from "./reaction-colors";

type PostReactionProps = {
  myReaction: PostReactionType;
};

const StyledReactionText = styled.div`
  color: ${COLORS.GRAY_500};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledLikeText = styled.div`
  color: ${likeIconColor};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledLoveText = styled.div`
  color: ${loveIconColor};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledCelebrateText = styled.div`
  color: ${celebrateIconColor};
  margin-left: ${SPACING_PX.ONE};
`;

// eslint-disable-next-line
const handleReactionType = (reactionType: PostReactionType, t: any): React.ReactNode => {
  switch (reactionType) {
    case PostReactionType.Like:
      return (
        <>
          <ThumbUpIcon color={likeIconColor} iconSize="19px" />
          <StyledLikeText>{t("reactions.like")}</StyledLikeText>
        </>
      );
      break;
    case PostReactionType.Love:
      return (
        <>
          <FavoriteIcon color={loveIconColor} iconSize="19px" />
          <StyledLoveText>{t("reactions.love")}</StyledLoveText>
        </>
      );
      break;
    case PostReactionType.Celebrate:
      return (
        <>
          <CelebrationIcon color={celebrateIconColor} iconSize="19px" />
          <StyledCelebrateText>{t("reactions.celebrate")}</StyledCelebrateText>
        </>
      );
      break;
    case PostReactionType.NoReaction:
    default:
      return (
        <>
          <ThumbUpOutlineIcon color={likeIconInactiveColor} iconSize="19px" />
          <StyledReactionText>{t("reactions.noReaction")}</StyledReactionText>
        </>
      );
  }
};

export const ActivePostReaction: FunctionComponent<PostReactionProps> = (props) => {
  const { myReaction } = props;
  const { t } = useTranslator();

  return <>{handleReactionType(myReaction, t)}</>;
};
