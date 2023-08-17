import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, RightColumnWrapper } from "@cleaved/ui";

import { authTokenContext, PostFormContextProvider, PostsContextProvider } from "../contexts";
import { AsideHomeDataWrapper, AsideHomeOrganizationMembersDataWrapper, HomeDataWrapper } from "../data-wrappers";
import { useTermsAccepted } from "../hooks";

import { routeConstantsCleavedApp } from "../router";

export const Home: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { termsAccepted, termsAcceptedIsLoading } = useTermsAccepted();

  if (!preferredOrgId) {
    // if no preferredOrgId, send to onboarding screen
    navigate(routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route);
  }

  if (termsAcceptedIsLoading || !termsAccepted) {
    return null;
  }

  return (
    <ContentWrapper>
      <PostsContextProvider>
        <PostFormContextProvider>
          <LeftColumnWrapper>
            <AsideHomeDataWrapper />
          </LeftColumnWrapper>

          <MainColumnMaxWidthWrapper>
            <HomeDataWrapper />
          </MainColumnMaxWidthWrapper>
        </PostFormContextProvider>
      </PostsContextProvider>

      <RightColumnWrapper>
        <AsideHomeOrganizationMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
