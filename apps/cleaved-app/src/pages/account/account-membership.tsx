import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AccountMembershipDataWrapper, AsideAccountDataWrapper } from "../../data-wrappers";

export const AccountMembership: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <AccountMembershipDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
