import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { AsideProjectStartNewDataWrapper, ProjectStartNewDataWrapper } from "../../data-wrappers";

export const ProjectStartNew: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProjectStartNewDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <ProjectStartNewDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
