import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { SPACING } from "@cleaved/ui";

import { HeaderMenuAvatar } from "../../components";
import { useFindMyAccount } from "../../hooks";

type HeaderAvatarProps = {
  onClick?: () => void;
};

const AvatarWrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0;
  vertical-align: middle;

  &:focus {
    outline: none;
  }
`;

const StyledAccountName = styled.div`
  margin-right: ${SPACING.SMALL};
`;

export const HeaderAvatar: FunctionComponent<HeaderAvatarProps> = (props) => {
  const { onClick } = props;
  const { findMyAccountData, findMyAccountDataLoading } = useFindMyAccount();

  return (
    <>
      {!findMyAccountDataLoading && findMyAccountData && (
        <AvatarWrapper type="button" onClick={onClick}>
          {findMyAccountData && findMyAccountData?.firstName && (
            <StyledAccountName>{findMyAccountData?.firstName}</StyledAccountName>
          )}
          <HeaderMenuAvatar account={findMyAccountData} />
        </AvatarWrapper>
      )}
    </>
  );
};
