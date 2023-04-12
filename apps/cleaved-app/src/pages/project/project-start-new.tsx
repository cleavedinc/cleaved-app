import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { ProjectsContextProvider } from "../../contexts";
import { AsideProjectStartNewDataWrapper, ProjectStartNewDataWrapper } from "../../data-wrappers";

export const ProjectStartNew: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProjectStartNewDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <ProjectsContextProvider>
          <ProjectStartNewDataWrapper />
        </ProjectsContextProvider>
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
