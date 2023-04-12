import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth, RightColumnWrapper } from "@cleaved/ui";

import { PostsContextProvider, ProjectsContextProvider } from "../contexts";
import { AsideHomeDataWrapper, AsideHomeOrganizationMembersDataWrapper, HomeDataWrapper } from "../data-wrappers";

export const Home: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <PostsContextProvider>
        <LeftColumnWrapper>
          <ProjectsContextProvider>
            <AsideHomeDataWrapper />
          </ProjectsContextProvider>
        </LeftColumnWrapper>

        <MainColumnWrapperMaxWidth>
          <HomeDataWrapper />
        </MainColumnWrapperMaxWidth>
      </PostsContextProvider>

      <RightColumnWrapper>
        <AsideHomeOrganizationMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
