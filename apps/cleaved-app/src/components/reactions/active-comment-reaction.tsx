import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { PostReactionType } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";

import { celebrateIconColor, likeIconColor, likeIconInactiveColor, loveIconColor } from "./reaction-colors";

type PostReactionProps = {
  activeReaction: PostReactionType;
};

const StyledReactionLikeText = styled.div`
  color: ${likeIconColor};
`;

const StyledReactionLoveText = styled.div`
  color: ${loveIconColor};
`;

const StyledReactionCelebrateText = styled.div`
  color: ${celebrateIconColor};
`;

const StyledReactionNoReactionText = styled.div`
  color: ${likeIconInactiveColor};
`;

// eslint-disable-next-line
const handleReactionType = (reactionType: PostReactionType, t: any): React.ReactNode => {
  switch (reactionType) {
    case PostReactionType.Like:
      return <StyledReactionLikeText>{t("reactions.like")}</StyledReactionLikeText>;
      break;
    case PostReactionType.Love:
      return <StyledReactionLoveText>{t("reactions.love")}</StyledReactionLoveText>;
      break;
    case PostReactionType.Celebrate:
      return <StyledReactionCelebrateText>{t("reactions.celebrate")}</StyledReactionCelebrateText>;
      break;
    case PostReactionType.NoReaction:
    default:
      return <StyledReactionNoReactionText>{t("reactions.like")}</StyledReactionNoReactionText>;
  }
};

export const ActiveCommentReaction: FunctionComponent<PostReactionProps> = (props) => {
  const { activeReaction } = props;
  const { t } = useTranslator();

  return <>{handleReactionType(activeReaction, t)}</>;
};
