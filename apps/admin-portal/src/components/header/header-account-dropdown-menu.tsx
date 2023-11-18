import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";

import { BORDERS, FONT_SIZES, NavigationButton, OnOutsideClick, SPACING, DropdownMenu } from "@cleaved/ui";

import { HeaderAvatar } from "../avatars";
import { authTokenContext } from "../../contexts";

const StyledMenuUnorderedList = styled.ul`
  li {
    padding: 0;

    &::before {
      display: none;
    }

    & > a {
      padding: ${SPACING.MEDIUM};
      text-align: center;
      width: 100%;
    }
  }
`;

const StyledLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  cursor: pointer;
  font-size: ${FONT_SIZES.SMALL};
  padding: ${SPACING.MEDIUM};
  text-align: center;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledDropdownMenuNavigationButton = styled(NavigationButton)`
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};

  &:last-child:after {
    border-bottom: none;
  }
`;

const StyledOnOutsideClick = styled(OnOutsideClick)`
  position: relative;
`;

export const HeaderAccountDropdownMenu: FunctionComponent = () => {
  const [isAccountMenuActive, setIsAccountMenuActive] = useState(false);
  const onAccountMenuClick = () => setIsAccountMenuActive(!isAccountMenuActive);
  const handleCloseMenu = () => setIsAccountMenuActive(false);
  const { logOut } = useContext(authTokenContext);

  const handleLogout = () => {
    logOut();
    handleCloseMenu();
  };

  return (
    <StyledOnOutsideClick
      onOutsideClick={() => {
        setIsAccountMenuActive(false);
      }}
    >
      <>
        <HeaderAvatar onClick={onAccountMenuClick} />

        <DropdownMenu className={`${isAccountMenuActive ? "active" : ""}`}>
          <StyledMenuUnorderedList>
            <StyledDropdownMenuNavigationButton>
              <StyledLogoutButton type="button" onClick={handleLogout}>
                Log out
              </StyledLogoutButton>
            </StyledDropdownMenuNavigationButton>
          </StyledMenuUnorderedList>
        </DropdownMenu>
      </>
    </StyledOnOutsideClick>
  );
};
