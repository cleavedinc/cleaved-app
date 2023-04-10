import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { TeamsListDataWrapper } from "../../data-wrappers";

export const TeamsList: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <TeamsListDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
