import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideProjectStartNewDataWrapper, ProjectStartNewDataWrapper } from "../../data-wrappers";

export const ProjectStartNew: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProjectStartNewDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProjectStartNewDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
