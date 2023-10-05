import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideProjectStartNewDataWrapper, ProjectFormDataWrapper } from "../../data-wrappers";

export const ProjectForm: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideProjectStartNewDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <ProjectFormDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
