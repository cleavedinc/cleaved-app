import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideHomeDataWrapper, HomeDataWrapper } from "../../data-wrappers";

export const Home: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideHomeDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <HomeDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
