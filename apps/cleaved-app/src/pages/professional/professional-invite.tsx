import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideSharelinkInviteDataWrapper, PeopleListProfessionalInviteDataWrapper } from "../../data-wrappers";

export const PeopleListProfessionalInvite: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideSharelinkInviteDataWrapper />
        </LeftColumnWrapper>

        <MainColumnWrapper>
          <PeopleListProfessionalInviteDataWrapper />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
