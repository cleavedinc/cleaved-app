import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { MembershipDataWrapper } from "../../data-wrappers";

export const Membership: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <MembershipDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
