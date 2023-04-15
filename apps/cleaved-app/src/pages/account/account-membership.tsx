import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper } from "../../data-wrappers";

export const AccountMembership: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>Account Membership</MainColumnWrapper>
    </ContentWrapper>
  );
};
