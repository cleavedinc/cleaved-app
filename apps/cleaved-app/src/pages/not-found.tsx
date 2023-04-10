import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { FeedbackFish } from "@feedback-fish/react";
import styled from "styled-components";

import {
  Box,
  ButtonPrimary,
  ButtonSecondary,
  ContentWrapperCentered,
  EmojiThinkingFace,
  EmptyStateNoContent,
  FONT_SIZES,
  mediaQueries,
  SPACING,
} from "@cleaved/ui";

import { AccountContext, authTokenContext } from "../contexts";
import { useTranslator } from "../hooks";
import { routeConstantsCleavedApp } from "../router";

type NotFoundProps = {
  default: boolean;
};

enum PageErrorType {
  PAGE_NOT_FOUND = "PAGE_NOT_FOUND",
  NOT_LOGGED_IN = "NOT_LOGGED_IN",
  GENERAL_ERROR = "GENERAL_ERROR",
}

const StyledBox = styled(Box)`
  margin: 0 ${SPACING.MEDIUM};
  padding: ${SPACING.XXLARGE};

  ${mediaQueries.SM} {
    margin: 0;
  }
`;

const StyledButtonPrimary = styled(ButtonPrimary)`
  margin-right: ${SPACING.LARGE};
`;

const StyledErrorPageButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${SPACING.LARGE};
`;

const StyledFeedbackButton = styled(ButtonSecondary)`
  margin-right: ${SPACING.MEDIUM};
`;

export const NotFound: FunctionComponent<NotFoundProps> = () => {
  const { loading, loggedIn, logOut, preferredOrgId, refreshLogin } = useContext(authTokenContext);
  const [pageErrorType, setPageErrorType] = useState<PageErrorType>(PageErrorType.GENERAL_ERROR);
  const [hasAuthRefreshed, setHasAuthRefreshed] = useState<boolean>(false);
  const { accountData } = useContext(AccountContext);
  const { t } = useTranslator();
  const currentUserEmail = accountData ? accountData?.emailAddress : "user-not-logged-in@notloggedin.com";
  const feedbackFishProjectId = "eb621b958df978";
  const timeoutDelay = 10000;

  useEffect(() => {
    // Commented out in favor of CTAs (home/feedback). Leaving code below if we want to revert some day
    // If logged in and has preferredOrgId, send to home page
    // if (loggedIn && preferredOrgId) {

    //   setPageErrorType(PageErrorType.PAGE_NOT_FOUND);
    //   const timer = setTimeout(() => {
    //     navigate(`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    //   }, timeoutDelay);
    //   return () => clearTimeout(timer);
    // }

    // if loggedin and no preferredOrgid, send them to onboarding screen
    if (loggedIn && !preferredOrgId) {
      navigate(routeConstantsCleavedApp.professionalOnboarding.route);
    }

    // if logged out and no preferredOrgid and has not tried to refresh, try to refresh login
    if (!loggedIn && !preferredOrgId && !hasAuthRefreshed) {
      setHasAuthRefreshed(true);
      refreshLogin();
    }

    // if logged out and not actively trying to refresh, log them out and send them to login page
    if (!loggedIn && hasAuthRefreshed && !loading) {
      setPageErrorType(PageErrorType.NOT_LOGGED_IN);
      const timer = setTimeout(() => {
        logOut();
      }, timeoutDelay);
      return () => clearTimeout(timer);
    }
  }, [hasAuthRefreshed, loading, loggedIn, preferredOrgId]); // eslint-disable-line

  const handleErrorMessage = (errorType: PageErrorType): React.ReactNode => {
    switch (errorType) {
      // case page not found
      case PageErrorType.PAGE_NOT_FOUND:
        return t("errorMessages.pageNotFound");
        break;
      // case not logged in to cleaved
      case PageErrorType.NOT_LOGGED_IN:
        return t("errorMessages.notLoggedIn");
        break;
      // default error
      default:
        return t("errorMessages.somethingWentWrongSorryAboutThat");
    }
  };

  return (
    <ContentWrapperCentered>
      <StyledBox>
        <EmptyStateNoContent
          icon={<EmojiThinkingFace fontSize={FONT_SIZES.XXXLARGE} />}
          message={handleErrorMessage(pageErrorType)}
          messageFontSize={FONT_SIZES.XLARGE}
        />
        <StyledErrorPageButtonsWrapper>
          <StyledButtonPrimary
            type="button"
            onClick={() => navigate(`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`)}
          >
            {t("buttonLabels.goHome")}
          </StyledButtonPrimary>

          <FeedbackFish projectId={feedbackFishProjectId} userId={currentUserEmail}>
            <StyledFeedbackButton>{t("buttonLabels.giveFeedback")}</StyledFeedbackButton>
          </FeedbackFish>
        </StyledErrorPageButtonsWrapper>
      </StyledBox>
    </ContentWrapperCentered>
  );
};
