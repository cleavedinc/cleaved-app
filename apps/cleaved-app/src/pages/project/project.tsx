import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, RightColumnWrapper } from "@cleaved/ui";

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

        <MainColumnMaxWidthWrapper>
          <ProjectDataWrapper />
        </MainColumnMaxWidthWrapper>
      </PostsContextProvider>

      <RightColumnWrapper>
        <AsideProjectOrganizationMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
