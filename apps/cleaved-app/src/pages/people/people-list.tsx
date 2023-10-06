import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsidePeopleListDataWrapper, PeopleListDataWrapper } from "../../data-wrappers";

export const PeopleList: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsidePeopleListDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <PeopleListDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
