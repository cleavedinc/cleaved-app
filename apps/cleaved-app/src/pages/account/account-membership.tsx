import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AccountMembershipDataWrapper } from "../../data-wrappers";

export const AccountMembership: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <AccountMembershipDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
