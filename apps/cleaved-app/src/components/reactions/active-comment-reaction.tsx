import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { PostReactionType } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";

import {
  celebrateIconColor,
  likeIconColor,
  likeIconInactiveColor,
  reviewedIconColor,
  thanksIconColor,
} from "./reaction-colors";

type PostReactionProps = {
  activeReaction: PostReactionType;
};

const StyledReactionLikeText = styled.div`
  color: ${likeIconColor};
`;

const StyledReactionThanksText = styled.div`
  color: ${thanksIconColor};
`;

const StyledReactionCelebrateText = styled.div`
  color: ${celebrateIconColor};
`;

const StyledReactionReviewedText = styled.div`
  color: ${reviewedIconColor};
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
    case PostReactionType.Thanks:
      return <StyledReactionThanksText>{t("reactions.thanks")}</StyledReactionThanksText>;
      break;
    case PostReactionType.Celebrate:
      return <StyledReactionCelebrateText>{t("reactions.celebrate")}</StyledReactionCelebrateText>;
      break;
    case PostReactionType.Reviewed:
      return <StyledReactionReviewedText>{t("reactions.reviewed")}</StyledReactionReviewedText>;
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
