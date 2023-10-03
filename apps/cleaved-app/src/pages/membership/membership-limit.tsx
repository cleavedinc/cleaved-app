import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideMembershipLimitDataWrapper, MembershipLimitDataWrapper } from "../../data-wrappers";

export const MembershipLimit: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideMembershipLimitDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <MembershipLimitDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
