import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { HeaderMenuAvatar } from "../../components";
import { AccountContext } from "../../contexts";

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
  const { accountData, accountDataLoading } = useContext(AccountContext);

  return (
    <>
      {!accountDataLoading && accountData && (
        <AvatarWrapper type="button" onClick={onClick}>
          <HeaderMenuAvatar account={accountData} />
        </AvatarWrapper>
      )}
    </>
  );
};
