import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { ProjectListDataWrapper } from "../../data-wrappers";

export const ProjectList: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <ProjectListDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
