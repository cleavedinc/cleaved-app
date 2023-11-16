import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { SPACING } from "@cleaved/ui";

import { HeaderMenuAvatar } from "./header-menu-avatar";
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
  const { data, loading } = useFindMyAccount();

  return (
    <>
      {!loading && data && data?.findMyAccount && (
        <AvatarWrapper type="button" onClick={onClick}>
          {data?.findMyAccount?.firstName && <StyledAccountName>{data?.findMyAccount?.firstName}</StyledAccountName>}
          <HeaderMenuAvatar account={data?.findMyAccount} />
        </AvatarWrapper>
      )}
    </>
  );
};
