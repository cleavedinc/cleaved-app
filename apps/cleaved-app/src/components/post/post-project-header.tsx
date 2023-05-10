import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { FONT_SIZES, FONT_WEIGHTS, SPACING } from "@cleaved/ui";
import { getTimeSinceDate } from "@cleaved/helpers";

import { PostEditMenu, PostHeaderAvatarLink } from "../../components";
import { AccountContext } from "../../contexts";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfile } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

type PostProjectHeaderProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"];
  accountId: string;
  className?: string;
  date: string | null;
  isPostOpenInModal: boolean;
  postId: string;
};

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
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.LARGE};
  padding: ${SPACING.SMALL} ${SPACING.SMALL} 0;
`;

const StyledPostProfessionalInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  const { account, accountId, className, date, isPostOpenInModal, postId } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { profilePath } = useNavigateToProfile(account?.id);
  const { accountData, accountDataLoading } = useContext(AccountContext);

  return (
    <StyledPostHeaderWrapper className={className}>
      <PostHeaderAvatarLink account={account} />

      <StyledPostProfessionalInfoWrapper>
        <StyledPostProfessionalName href={profilePath}>
          {account?.firstName} {account?.lastName}
        </StyledPostProfessionalName>

        {account?.jobTitle && <StyledJobTitle>{account?.jobTitle}</StyledJobTitle>}

        {date && <StyledPostDate>{getTimeSinceDate(date)}</StyledPostDate>}
      </StyledPostProfessionalInfoWrapper>

      {hasPermission && !isPostOpenInModal && !accountDataLoading && accountData?.id === accountId && (
        <StyledPostDateWrapper>
          <PostEditMenu postId={postId} />
        </StyledPostDateWrapper>
      )}
    </StyledPostHeaderWrapper>
  );
};
