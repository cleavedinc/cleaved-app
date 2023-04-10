import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS, SPACING } from "@cleaved/ui";

import { AccountAvatarForm } from "../../forms";

type AsideAccountAvatarProps = {
  account:
    | {
        id: string;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
        currentAvatar?: string | null | undefined;
      }
    | undefined;
  refetchAccountData: (() => void) | undefined;
};

const avatartBase = css`
  align-items: center;
  border-radius: ${RADIUS.CIRCLE};
  border: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 0 auto ${SPACING.MEDIUM};
  width: 100px;
`;

const StyledAccountAvatarForm = styled(AccountAvatarForm)`
  bottom: 0;
  position: absolute;
  right: 60px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarImageWrapper = styled.div`
  position: relative;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XXLARGE};
`;

export const AsideAccountAvatar: FunctionComponent<AsideAccountAvatarProps> = (props) => {
  const { account, refetchAccountData } = props;
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      <StyledAvatarImageWrapper>
        {account?.currentAvatar && (
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        )}

        {!account?.currentAvatar && (
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
