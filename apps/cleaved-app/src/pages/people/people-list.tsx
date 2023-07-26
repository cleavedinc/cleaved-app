import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { PeopleListDataWrapper } from "../../data-wrappers";

export const PeopleList: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <PeopleListDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
