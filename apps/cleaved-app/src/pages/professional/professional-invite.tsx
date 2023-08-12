import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideSharelinkInviteDataWrapper, PeopleListProfessionalInviteDataWrapper } from "../../data-wrappers";
import { useTranslator } from "../../hooks";

export const PeopleListProfessionalInvite: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideSharelinkInviteDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <PeopleListProfessionalInviteDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
