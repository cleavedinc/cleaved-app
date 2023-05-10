import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

import { CommentIcon, SPACING_PX } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import { StyledPostProjectFooterButtonButton } from "./post-project-footer-button";

type PostProjectCommentProps = {
  showComments: () => void;
};

const StyledCommentButtonText = styled.div`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
  margin-left: ${SPACING_PX.ONE};
`;

const StyledPostProjectFooterButtonButtonAdjustedWidth = styled(StyledPostProjectFooterButtonButton)`
  flex: 0 0 50%;
`;

export const PostProjectComment: FunctionComponent<PostProjectCommentProps> = (props) => {
  const { showComments } = props;
  const theme = useTheme();
  const { t } = useTranslator();

  return (
    <StyledPostProjectFooterButtonButtonAdjustedWidth onClick={() => showComments()} type="button">
      <CommentIcon color={theme.colors.baseIcon_color} />
      <StyledCommentButtonText>{t("post.comment")}</StyledCommentButtonText>
    </StyledPostProjectFooterButtonButtonAdjustedWidth>
  );
};
