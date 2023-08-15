import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, RightColumnWrapper } from "@cleaved/ui";

import { PostFormContextProvider, PostsContextProvider } from "../../contexts";
import {
  AsideProjectDataWrapper,
  ProjectDataWrapper,
  AsideProjectOrganizationMembersDataWrapper,
} from "../../data-wrappers";

export const Project: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <PostsContextProvider pinnedFirst={true}>
        <PostFormContextProvider>
          <LeftColumnWrapper>
            <AsideProjectDataWrapper />
          </LeftColumnWrapper>

          <MainColumnMaxWidthWrapper>
            <ProjectDataWrapper />
          </MainColumnMaxWidthWrapper>
        </PostFormContextProvider>
      </PostsContextProvider>

      <RightColumnWrapper>
        <AsideProjectOrganizationMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
