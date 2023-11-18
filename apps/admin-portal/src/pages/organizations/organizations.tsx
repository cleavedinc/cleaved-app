import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideHomeDataWrapper, OrganizationsDataWrapper } from "../../data-wrappers";

export const Organizations: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideHomeDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <OrganizationsDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
