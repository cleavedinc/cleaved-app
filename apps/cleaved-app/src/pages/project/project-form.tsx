import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideProjectStartNewDataWrapper, ProjectFormDataWrapper } from "../../data-wrappers";

export const ProjectForm: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProjectStartNewDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProjectFormDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
