import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideMembershipDataWrapper, MembershipDataWrapper } from "../../data-wrappers";

export const Membership: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideMembershipDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <MembershipDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
