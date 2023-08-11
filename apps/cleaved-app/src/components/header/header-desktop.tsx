import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FeedbackFish } from "@feedback-fish/react";

import {
  ButtonSecondary,
  NavigationButtonWrapper,
  SPACING,
  NavigationLinksWrapper,
  NavigationWrapper,
} from "@cleaved/ui";

import { useFindMyAccount, useTranslator } from "../../hooks";

import { HeaderAccountDropdownMenu } from "./header-account-dropdown-menu";
import { HeaderLogo } from "./header-logo";
import { MainNavigationLinks } from "./main-navigation-links";
import { StyledStickyHeader } from "./styled-sticky-header";

type HeaderDesktopProps = {
  className?: string;
};

const StyledFeedbackButton = styled(ButtonSecondary)`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  margin-right: ${SPACING.MEDIUM};
  min-height: 0;
  padding: ${SPACING.BASE} ${SPACING.SMALL};
`;

const MainNavigationLinksWrapper = styled(NavigationLinksWrapper)`
  align-items: center;
  display: flex;
  margin-left: 50px;
`;

const StyledLogoWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const HeaderDesktop: FunctionComponent<HeaderDesktopProps> = (props) => {
  const { className } = props;
  const { t } = useTranslator();
  const accountQuery = useFindMyAccount();
  const currentUserEmail = accountQuery.data?.findMyAccount.emailAddress;

  return (
    <StyledStickyHeader className={className} hasBoxShadow>
      <NavigationWrapper>
        <StyledLogoWrapper>
          <HeaderLogo />
        </StyledLogoWrapper>

        <MainNavigationLinksWrapper>
          <MainNavigationLinks />
        </MainNavigationLinksWrapper>

        <NavigationButtonWrapper>
          <FeedbackFish projectId="eb621b958df978" userId={currentUserEmail}>
            <StyledFeedbackButton>{t("buttonLabels.giveFeedback")}</StyledFeedbackButton>
          </FeedbackFish>

          <HeaderAccountDropdownMenu />
        </NavigationButtonWrapper>
      </NavigationWrapper>
    </StyledStickyHeader>
  );
};
