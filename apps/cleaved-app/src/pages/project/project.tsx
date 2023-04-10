import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth, RightColumnWrapper } from "@cleaved/ui";

import { PostsContextProvider } from "../../contexts";
import {
  AsideProjectDataWrapper,
  ProjectDataWrapper,
  AsideProjectOrganizationMembersDataWrapper,
} from "../../data-wrappers";

export const Project: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <PostsContextProvider>
        <LeftColumnWrapper>
          <AsideProjectDataWrapper />
        </LeftColumnWrapper>

        <MainColumnWrapperMaxWidth>
          <ProjectDataWrapper />
        </MainColumnWrapperMaxWidth>
      </PostsContextProvider>

      <RightColumnWrapper>
        <AsideProjectOrganizationMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
