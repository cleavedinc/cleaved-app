import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

// import { AsideDataWrapper } from "../data-wrappers";

export const Search: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>{/* <AsideDataWrapper /> */}</LeftColumnWrapper>

      <MainColumnWrapper>
        <p>something here</p>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
