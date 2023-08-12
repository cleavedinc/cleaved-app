import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, SPACING_PX } from "@cleaved/ui";

import { FindMyAccountQuery, PostProjectRepliesQuery } from "../../generated-types/graphql";
import { useNavigateToProfile } from "../../hooks";

import { avatartBase, avatarSmall } from "../avatars/avatar-base-styles";

type PostHeaderAvatarProps = {
  account:
    | FindMyAccountQuery["findMyAccount"]
    | PostProjectRepliesQuery["postProjectReplies"][0]["account"]
    | undefined;
};

const StyledAvatarImage = styled.img`
  ${avatartBase}
  ${avatarSmall}
  margin-right: ${SPACING_PX.TWO};
`;

const StyledAvatarImageLink = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  ${avatarSmall}
  font-size: ${FONT_SIZES.SMALL};
  margin-right: ${SPACING_PX.TWO};
`;

export const PostCommentAvatar: FunctionComponent<PostHeaderAvatarProps> = (props) => {
  const { account } = props;
  const { profilePath } = useNavigateToProfile(account?.id);
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account && account?.currentAvatar && (
        <StyledAvatarImageLink href={profilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {account && !account?.currentAvatar && (
        <StyledAvatarImageLink href={profilePath}>
          <StyledAvatarInitials>
            {firstNameInitial}
            {lastNameInitial}
          </StyledAvatarInitials>
        </StyledAvatarImageLink>
      )}
    </>
  );
};
