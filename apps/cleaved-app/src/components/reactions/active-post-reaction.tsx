import React, { FunctionComponent } from "react";
import styled from "styled-components";

import {
  CelebrationIcon,
  CheckIcon,
  COLORS,
  HandshakeIcon,
  SPACING_PX,
  ThumbUpIcon,
  ThumbUpOutlineIcon,
} from "@cleaved/ui";
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

const StyledThanksText = styled.div`
  color: ${thanksIconColor};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledCelebrateText = styled.div`
  color: ${celebrateIconColor};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledReviewedText = styled.div`
  color: ${reviewedIconColor};
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
    case PostReactionType.Thanks:
      return (
        <>
          <HandshakeIcon color={thanksIconColor} iconSize="19px" />
          <StyledThanksText>{t("reactions.thanks")}</StyledThanksText>
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
    case PostReactionType.Reviewed:
      return (
        <>
          <CheckIcon color={reviewedIconColor} iconSize="19px" />
          <StyledReviewedText>{t("reactions.reviewed")}</StyledReviewedText>
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
