import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, COLORS, FONT_SIZES, RADIUS, SPACING_PX } from "@cleaved/ui";

import { PostProjectSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfessionalProfile } from "../../hooks";

type PostHeaderAvatarProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"] | undefined;
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 30px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarImageLink = styled.a`
  color: ${COLORS.BLACK};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XSMALL};
`;

export const PostHeaderAvatarLink: FunctionComponent<PostHeaderAvatarProps> = (props) => {
  const { account } = props;
  const { professionalProfilePath } = useNavigateToProfessionalProfile(account && account.id);
  const firstNameInitial = (account && account.firstName?.charAt(0).toUpperCase()) || "";
  const lastNameInitial = (account && account.lastName?.charAt(0).toUpperCase()) || "";

  return (
    <>
      {account && account.currentAvatar && (
        <StyledAvatarImageLink href={professionalProfilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {account && !account.currentAvatar && (
        <StyledAvatarImageLink href={professionalProfilePath}>
          <StyledAvatarInitials>
            {firstNameInitial}
            {lastNameInitial}
          </StyledAvatarInitials>
        </StyledAvatarImageLink>
      )}
    </>
  );
};
