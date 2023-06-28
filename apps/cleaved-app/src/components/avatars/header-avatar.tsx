import React, { FunctionComponent } from "react";
import styled from "styled-components";

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

export const HeaderAvatar: FunctionComponent<HeaderAvatarProps> = (props) => {
  const { onClick } = props;
  const accountQuery = useFindMyAccount();

  return (
    <>
      {!accountQuery.loading && accountQuery.data?.findMyAccount && (
        <AvatarWrapper type="button" onClick={onClick}>
          <HeaderMenuAvatar account={accountQuery.data?.findMyAccount} />
        </AvatarWrapper>
      )}
    </>
  );
};
