import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, RightColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { PostFormContextProvider, PostsContextProvider } from "../../contexts";
import { AsideHomeDataWrapper, AsideHomeOrganizationMembersDataWrapper, HomeDataWrapper } from "../../data-wrappers";

export const Home: FunctionComponent = () => {
  return (
    <>
      <Header />

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
    </>
  );
};
