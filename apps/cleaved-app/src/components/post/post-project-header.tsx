import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

import { FONT_SIZES, FONT_WEIGHTS, PushPinIcon, SPACING } from "@cleaved/ui";
import { getTimeSinceDate } from "@cleaved/helpers";

import { PostEditMenu, PostHeaderAvatarLink } from "../../components";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useFindMyAccount, useNavigateToProfile, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

type PostProjectHeaderProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"];
  accountId: string;
  className?: string;
  date: string | null;
  isPinned: boolean;
  isPostOpenInModal: boolean;
  postId: string;
  showPinnedMenuButton?: boolean;
  showPinnedStatus?: boolean;
};

const StyledPinnedWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  justify-content: flex-end;
`;

const StyledPushPinIcon = styled(PushPinIcon)`
  margin-right: ${SPACING.BASE};
`;

const StyledJobTitle = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
`;

const StyledPostDate = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
`;

const StyledPostDateWrapper = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  text-align: right;
  margin-left: auto;
`;

const StyledPostHeaderWrapper = styled.div`
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.LARGE};
  padding: ${SPACING.MEDIUM} ${SPACING.MEDIUM} 0;
`;

const StyledPostHeaderContentWrapper = styled.div`
  display: flex;
`;

const StyledPostProfessionalInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledPostProfessionalName = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${({ theme }) => theme.colors.baseTextLink_colorHover};
    text-decoration: underline;
  }
`;

export const PostProjectHeader: FunctionComponent<PostProjectHeaderProps> = (props) => {
  const {
    account,
    accountId,
    className,
    date,
    isPinned,
    isPostOpenInModal,
    postId,
    showPinnedMenuButton,
    showPinnedStatus,
  } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { profilePath } = useNavigateToProfile(account?.id);
  const { findMyAccountData, findMyAccountDataLoading } = useFindMyAccount();
  const theme = useTheme();
  const { t } = useTranslator();

  return (
    <StyledPostHeaderWrapper className={className}>
      {showPinnedStatus && isPinned && (
        <StyledPinnedWrapper>
          <StyledPushPinIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.SMALL} />
          {t("post.pinned")}
        </StyledPinnedWrapper>
      )}

      <StyledPostHeaderContentWrapper>
        <PostHeaderAvatarLink account={account} />

        <StyledPostProfessionalInfoWrapper>
          <StyledPostProfessionalName href={profilePath}>
            {account?.firstName} {account?.lastName}
          </StyledPostProfessionalName>

          {account?.jobTitle && <StyledJobTitle>{account?.jobTitle}</StyledJobTitle>}

          {date && <StyledPostDate>{getTimeSinceDate(date)}</StyledPostDate>}
        </StyledPostProfessionalInfoWrapper>

        {hasPermission && !isPostOpenInModal && !findMyAccountDataLoading && findMyAccountData?.id === accountId && (
          <StyledPostDateWrapper>
            <PostEditMenu isPinned={isPinned} postId={postId} showPinnedMenuButton={showPinnedMenuButton} />
          </StyledPostDateWrapper>
        )}
      </StyledPostHeaderContentWrapper>
    </StyledPostHeaderWrapper>
  );
};
