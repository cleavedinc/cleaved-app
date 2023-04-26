import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, FONT_SIZES, mediaQueries, RADIUS, SPACING } from "@cleaved/ui";

import { AccountAvatarForm } from "../../forms";
import { FindMyAccountQuery } from "../../generated-types/graphql";

type AsideAccountAvatarProps = {
  account: FindMyAccountQuery["findMyAccount"] | undefined;
  refetchAccountData: (() => void) | undefined;
};

const avatartBase = css`
  align-items: center;
  border-radius: ${RADIUS.CIRCLE};
  border: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 0 auto ${SPACING.SMALL};
  width: 100px;

  ${mediaQueries.XS_LANDSCAPE} {
    height: 150px;
    width: 150px;
  }
`;

const StyledAccountAvatarForm = styled(AccountAvatarForm)`
  font-size: ${FONT_SIZES.XSMALL};
  justify-content: center;
  margin-bottom: ${SPACING.SMALL};
  padding: ${SPACING.MEDIUM} 0;

  ${mediaQueries.XS_LANDSCAPE} {
  }
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarImageWrapper = styled.div`
  position: relative;

  ${mediaQueries.XS_LANDSCAPE} {
    margin-right: ${SPACING.XLARGE};
  }
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XXLARGE};
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
