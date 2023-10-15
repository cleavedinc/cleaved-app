import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideProjectListDataWrapper, ProjectListDataWrapper } from "../../data-wrappers";

export const ProjectList: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideProjectListDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <ProjectListDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
