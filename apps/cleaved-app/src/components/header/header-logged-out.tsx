import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { ButtonLink, COLORS, Logo, SPACING, NavigationButtonWrapper, NavigationWrapper } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { StyledStickyHeader } from "./styled-sticky-header";

const StyledButtonLink = styled(ButtonLink)`
  color: ${COLORS.GRAY_500};
`;

const StyledLogoWrapper = styled.div`
  display: flex;
`;

const StyledLoggedoutStickyHeader = styled(StyledStickyHeader)`
  padding: 0.75rem ${SPACING.MEDIUM};
`;

export const HeaderLoggedOut: FunctionComponent = () => {
  const { t } = useTranslator();
  const { logOut, loggedIn } = useContext(authTokenContext);

  return (
    <StyledLoggedoutStickyHeader hasBoxShadow>
      <NavigationWrapper>
        <StyledLogoWrapper>
          <Logo
            companyName={t("companyName")}
            height="15px"
            isLogoTextVisible
            margin={`0 0.3rem 0 0`}
            url={"/"}
            width="15px"
          />
        </StyledLogoWrapper>

        {loggedIn && (
          <NavigationButtonWrapper>
            <StyledButtonLink type="button" onClick={() => logOut()}>
              {t("buttonLabels.logOut")}
            </StyledButtonLink>
          </NavigationButtonWrapper>
        )}
      </NavigationWrapper>
    </StyledLoggedoutStickyHeader>
  );
};
