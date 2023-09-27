import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { MembershipPlansDataWrapper } from "../../data-wrappers";

export const MembershipPlans: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <MainColumnWrapper>
          <MembershipPlansDataWrapper />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
