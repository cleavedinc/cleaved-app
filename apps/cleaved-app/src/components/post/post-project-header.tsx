import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { COLORS, FONT_SIZES, FONT_WEIGHTS, SPACING } from "@cleaved/ui";
import { getTimeSinceDate } from "@cleaved/helpers";

import { PostEditMenu, PostHeaderAvatarLink } from "../../components";
import { AccountContext } from "../../contexts";
import { PostProjectSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfessionalProfile } from "../../hooks";

type PostProjectHeaderProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"];
  accountId: string;
  className?: string;
  date: string | null;
  postId: string;
};

const StyledJobTitle = styled.div`
  color: ${COLORS.GRAY_500};
`;

const StyledPostDate = styled.div`
  color: ${COLORS.GRAY_500};
`;

const StyledPostDateWrapper = styled.div`
  color: ${COLORS.GRAY_500};
  text-align: right;
  margin-left: auto;
`;

const StyledPostHeaderWrapper = styled.div`
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.LARGE};
`;

const StyledPostProfessionalInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPostProfessionalName = styled.a`
  color: ${COLORS.BLACK};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
    text-decoration: underline;
  }
`;

export const PostProjectHeader: FunctionComponent<PostProjectHeaderProps> = (props) => {
  const { account, accountId, className, date, postId } = props;
  const { professionalProfilePath } = useNavigateToProfessionalProfile(account?.professionals[0]?.id);
  const { accountData, accountDataLoading } = useContext(AccountContext);

  return (
    <StyledPostHeaderWrapper className={className}>
      <PostHeaderAvatarLink account={account} />

      <StyledPostProfessionalInfoWrapper>
        <StyledPostProfessionalName href={professionalProfilePath}>
          {account?.firstName} {account?.lastName}
        </StyledPostProfessionalName>

        {account?.professionals[0]?.jobTitle && <StyledJobTitle>{account?.professionals[0]?.jobTitle}</StyledJobTitle>}

        {date && <StyledPostDate>{getTimeSinceDate(date)}</StyledPostDate>}
      </StyledPostProfessionalInfoWrapper>

      {!accountDataLoading && accountData?.id === accountId && (
        <StyledPostDateWrapper>
          <PostEditMenu postId={postId} />
        </StyledPostDateWrapper>
      )}
    </StyledPostHeaderWrapper>
  );
};
