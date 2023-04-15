import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper, AccountDataWrapper } from "../../data-wrappers";

export const Account: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <AccountDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
