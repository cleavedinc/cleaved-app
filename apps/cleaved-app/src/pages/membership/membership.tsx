import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { MembershipDataWrapper } from "../../data-wrappers";

export const Membership: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <MainColumnMaxWidthWrapper>
          <MembershipDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
