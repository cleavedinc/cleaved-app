import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { COLORS, CommentIcon, SPACING_PX } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import { StyledPostProjectFooterButtonButton } from "./post-project-footer-button";

type PostProjectCommentProps = {
  showComments: () => void;
};

const StyledReactionText = styled.div`
  color: ${COLORS.GRAY_500};
  margin-left: ${SPACING_PX.ONE};
`;

export const PostProjectComment: FunctionComponent<PostProjectCommentProps> = (props) => {
  const { showComments } = props;
  const { t } = useTranslator();

  return (
    <StyledPostProjectFooterButtonButton onClick={() => showComments()} type="button">
      <CommentIcon color={COLORS.GRAY_500} />
      <StyledReactionText>{t("post.comment")}</StyledReactionText>
    </StyledPostProjectFooterButtonButton>
  );
};
