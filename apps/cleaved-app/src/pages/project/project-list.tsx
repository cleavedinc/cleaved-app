import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { ProjectsContextProvider } from "../../contexts";
import { ProjectListDataWrapper } from "../../data-wrappers";

export const ProjectList: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <ProjectsContextProvider>
          <ProjectListDataWrapper />
        </ProjectsContextProvider>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
