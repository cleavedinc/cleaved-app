import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, RightColumnWrapper } from "@cleaved/ui";

import { PostsContextProvider } from "../contexts";
import { AsideHomeDataWrapper, AsideHomeOrganizationMembersDataWrapper, HomeDataWrapper } from "../data-wrappers";

export const Home: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <PostsContextProvider>
        <LeftColumnWrapper>
          <AsideHomeDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <HomeDataWrapper />
        </MainColumnMaxWidthWrapper>
      </PostsContextProvider>

      <RightColumnWrapper>
        <AsideHomeOrganizationMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
