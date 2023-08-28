import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, RightColumnWrapper } from "@cleaved/ui";

import { authTokenContext, PostFormContextProvider, PostsContextProvider } from "../contexts";
import { AsideHomeDataWrapper, AsideHomeOrganizationMembersDataWrapper, HomeDataWrapper } from "../data-wrappers";

import { routeConstantsCleavedApp } from "../router";

export const Home: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);

  if (!preferredOrgId) {
    // if no preferredOrgId, send to onboarding screen
    navigate(
      `${routeConstantsCleavedApp.professionalOnboarding.route}${routeConstantsCleavedApp.professionalOnboardingRegisterOrganization.route}`
    );
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
