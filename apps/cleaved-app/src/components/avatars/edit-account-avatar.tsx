import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, mediaQueries, SPACING } from "@cleaved/ui";

import { AccountAvatarForm } from "../../forms";
import { FindMyAccountQuery } from "../../generated-types/graphql";

import { avatartBase, avatarSizeLarge } from "../avatars/avatar-base-styles";

type AsideAccountAvatarProps = {
  account: FindMyAccountQuery["findMyAccount"] | undefined;
  refetchAccountData: (() => void) | undefined;
};

const StyledAccountAvatarForm = styled(AccountAvatarForm)`
  font-size: ${FONT_SIZES.XSMALL};
  justify-content: center;
  margin-bottom: ${SPACING.SMALL};
  padding: 0;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
  ${avatarSizeLarge}
  margin: 0 auto ${SPACING.SMALL};
`;

const StyledAvatarImageWrapper = styled.div`
  position: relative;

  ${mediaQueries.XS_LANDSCAPE} {
    margin-right: ${SPACING.XLARGE};
  }
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  ${avatarSizeLarge}
  font-size: ${FONT_SIZES.XXLARGE};
  margin: 0 auto ${SPACING.SMALL};
`;

export const EditAccountAvatar: FunctionComponent<AsideAccountAvatarProps> = (props) => {
  const { account, refetchAccountData } = props;
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      <StyledAvatarImageWrapper>
        {account && account?.currentAvatar && (
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        )}

        {account && !account?.currentAvatar && (
          <StyledAvatarInitials>
            {firstNameInitial}
            {lastNameInitial}
          </StyledAvatarInitials>
        )}

        <StyledAccountAvatarForm refetchAccountData={refetchAccountData} />
      </StyledAvatarImageWrapper>
    </>
  );
};
