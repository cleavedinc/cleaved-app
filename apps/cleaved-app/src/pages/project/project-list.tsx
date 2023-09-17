import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { ProjectListDataWrapper } from "../../data-wrappers";

export const ProjectList: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <MainColumnWrapper>
          <ProjectListDataWrapper />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
