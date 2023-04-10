import React, { FunctionComponent } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { StyledTooltipWhite } from "@cleaved/ui";

import { ReactionTypesAndTotalCount } from "../../../components";
import { ReactionSelections } from "../../../components/reactions/reaction-selections";
import { ActivePostReaction } from "../../../components/reactions/active-post-reaction";
import { PostProjectComment } from "../../../components/post/post-project-comment";
import { PostReactionType } from "../../../generated-types/graphql";
import { useTranslator } from "../../../hooks";

import {
  StyledAvatarImage,
  StyledAvatarImageLink,
  PostHeaderWrapper,
  StyledJobTitle,
  StyledMemberNameWrapper,
  StyledMessage,
  StyledPostComments,
  StyledPostInfoBar,
  StyledPostFooter,
  StyledPostFooterButtonButton,
  StyledPostImage,
  StyledPostImageMultiple,
  StyledPostImageWrapper,
  StyledPostInfoBarCommentCount,
  PostProfessionalName,
  StyledProjectPostBox,
  StyledToolbarPostInfo,
  StyledTooltipWrapper,
} from "./shared-styles";

export const SocialProof: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <PhotoProvider
      maskOpacity={0.6}
      toolbarRender={() => {
        return (
          <StyledToolbarPostInfo>
            {t("post.photoViewerToolbarMessage", {
              firstName: "SOME FIRST NAME",
              lastName: "SOME LAST NAME",
            })}
            {new Date().toLocaleDateString()}
          </StyledToolbarPostInfo>
        );
      }}
    >
      <StyledProjectPostBox>
        <PostHeaderWrapper>
          <StyledAvatarImageLink href="#">
            <StyledAvatarImage src={"/helper-info/avatars/avatar-female-2.svg"} alt="profile avatar" />
          </StyledAvatarImageLink>

          <StyledMemberNameWrapper>
            <PostProfessionalName>Maya Patel</PostProfessionalName>
            <StyledJobTitle>UX Designer</StyledJobTitle>
          </StyledMemberNameWrapper>
        </PostHeaderWrapper>

        <StyledMessage>
          <p>We started using cleaved at my company and it has helped us all stay better informed with our projects.</p>

          <p>
            I especially like how this feels like a social platform for projects. It makes it easy to give feedback and
            keep up with all the things going on across the company.
          </p>
        </StyledMessage>

        <StyledPostImageWrapper>
          <PhotoView src={"/helper-info/placeholder.png"}>
            <StyledPostImage src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>
        </StyledPostImageWrapper>

        <StyledPostInfoBar>
          <ReactionTypesAndTotalCount
            reactionsExpressed={[PostReactionType.Like, PostReactionType.Thanks, PostReactionType.Celebrate]}
            reactionTotalCount={"3"}
          />
        </StyledPostInfoBar>

        <StyledPostFooter>
          <StyledTooltipWrapper>
            <StyledTooltipWhite
              allowHTML
              delay={[500, 300]}
              interactive
              tooltip={<ReactionSelections postId={"123"} postProjectSetReaction={() => {}} />}
            >
              <StyledPostFooterButtonButton onClick={() => {}} type="button">
                <ActivePostReaction myReaction={PostReactionType.NoReaction} />
              </StyledPostFooterButtonButton>
            </StyledTooltipWhite>
          </StyledTooltipWrapper>

          <PostProjectComment showComments={() => {}} />
        </StyledPostFooter>
      </StyledProjectPostBox>
    </PhotoProvider>
  );
};
