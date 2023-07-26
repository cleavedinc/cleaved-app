import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { PeopleListProfessionalInviteDataWrapper } from "../../data-wrappers";

export const PeopleListProfessionalInvite: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <PeopleListProfessionalInviteDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
