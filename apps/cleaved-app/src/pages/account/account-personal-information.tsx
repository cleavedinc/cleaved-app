import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper, AccountPersonalInformationDataWrapper } from "../../data-wrappers";

export const AccountPersonalInformation: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <AccountPersonalInformationDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
