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

export const CoreOffering: FunctionComponent = () => {
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
            <PostProfessionalName>Jeremy Slottje</PostProfessionalName>
            <StyledJobTitle>Founder</StyledJobTitle>
          </StyledMemberNameWrapper>
        </PostHeaderWrapper>

        <StyledMessage>
          <p>What we offer</p>

          <p>
            A social colaboration platform for your projects that is familiar, easy to use and helps you deliver the
            best to your customers and your teams.
          </p>

          <ul>
            <li>CHECKICON - Stay informed with project timeslines that capture key decisions, updates and progress.</li>
            <li>
              CHECKICON - Keep organized with centralized project feedback, posts, comments, replies and reactions.
            </li>
            <li>
              CHECKICON - Manage up and receive leadership guidance and feedback, ensureing quality and timeiness of
              produc delivery
            </li>

            <li>
              INPROGRESSICON - Give contextual feedback to anyone in the company to help professionals attain their
              personal best. (coming soon)
            </li>
          </ul>
        </StyledMessage>

        <StyledPostImageWrapper>
          <PhotoView src={"/helper-info/placeholder.png"}>
            <StyledPostImage src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder-2.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder-2.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder-3.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder-3.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder-4.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder-4.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder-5.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder-5.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>
        </StyledPostImageWrapper>

        <StyledPostInfoBar>
          <ReactionTypesAndTotalCount reactionsExpressed={[PostReactionType.Like]} reactionTotalCount={"1"} />

          <StyledPostInfoBarCommentCount onClick={() => {}}>
            1 <StyledPostComments>{t("post.comment")}</StyledPostComments>
          </StyledPostInfoBarCommentCount>
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
                <ActivePostReaction myReaction={PostReactionType.Like} />
              </StyledPostFooterButtonButton>
            </StyledTooltipWhite>
          </StyledTooltipWrapper>

          <PostProjectComment showComments={() => {}} />
        </StyledPostFooter>
      </StyledProjectPostBox>
    </PhotoProvider>
  );
};
