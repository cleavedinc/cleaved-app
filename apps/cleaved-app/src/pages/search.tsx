import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../components";
// import { AsideDataWrapper } from "../data-wrappers";

export const Search: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>{/* <AsideDataWrapper /> */}</LeftColumnWrapper>

        <MainColumnWrapper>
          <p>something here</p>
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
