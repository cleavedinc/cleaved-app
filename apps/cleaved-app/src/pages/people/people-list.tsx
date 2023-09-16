import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { PeopleListDataWrapper } from "../../data-wrappers";

export const PeopleList: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <MainColumnWrapper>
          <PeopleListDataWrapper />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
