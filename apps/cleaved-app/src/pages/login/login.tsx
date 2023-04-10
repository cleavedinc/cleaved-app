import React, { FunctionComponent } from "react";

import {
  ContentWrapper,
  LeftColumnWrapper,
  MainColumnWrapperMaxWidth,
  RightColumnWrapper,
  StickUnderHeaderDesktopOnly,
} from "@cleaved/ui";

import {
  Consequences,
  CoreOffering,
  Problems,
  SocialProof,
  TransformationStory,
  Ultimatum,
  ValuePropLogin,
} from "./posts";

import { AsideLoginPageDataWrapper, AsideLoginPageMembersDataWrapper } from "../../data-wrappers";

export const Login: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <StickUnderHeaderDesktopOnly>
          <AsideLoginPageDataWrapper />
        </StickUnderHeaderDesktopOnly>
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <ValuePropLogin />
        <Problems />
        <Consequences />
        <TransformationStory />
        <SocialProof />
        <CoreOffering />
        <Ultimatum />
      </MainColumnWrapperMaxWidth>

      <RightColumnWrapper>
        <AsideLoginPageMembersDataWrapper />
      </RightColumnWrapper>
    </ContentWrapper>
  );
};
